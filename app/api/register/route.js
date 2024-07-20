import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { checkLength } from "@/lib/formValidate";

export async function POST(req) {
  await connectMongoDB();
  const { username, password, confirmPassword } = await req.json();
  const user = await User.findOne({ username });
  const errorMessageList = [];

  if (user) {
    return NextResponse.json(
      { errorMessageList: ["Tài khoản đã tồn tại"] },
      { status: 400 }
    );
  }

  if (!checkLength(username, 4, 10)) {
    errorMessageList.push("Username phải từ 4 đến 10 kí tự!");
  }
  if (!checkLength(password, 6, 20)) {
    errorMessageList.push("Password phải từ 6 đến 20 kí tự!");
  } else {
    if (confirmPassword !== password)
      errorMessageList.push("Confirm password không khớp!");
  }

  if (errorMessageList.length > 0) {
    return NextResponse.json({ errorMessageList }, { status: 400 });
  }

  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(password, salt);

  const newUser = new User({
    username,
    password: hashedPassword,
  });

  await newUser.save();

  const tokenData = {
    id: newUser._id,
    username: newUser.username,
  };

  const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
    expiresIn: "1d",
  });

  const response = NextResponse.json({
    message: "Login successful",
    success: true,
  });

  response.cookies.set("token", token, {
    httpOnly: true,
  });

  return response;
}
