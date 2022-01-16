import styles from "../../styles/sections/ButtonsMobileOnly.module.scss"

const ButtonsMobileOnly: React.FC = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>CHEFS</button>
      <button className={styles.button}>RESTAURANTS</button>
    </div>
  )
}

export default ButtonsMobileOnly
