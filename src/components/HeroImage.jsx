import React from "react";
//import { motion } from "framer-motion";
import styles from "../styles/HeroImage.module.css";
import { FaPhoneAlt, FaHome, FaPhoneVolume } from "react-icons/fa";

export default function HeroImage() {
  return (
    <section className={styles.wrapper}>
      <img src="images/supra.webp" className={styles.hero} />
      <div className={styles.text}>
        <h1 className={styles.top__text}>
          JR
          <span className={styles.bolt}>
            <img
              width="30"
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Angular_lightningbolt.svg"
            />
          </span>
          s Auto Sales{" "}
        </h1>
        <div className={styles.ribbon}>
          <h3>
            <FaHome style={{ marginRight: "8px" }} />
            3357 Kelly Ln Roanoke, VA 24018
          </h3>
          <h3>
            <FaPhoneAlt style={{ marginRight: "8px" }} /> Service 1-540-982-2222
          </h3>
          <h3>
            <FaPhoneVolume style={{ marginRight: "8px" }} />
            Parts 1-540-982-3333
          </h3>
          <h3>
            <FaPhoneAlt style={{ marginRight: "8px" }} /> Sales 1-540-982-4444
          </h3>
        </div>
      </div>
    </section>
  );
}
