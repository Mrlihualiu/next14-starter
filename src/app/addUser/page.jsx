"use client"
import styles from './adduser.module.css';
import { addUser } from '@/lib/action';
import { useFormState } from 'react-dom';

const page = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return <form action={formAction} className={styles.container}>
    <div className={styles.wrap}>
      <label>用户名</label>
      <input type="text" placeholder="username" name="username" />
    </div>
    <div className={styles.wrap}>
      <label>密码</label>
      <input type="password" placeholder="password" name="password" />
    </div>
    <div className={styles.wrap}>
      <label>邮箱</label>
      <input type="email" placeholder="email" name="email" />
    </div>
    <div className={styles.wrap}>
      <label>头像地址</label>
      <input type="text" placeholder="avator img url" name="img" />
    </div>

    <button>ADD USER</button>
  </form>
}

export default page
