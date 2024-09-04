import Image from 'next/image'
import styles from './signPost.module.css'

const BlogDetail = () => {
  return <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image src="https://images.pexels.com/photos/27402083/pexels-photo-27402083.jpeg" alt="" fill />
    </div>
    <div className={styles.textContainer}>
      <h1>Title</h1>
      <div className={styles.wrap}>
        <div className={styles.avatar}>
          <Image src="https://images.pexels.com/photos/27402083/pexels-photo-27402083.jpeg" alt="" fill />
        </div>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Author</div>
          <div>Taylor Swift</div>
        </div>
        <div className={styles.box}>
          <div className={styles.boxTitle}>Published</div>
          <div>03-09-2024</div>
        </div>
      </div>
      <div className={styles.desc}>desc</div>
    </div>
  </div>
}

export default BlogDetail;
