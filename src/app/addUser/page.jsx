"use client"
import styles from './adduser.module.css';
import { addUser } from '@/lib/action';
import {useState} from 'react';

const page = () => {
  const [userData, setUserData] = useState({
    username: 'tay',
    password: '1234',
    email: '94658@gmail.com',
    img: 'https://images.pexels.com/photos/27402083/pexels-photo-27402083.jpeg',
    isAdmin: 0
  })

  const handleChange = (e, key) => {
    setUserData({
      ...userData,
      [key]: e.target.value
    })
  }

  const handleAddUser = async () => {
    const addUserRes = addUser(userData)
    console.log('addUserRes :>> ', addUserRes);
  }
  return <form action={addUser} className={styles.container}>
    <div className={styles.wrap}>
      <label>用户名</label>
      <input type="text" placeholder="username" value={userData.username} onChange={val => handleChange(val, 'username')} name="username" />
    </div>
    <div className={styles.wrap}>
      <label>密码</label>
      <input type="password" placeholder="password" value={userData.password} onChange={val => handleChange(val, 'password')} name="password" />
    </div>
    <div className={styles.wrap}>
      <label>邮箱</label>
      <input type="email" placeholder="email" value={userData.email} onChange={val => handleChange(val, 'email')} name="email" />
    </div>
    <div className={styles.wrap}>
      <label>头像地址</label>
      <input type="text" placeholder="avator img url" value={userData.img} onChange={val => handleChange(val, 'img')} name="img" />
    </div>
    <div className={styles.wrap}>
      <label>是否是管理员</label>
      <select value={userData.isAdmin} onChange={val => handleChange(val, 'isAdmin')} name="isAdmin">
        <option value="1">是</option>
        <option value="0">否</option>
      </select>
    </div>

    <button onClick={handleAddUser}>ADD USER</button>
  </form>
}

export default page
