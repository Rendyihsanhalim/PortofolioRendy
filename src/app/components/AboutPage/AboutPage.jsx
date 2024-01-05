// pages/AboutPage.js
import { useState,useRef,useEffect} from 'react';
import styles from './styles.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import your CSS module

export default function AboutPage() {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const toggleParagraph = (section) => {
    setShowAboutMe(section === 'aboutMe' ? !showAboutMe : false);
    setShowProjects(section === 'projects' ? !showProjects : false);
  };

  const text = useRef(null);

  useEffect( () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(text.current, {
        scrollTrigger: {
            trigger: text.current,
            scrub: true,
            start: "top 500px",
            end: "top 100px",
        },
        opacity: 0,
        x: "-400",
        ease: "power3.Out"
    })
}, [])


  return (
    <section className={styles.overlay}>
      <div className={styles.navigation_wrapper}>
        <div className={styles.navigation_container}>
          <div className={`${styles.navigation_item} ${showAboutMe ? styles.showLink : ''}`}>
            <a ref={text} className={`${styles.navigation_link} ${styles.navigation_link1}`} onClick={() => toggleParagraph('aboutMe')}>
              <span data-text="AboutMe">AboutMe</span>
              <div
                className={`${styles.hover_content} ${showAboutMe ? `${styles.show__paragraph} ${styles.slide_in}` : ''}`}
              
              >
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
            <a className={`${styles.navigation_link} ${styles.navigation_link2}`} onClick={() => toggleParagraph('projects')}>
              <span data-text="Projects">Projects</span>
              <div className={`${styles.hover_content} ${showProjects ? styles.show__paragraph : ''}`}>
                <p>This is information about my projects.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
