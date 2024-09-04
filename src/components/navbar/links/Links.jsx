"use client";
import Image from 'next/image';
import { useState } from 'react';
import styles from './links.module.css'
import NavLink from './navLink/NavLink'

const links = [
  {
    title: 'Homepage',
    path: '/'
  },
  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Contact',
    path: '/contact'
  },
  {
    title: 'Blog',
    path: '/blog'
  }
]
const Links = () => {

  const [open, setOpen] = useState(false);
  const session = true;
  const isAdmin = true;

  return <div className={styles.container}>
    <div className={styles.links}>
      {links.map((link => (
        <NavLink item={link} key={link.title} />
      )))}
      {session ?
        <>
          {isAdmin && <NavLink item={{title: 'Admin', path: '/admin'}} />}
          <button className={styles.logout}>logout</button>
        </>
      : <NavLink item={{title: 'Login', path: '/login'}} />
      }
    </div>
    <div onClick={() => setOpen(prev => !prev)} className={styles.menuButton}>
      <Image src="/menu.png" alt="" width="40" height="30" />
    </div>
    {open && (
      <div className={styles.mobileLinks}>
        {links.map((link => (
          <NavLink item={link} key={link.title} />
        )))}
        {session ?
          <>
            {isAdmin && <NavLink item={{title: 'Admin', path: '/admin'}} />}
            <button className={styles.logout}>logout</button>
          </>
        : <NavLink item={{title: 'Login', path: '/login'}} />
        }
      </div>
    )}
  </div>
}

export default Links;
