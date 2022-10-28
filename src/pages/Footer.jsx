import React from "react";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <h4 className={styles.txt}>&copy;Home Office 2022</h4>
      </div>
      <div className={styles.socialMedia}>
        <img src={twitter} width="32px" height="32px" />
        <img src={facebook} width="32px" height="32px" />
        <img src={instagram} width="32px" height="32px" />
      </div>
    </footer>
  );
}
