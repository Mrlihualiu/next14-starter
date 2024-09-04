import Image from "next/image";
import Link from "next/link";
import styles from "./postCard.module.css";

const postCard = () => {
  return <div className={styles.container}>
    <div className={styles.top}>
      <div className={styles.imgContainer}>
        <Image alt src="https://images.pexels.com/photos/27402083/pexels-photo-27402083.jpeg" fill />
      </div>
      <span className={styles.date}>01.01.2024</span>
    </div>
    <div className={styles.bottom}>
      <h1 className={styles.title}>Title</h1>
      <p className={styles.desc}>Desc desc Desc desc Desc desc Desc desc Desc desc Desc desc Desc desc Desc desc Desc desc Desc desc Desc desc</p>
      <Link href="/blog/post" className={styles.link}>
        READ MORE
      </Link>
    </div>
  </div>
}

export default postCard;
