import React from "react";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <h3>Social</h3>
        <img src={twitter} width="24px" height="24px" />
        <img src={facebook} width="24px" height="24px" />
        <img src={instagram} width="24px" height="24px" />
      </div>
    </footer>
  );
}
