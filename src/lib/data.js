import { Post, User } from "./models";
import { connectionToDb } from "./utils";

export const getPosts = () => {
  try {
    connectionToDb()
    const posts = Post.find()
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch posts');
  }
}

export const getPost = (slug) => {
  try {
    connectionToDb()
    const posts = Post.find({ slug })
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch post');
  }
}

export const getUser = (id) => {
  try {
    connectionToDb()
    const user = User.findById(id)
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
