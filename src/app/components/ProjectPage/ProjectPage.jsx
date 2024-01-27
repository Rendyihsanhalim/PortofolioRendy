"use client";

import styles from "./styles.module.css";

export default function ProjectPage() {
  return (
    <>
      <section className={styles.project}>
        <div className={styles.project_container}>
          <div className={styles.project_h1}>
            <h1 className={styles.project_text}>WORK</h1>
            <div className={styles.project_line}></div>
          </div>

          <div className={styles.project_example}>
            <div className={styles.project_item}>
              <div className={styles.project_background}>
                <div className={styles.project_img}>
                  <img src="" alt="" />
                </div>
              </div>
              <div className={styles.container}>
                <span className={styles.subContainer}>
                  <span className={styles.label}>Design</span>
                  <span className={styles.label}>Development</span>
                </span>
                <span className={styles.dateLabel}>2023</span>
              </div>
            </div>

            <div className={styles.project_item}>
            <div className={styles.project_item}>
              <div className={styles.project_background}>
                <div className={styles.project_img}>
                  <img src="" alt="" />
                </div>
              </div>
              <div className={styles.container}>
                <span className={styles.subContainer}>
                  <span className={styles.label}>Design</span>
                  <span className={styles.label}>Development</span>
                </span>
                <span className={styles.dateLabel}>2023</span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
