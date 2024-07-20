"use server";
import connectMongoDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/user";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  await connectMongoDB();
  const { username, password } = await req.json();
  const user = await User.findOne({ username });

  if (!user) {
    return NextResponse.json(
      { errorMessageList: ["Tài khoản không tồn tại!"] },
      { status: 400 }
    );
  }

  const validPassword = await bcryptjs.compare(password, user.password);

  if (!validPassword) {
    return NextResponse.json({ error: "Invlid password" }, { status: 400 });
  }

  const tokenData = {
    id: user._id,
    username: user.username,
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
