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
  const [isDrag, setIsDrag] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Tentukan nilai 40 px untuk mengaktifkan isActive
      if (scrollPosition >= 40) {
        setIsDrag(!isDrag);
      } else {
        setIsDrag(false);
      }
    };

    // Tambahkan event listener untuk scroll
    window.addEventListener('scroll', handleScroll);

    // Hapus event listener saat komponen dibongkar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Dependensi kosong agar useEffect hanya dijalankan sekali saat mount

  return (
    <>
    <header className={`${styles.header} ${isActive ? styles.headerActive : ""}`} id="header">
      <nav className={`${styles.nav} container`}>
        <div href="/">
          <a className={styles.nav__logo}>PORTFOLIO</a>
        </div>

        <div
          className={styles.nav__menu}
        >
          <ul className={styles.nav__list}>
            {data.map((data, index) => {
              return (
                <li key={index} className={styles.nav__item}>
                  <div href={data.link}>
                    <a className={styles.nav__link}>{data.title}</a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.nav__toggle} onClick={() => {setIsActive(!isActive);
        setIsDrag(true)
        }}>
          <p className={styles.menu}>
            Menu
          </p>
        </div>

        <div className={`${styles.main} ${ isActive ? styles.active : ""} ${ isDrag ? styles.active : ""}`} onClick={() => {setIsActive(!isActive);
        setIsDrag(!isDrag)}}>
          <div className={styles.button}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive: ""}`}></div>
          </div>
        </div>
      </nav>
    </header>
    <AnimatePresence mode="wait">
      {isActive && <Nav />}
    </AnimatePresence>
    </>
  );
}
