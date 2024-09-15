import { Post, User } from "./models";
import { connectionToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connectionToDb()
    const posts = await Post.find()
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch posts');
  }
}

export const getPost = async (slug) => {
  try {
    connectionToDb()
    const post = await Post.findOne({ slug })
    return post;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch post');
  }
}

export const getUser = async (id) => {
  noStore();
  try {
    connectionToDb()
    console.log('id :>> ', id);
    const user = await User.findById(id)
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch user');
  }
}

export const addUser = async (data) => {
  try {
    connectionToDb()

    const newUserId = new ObjectId()
    const newUser = new User({
      userId: newUserId,
      ...data,
    })

    await newUser.save()
    console.log('save user in db')
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch user');
  }
}
