import { Post } from "@/lib/models";
import { connectionToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connectionToDb()

    const posts = await Post.findOne({ slug })
    return NextResponse.json(posts)
  } catch (error) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
}

export const DELETE = async (request, { params }) => {
  const { slug } = params;
  try {
    connectionToDb()

    await Post.deleteOne({ slug })
    return NextResponse.json("Post deleted");
  } catch (error) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
}
