import PostCard from '@/components/postCard/postCard';
import { getPosts } from '@/lib/data';
import styles from "./blog.module.css";

const postData = async () => {
  const res = await getPosts()
  if (!res) {
    throw new Error('Network response was not ok');
  }
  return res;
}
const Blog = async () => {
  const posts = await postData();
  console.log('posts :>> ', posts);
  return <div className={styles.container}>
    {posts.map((post) => (
      <div className={styles.post} key={post.id}>
        <PostCard post={post} />
      </div>
    ))}
  </div>
}

export default Blog;
