// components/Home.js
"use client"
import styles from './styles.module.css'; 



export default function HomePage() {
 

  return (
  <section className={styles.home}>
    <div className={styles.home_container}>
      <div className={styles.home_text}>
        <span className={styles.home_h1}>
          RENDY
        </span>
        
        <span className={styles.home_h1_2}>
          IHSAN
        </span>
        
        <span className={styles.home_h1_3}>
          HALIM
        </span>
        
      </div>

      <div className={styles.home__description}>
        <div className={styles.home_description_best}>
          
        <p className={styles.home__designer}>
          Development &
        </p>
        <p className={styles.home__designer}>
          Design
        </p>

        </div>

      </div>
    </div>
  </section>
  );
};