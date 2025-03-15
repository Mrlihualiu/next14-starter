"use server";

import { User, Post, List } from "./models";
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

export const addUser = async (formData) => {
  console.log('formData :>> ', formData);
  let { username, phone, password, isAdmin, status } = formData;
  // 没有密码把密码设置成手机号
  if (!password) { password = phone }
  try {
    connectionToDb()
    const newUser = new User({
      username,
      phone,
      password,
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
    await User.findByIdAndUpdate(params._id, { status: params.status })
    return {
      succees: true
    }
  } catch (error) {
    console.log(error);
    return { succees: false, error: "Something went wrong!" };
  }
}

export const login = async (formData) => {
  console.log('formData :>> ', formData);
  let { username, password,} = formData;
  
  
  try {
    connectionToDb()
    const users = await User.find({username})
    console.log(users);
    if(users.length=== 0  ) {
      return { succees: false, error: "用户名不存在!" };
    } 
    if(users.length > 0  ) {
       if( users[0].password=== password){


        
        return { succees: true };
       }else { 
       return { succees: false, error: "密码不正确!" };
       }

      
    } 
  }catch (error) {
    console.log(error);
    return { succees: false, error: "Something went wrong!" };
  }
}
