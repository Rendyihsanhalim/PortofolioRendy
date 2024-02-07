// components/Home.js
import { motion } from "framer-motion";
import styles from './styles.module.css'; 

export default function HomePage() {
  const KATA = ["RENDY", "IHSAN", "HALIM"];
  
  return (
    <section className={styles.home}>
      <div className={styles.home_container}>
        <div className={styles.home_text}>
          {KATA.map((word, index) => (
            <motion.span
              key={index}
              initial={{ x:-100,opacity:0 }}
              animate={{ x:0,delay:0.1 * index ,opacity:1}}
              transition={{duration:1}}
              exit={{ opacity: 1 }}
              className={index === 0 ? styles.home_h1 : styles[`home_h1_${index + 1}`]}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <div className={styles.home__description}>
          <div className={styles.home_description_best}>
            <p className={styles.home__designer}>
              Development  &
            </p>
            <p className={styles.home__designer}>
              Design
            </p>
          </div>

          <div className={styles.home__gambar1}>
            <div className={styles.home_circle1}></div>
            <div className={styles.home_circle2}></div>
            <div className={styles.home_circle3}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
