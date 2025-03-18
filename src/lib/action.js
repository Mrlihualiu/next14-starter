"use server";

import { User, Post, List } from "./models";
import { connectionToDb } from "./utils";
import bcrypt from "bcrypt";
import { signIn, signOut } from "./auth";

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

export const addUser = async (formData) => {
  let { username, phone, password, isAdmin, status } = formData;
  try {
    connectionToDb()
    const user = await User.findOne({ phone })
    if (user) {
      return {
        succees: false,
        error: "用户已经存在!"
      }
    }
    // 不填密码，默认为手机号
    if (!password) {
      password = phone
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = new User({
      username,
      phone,
      password: hashedPassword,
      isAdmin,
      status
    })

    await newUser.save()
    console.log('save user in db')
    return {
      succees: true
    }
  } catch (error) {
    console.log(error);
    return { succees: false, error: "Something went wrong!" };
  }
}

export const addList = async (formData) => {
  const { room, startTime, manhour, content, personnel } = formData;
  try {
    connectionToDb()
    const newList = new List({
      room,
      startTime,
      manhour,
      content,
      personnel,
      userId: 'admin'
    })
    await newList.save()
    console.log('save list in db')
    return {
      succees: true
    }
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong!" };
  }
}

export const getTickets = async () => {
  try {
    connectionToDb()
    const tickets = await List.find().lean()
    return tickets;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch posts');
  }
}

export const getUsers = async () => {
  try {
    connectionToDb()
    const users = await User.find().lean()
    return users;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch posts');
  }
}

export const updateUserStatus = async (params) => {
  try {
    connectionToDb()
    await User.findByIdAndUpdate(params.phone, { status: params.status })
    return {
      succees: true
    }
  } catch (error) {
    console.log(error);
    return { succees: false, error: "Something went wrong!" };
  }
}

export const login = async (formData) => {
  const { username, password, } = formData;
  try {
    connectionToDb()
    await signIn('credentials', { username, password })
  } catch (error) {
    console.log('login error ==> ', error)
    if (error?.message?.includes("CredentialsSignin")) {
      return {
        succees: false,
        error: "用户名或密码错误!"
      }
    }
  }
}

export const handleLogout = async () => {
  "use server";
  await signOut();
};
