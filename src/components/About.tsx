import styles from "../styles/sections/About.module.scss"

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles["details-and-logo"]}>
        <div className={styles.Paragraphs}>
          <p className={styles.Paragraph}>ABOUT US :</p>
          <p className={styles.details}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
            vel justo fermentum bibendum non eu ipsum. Cras porta malesuada
            eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna
            sodales porta. Vivamus elit urna, dignissim a vestibulum.
          </p>
          <p className={styles.details}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
            vel justo fermentum bibendum non eu ipsum. Cras porta malesuada
            eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna
            sodales porta. Vivamus elit urna, dignissim a vestibulum.
          </p>
        </div>

        <div className={styles.logo}>
          <img src={require("../assets/icons/about-logo@2x.png")}></img>
        </div>
      </div>

      <div className={styles["store-container"]}>
        <div className={styles.store}>
          <div className={styles.apple}>
            <img
              src={require("../assets/icons/apple-icon/apple-icon@3x.png")}
            ></img>
            <span>
              <span>Download on the</span>
              <span className={styles["span-2"]}>App Store</span>
            </span>
          </div>
          <div className={styles.google}>
            <img
              src={require("../assets/icons/google-icon/google-icon@3x.png")}
            ></img>
            <span>
              <span className={styles["span-google"]}>Get it on</span>
              <span className={styles["span-google"]}>Google Play</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
