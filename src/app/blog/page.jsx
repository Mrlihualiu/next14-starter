import PostCard from '@/components/postCard/postCard';
import { getPosts } from '@/lib/data';
import styles from "./blog.module.css";

const postData = async () => {
  const res = await fetch()
  if (!res) {
    throw new Error('Network response was not ok');
  }
  return res;
}
const Blog = async () => {
  const posts = await getPosts();

  return <div className={styles.container}>
    {posts.map((post) => (
      <div className={styles.post} key={post.id}>
        <PostCard post={post} />
      </div>
    ))}
  </div>
}

export default Blog;
