// pages/AboutPage.js
import { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AboutPage() {
  const text = useRef(null);
  const overlay = useRef(null);
  const text1 =useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      text.current,
      {
        opacity: 0,
        x: '-100%',
      },
      {
        scrollTrigger: {
          trigger: overlay.current,

          start: 'top 150px',
          end: 'top 300px',
        },
        opacity: 1,
        x: '0%',
      }
    );
    gsap.fromTo(
      text1.current,
      {
        opacity: 0,
        left: '-100%',
      },
      {
        scrollTrigger: {
          trigger: overlay.current,

          start: 'top 50px',
          end: 'top 300px',
        },
        opacity: 1,
        left: '0%',
      }
    );
  }, []);

  return (
    <section ref={overlay} className={styles.overlay}>
      <div className={styles.navigation_wrapper}>
          <div className={`${styles.navigation_item}`}>
            <a ref={text} className={`${styles.navigation_link} ${styles.navigation_link1}`}>
              <span data-text="AboutMe">AboutMe</span>
              <div className={`${styles.hover_content}`}>
                <div className={styles.content_container}>
                  <p className={styles.paragraph}>
                    Hi, I'm Rendy Ihsan, a math graduate passionate about front-end web development.
                    With a knack for analytical thinking, I'm dedicated to mastering front-end technologies, believing in the impact of intuitive user interfaces.
                    As a committed learner and creative coder, I enjoy turning ideas into reality. Let's connect and explore the exciting world of web development!
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.navigation_item}>
            <a ref={text1}className={`${styles.navigation_link} ${styles.navigation_link2}`}>
              <span data-text="Projects">Projects</span>
              <div className={`${styles.hover_content}`}>
                <p>This is information about my projects.</p>
              </div>
            </a>
          </div>
      </div>
    </section>
  );
}
