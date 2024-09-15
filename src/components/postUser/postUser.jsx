import styles from './postUser.module.css';
import Image from 'next/image';
import { getUser } from '@/lib/data';

const PostUser = async ({userId}) => {

  const user = await getUser(userId)

  return <div className={styles.container}>
    <div className={styles.avatar}>
      <Image src={user?.img ? user.img : '/noavatar.png'} alt="" fill />
    </div>
    <div className={styles.box}>
      <div className={styles.boxTitle}>Author</div>
      <div>{user?.username}</div>
    </div>
  </div>
}

export default PostUser;
