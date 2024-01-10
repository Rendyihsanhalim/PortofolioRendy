// components/Home.js
import styles from './styles.module.css'; 


export default function HomePage() {
  return (
    <section  className={styles.home} id="home">
      <div className={styles.home__container}>
        <div className={styles.home__text} >
          <h1 data-scroll data-scroll-speed="0.7" className={styles.home__h1}>RENDY</h1>
          <p data-scroll data-scroll-speed="0.7"className={styles.home__paragraph}>
            I'm Junior FrontEnd Developer Who Addicted make beautiful website
          </p>
          <div data-scroll data-scroll-speed="0.7">
            <a  className={`${styles.button__home} ${styles.button_flex}`}>
              Learn More <i className={`fa-solid fa-arrow-right ${styles.button__icon}`}></i>
            </a>
          </div>
        </div>

        <div className={styles.home__circle} data-scroll data-scroll-speed="1.5">
          <img src="/assets/img/circle1.png" alt="" className={styles.home__circle1} />
          <img src="/assets/img/circle2.png" alt="" className={styles.home__circle2} />
          <img src="/assets/img/circle2.png" alt="" className={styles.home__circle3} />
          <img src="/assets/img/circle1.png" alt="" className={styles.home__circle4} />
        </div>
      </div>
    </section>
  );
};
