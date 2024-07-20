"use server";
import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectMongoDB();
  const { userId, comicSlug } = await req.json();
  const user = await User.findOne({ _id: userId });

  if (!user.favorites.includes(comicSlug)) user.favorites.unshift(comicSlug);
  else
    user.favorites = user.favorites.filter((favSlug) => favSlug !== comicSlug);

  await user.save();

  return NextResponse.json({ message: "complete sir" });
}
