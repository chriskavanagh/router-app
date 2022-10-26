import React from "react";
import styles from "../styles/HeroImage.module.css";

export default function HeroImage() {
  return (
    <section className={styles.wrapper}>
      <img src="images/supra.jpg" className={styles.hero} />
      <div className={styles.text}>
        <h1 className={styles.top__text}>JR's Auto Sales</h1>
        <div className={styles.txt__wrapper}>
          <p className={styles.bottom__text}>3357 Kelly Ln Roanoke, VA</p>
          <p className={styles.service}>Service +1-540-215-2137</p>
          <p className={styles.parts}>Parts +1-540-712-3559</p>
        </div>
      </div>
    </section>
  );
}
