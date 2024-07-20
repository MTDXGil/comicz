"use server";
import connectMongoDB from "@/lib/mongodb";
import Comment from "@/models/comment";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectMongoDB();
  const { username, commentText, comicSlug } = await req.json();
  const newComment = new Comment({ username, comment: commentText, comicSlug });
  await newComment.save();
  return NextResponse.json({ message: "complete sir" });
}
