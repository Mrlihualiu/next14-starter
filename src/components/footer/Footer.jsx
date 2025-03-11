import styles from './footer.module.css'

const Footer = () => {
  return <div className={styles.container}>
    <div className={styles.logo}>龚建波</div>
    <div className={styles.text}>
      工单填报系统 © 龚建波2025
    </div>
  </div>
}

export default Footer;
