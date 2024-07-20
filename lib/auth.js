"use server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import User from "@/models/user";
import Comment from "@/models/comment";

export async function checkAuthenticated() {
  const cookieStore = cookies();

  try {
    const tokenInformation = await jwt.verify(
      cookieStore.get("token").value,
      process.env.TOKEN_SECRET
    );
    return tokenInformation.id;
  } catch (error) {
    return false;
  }
}

export async function deleteToken() {
  const cookieStore = cookies();

  await cookieStore.delete("token");
}

export async function getUser() {
  const isAuthenticated = await checkAuthenticated();

  if (isAuthenticated) {
    const user = await User.findOne({ _id: isAuthenticated });
    return JSON.stringify(user);
  }

  return undefined;
}

export async function getComments(comicSlug) {
  try {
    const comments = await Comment.find({ comicSlug });

    return comments;
  } catch (error) {
    return [];
  }
}
