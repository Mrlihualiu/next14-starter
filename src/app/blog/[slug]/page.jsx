import Image from 'next/image'
import styles from './signPost.module.css'
import PostUser from '@/components/postUser/postUser'
import { getPost } from '@/lib/data';
import { Suspense } from 'react';

export const generateMetadata = async ({ params }) => {
  const {slug} = params;
  const res = getPost(slug)

  return {
    title: res.title,
    description: res.desc
  }
}

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`)
  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}

const BlogDetail = async ({params}) => {
  const {slug} = params

  // const post = getPost(slug)

  const post = await getData(slug)

  return <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image src="https://images.pexels.com/photos/27402083/pexels-photo-27402083.jpeg" alt="" fill />
    </div>
    <div className={styles.textContainer}>
      <h1>Title</h1>
      <div className={styles.wrap}>
        {post && (
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
        )}
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
