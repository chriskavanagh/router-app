import styles from "../styles/WelcomePage.module.css";

function WelcomePage() {
  return (
    <>
      <div className={styles.welcome__wrapper}>
        <h1 className={styles.top__text}>Welcome Page</h1>
        <p className={styles.bottom__text}>Learn more about React Router 6.4</p>
        <div className={styles.showcase}>
          <div className={styles.pic}>
            <img src="images/camry.webp" width="300" alt="camry" />
            <p className={styles.model}>Camry</p>
            <p className={styles.mpg}>28/35 est MPG</p>
          </div>
          <div className={styles.pic}>
            <img src="images/corolla.webp" width="300" alt="corolla" />
            <p className={styles.model}></p>
            <p className={styles.mpg}></p>
          </div>
          <div className={styles.pic}>
            <img src="images/tacoma.webp" width="300" alt="tacoma" />
            <p className={styles.model}></p>
            <p className={styles.mpg}></p>
          </div>
          <div className={styles.pic}>
            <img src="images/highlander.webp" width="300" alt="highlander" />
            <p className={styles.model}></p>
            <p className={styles.mpg}></p>
          </div>
          <div className={styles.pic}>
            <img src="images/rav4.webp" width="300" alt="rav4" />
            <p className={styles.model}></p>
            <p className={styles.mpg}></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
