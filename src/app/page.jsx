"use client"
import Image from 'next/image';
import styles from './home.module.css';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/contact');
  };

  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thoughts Agency</h1>
      <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
      </p>
      <div className={styles.btns}>
        <button className={styles.btn}>Leam More</button>
        <button className={styles.btn} onClick={handleClick}>Contact</button>
      </div>
      <div className={styles.brands}>
        <Image className={styles.brandsImg} src="/brands.png" alt="brands" fill />
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt="homepage" fill />
    </div>
  </div>;
};

export default Home;
