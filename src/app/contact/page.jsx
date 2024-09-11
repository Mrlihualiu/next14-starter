import Image from "next/image";
import styles from './contact.module.css';

export const metadata = {
  title: 'Next App | Contact',
  description: 'Contact page',
}

const Contact = () => {
  return <div className={styles.container}>
    <div className={styles.imgContainer}>
      <Image alt="contact" src="/contact.png" className={styles.img} fill />
    </div>
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <input type="text" placeholder="Name and Surname"></input>
        <input type="text" placeholder="Email Address"></input>
        <input type="text" placeholder="Phone Number (Optional)"></input>
        <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  </div>
}

export default Contact;
