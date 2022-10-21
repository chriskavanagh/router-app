import React from "react";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about__wrapper}>
      <h1 className={styles.top__text}>About Page</h1>
      <p className={styles.bottom__text}>We are awesome!</p>
    </div>
  );
}
