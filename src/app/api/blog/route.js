import { Post } from "@/lib/models";
import { connectionToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    connectionToDb()

    const posts = await Post.find()
    return NextResponse.json(posts)
  } catch (error) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
}
