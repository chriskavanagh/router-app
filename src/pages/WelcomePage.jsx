import styles from "../styles/WelcomePage.module.css";

function WelcomePage() {
  return (
    <>
      <section className={styles.welcome__wrapper}>
        <h1 className={styles.top__text}>JR's Auto Sales</h1>
        <p className={styles.bottom__text}>3357 Kelly Ln Roanoke, VA</p>
        <div className={styles.showcase}>
          <div className={styles.pic}>
            <img src="images/camry.webp" width="300" alt="camry" />
            <p className={styles.model}>Camry</p>
            <p className={styles.mpg}>28/39 est MPG</p>
          </div>
          <div className={styles.pic}>
            <img src="images/corolla.webp" width="300" alt="corolla" />
            <p className={styles.model}>Corolla</p>
            <p className={styles.mpg}>31/40 est MPG</p>
          </div>
          <div className={styles.pic}>
            <img src="images/tacoma.webp" width="300" alt="tacoma" />
            <p className={styles.model}>Tacoma</p>
            <p className={styles.mpg}>18/22 est MPG</p>
          </div>
          <div className={styles.pic}>
            <img src="images/highlander.webp" width="300" alt="highlander" />
            <p className={styles.model}>Highlander</p>
            <p className={styles.mpg}>21/29 est MPG</p>
          </div>
          <div className={styles.pic}>
            <img src="images/rav4.webp" width="300" alt="rav4" />
            <p className={styles.model}>Rav4</p>
            <p className={styles.mpg}>28/35 est MPG</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default WelcomePage;
