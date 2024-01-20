"use client";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { slideUp } from "./animation";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const [isInView, setIsInView] = useState(false);
  const phrase =
    "Create the best development and design for the client, taking the best things into consideration.";

  const handleScroll = () => {
    const viewportHeight = window.innerHeight;
    const threshold = viewportHeight / 3.5; // Adjust the divisor as needed

    if (window.scrollY >= threshold) {
      setIsInView(true);
      console.log("aku nampak");
    } else {
      setIsInView(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div className={styles.about_container}>
      <p>
        {phrase.split(" ").map((word, index) => {
          const isDevelopmentOrDesign = ["development", "design"].includes(word.toLowerCase());
          const spanClass = isDevelopmentOrDesign ? `${styles.about_paragraph} ${styles.color_blue}` : styles.about_paragraph;

          return (
            <span key={index} className={spanClass}>
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? "open" : "closed"}
                key={index}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </p>
    </motion.div>
  );
}
