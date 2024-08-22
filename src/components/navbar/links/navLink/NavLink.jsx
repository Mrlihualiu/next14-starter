"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavLink.module.css';

const NavLink = ({item}) => {
  const activePath = usePathname()

  return <Link href={item.path} className={`${styles.container} ${activePath === item.path && styles.active}`}>{item.title}</Link>
}

export default NavLink;
