"use client"
import styles from './addpost.module.css';
import { useFormState } from 'react-dom';
import { addPost } from '@/lib/action';

const page = () => {
  const [state, formAction] = useFormState(addPost, undefined);

  return <form action={formAction} className={styles.container}>
    <div className={styles.wrap}>
      <label>标题</label>
      <input type="text" placeholder="title" name="title" />
    </div>
    <div className={styles.wrap}>
      <label>用户ID</label>
      <input type="text" placeholder="userId" name="userId" />
    </div>
    <div className={styles.wrap}>
      <label>图片地址</label>
      <input type="text" placeholder="img" name="img" />
    </div>
    <div className={styles.wrap}>
      <label>访问标识</label>
      <input type="text" placeholder="slug" name="slug" />
    </div>
    <div className={styles.wrap}>
      <label>详细描述</label>
      <textarea type="text" rows="10" cols="10" placeholder="desc" name="desc" />
    </div>

    <button>ADD POST</button>
    {state?.error}
  </form>
}

export default page;
