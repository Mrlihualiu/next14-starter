"use server";

import { User, Post } from "./models";
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
  console.log('formData :>> ', formData);
  const { username, email, password, img } = Object.fromEntries(formData);
  try {
    connectionToDb()

    // const userId = new ObjectId()
    const newUser = new User({
      username,
      email,
      password,
      img
    })

    await newUser.save()
    console.log('save user in db')
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
}
