import styles from "../../styles/sections/OurMeaningIcons.module.scss"

const OurMeaningIcons: React.FC = () => {
  return (
    <div className={styles.container}>
      <span>THE MEANING OF OUR ICONS :</span>
      <div className={styles["icons-Div"]}>
        <div className={styles["icon-And-Name"]}>
          <img
            src={require("../../assets/icons/types/spicy-icon@3x.png")}
          ></img>
          <span className="Spicy">Spicy</span>
        </div>
        <div className={styles["icon-And-Name"]}>
          <img
            src={require("../../assets/icons/vegiterian-icon/vegiterian-icon@2x.png")}
          ></img>
          <span className="Spicy">Vegitarian</span>
        </div>
        <div className={styles["icon-And-Name"]}>
          <img
            src={require("../../assets/icons/types/group-7-copy@3x.png")}
          ></img>
          <span className="Spicy">Vegan</span>
        </div>
      </div>
    </div>
  )
}
//my-app/src/assets/icons/types/group-7-copy@3x.png
//my-app/src/assets/icons/types/spicy-icon@3x.png
export default OurMeaningIcons
