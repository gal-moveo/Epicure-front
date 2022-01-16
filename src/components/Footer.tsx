import styles from "../styles/sections/Footer.module.scss"

const Footer: React.FC = () => {
  return (
    <footer>
      <span className={styles["contact-us"]}>Contact us</span>
      <span className={styles["term-of-use"]}>Term of Use</span>
      <span className={styles["privacy-policy"]}>Privacy Policy</span>
    </footer>
  )
}
export default Footer
