"use server";

import { connectionToDb } from "./utils";

export const addPost = async (prevState, formData) => {
  const { title, desc, slug, userId, img } = Object.fromEntries(formData);
  try {
    connectionToDb()

    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      img
    })
    await newPost.save()
    console.log('save post in db')
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
}

export const addUser = async (prevState, formData) => {
  const { username, email, password, img, isAdmin } = Object.fromEntries(formData);
  try {
    connectionToDb()

    const userId = new ObjectId()
    const newUser = new User({
      userId,
      username,
      email,
      password,
      img,
      isAdmin
    })

    await newUser.save()
    console.log('save user in db')
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch user');
  }
}
