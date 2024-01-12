'use client'
import styles from './style.module.css'
import { useEffect, useState } from 'react';
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Home() {

  const data = [
    { title:"Work",
      link :"/Work",

    },
    { title:"About",
      link :"/About",

    },
    { title:"Project",
      link :"/Project",

    },
];

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();



  return (
    <>
    <header className={styles.header} id="header" >
      <nav className={`${styles.nav} container`}>
        <div href="/">
          <a className={styles.nav__logo}>PORTOFOLIO</a>
        </div>

        <div
          className={styles.nav__menu}
        >
          <ul className={styles.nav__list}>
            {data.map((data,index) => {
                return (<li key={index} className={styles.nav__item}>
                    <div href={data.link}>
                      <a className={styles.nav__link}>{data.title}</a>
                    </div>
                  </li>)
            })}
          </ul>
        </div>

        <div className={styles.nav__toggle} onClick={() => {setIsActive(!isActive)}}>
          <p className={styles.menu}>
            Menu
          </p>
        </div>

        <div className={`${styles.main} ${isActive ? styles.active : ""}`} onClick={() => {setIsActive(false)}}>
        <div className={styles.button}>
          <div className={styles.burger}></div>
        </div>
      </div>
      </nav>
    </header>
    <AnimatePresence mode="wait">
      {isActive && <Nav />}
    </AnimatePresence>
    </>
  )
}
