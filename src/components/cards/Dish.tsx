import styles from "../../styles/cards/Dish.module.scss"

//add dif img==========
const Dish: React.FC<{
  title: string
  dishName: string
  dishInfo: string
  price: string
  img: string
  type: string | null
  urlIcon: string
}> = (props) => {
  return (
    <div className={styles.main_div_}>
      <div className={styles["header-container"]}>
        <h1>{props.title}</h1>
      </div>
      <div className={styles.img_div}>
        <img
          className="imgMeal"
          src={require(`../../assets/img/allDish/${props.img}`)}
        ></img>
      </div>
      <div className={styles.details_div}>
        <div className={styles.headers}>
          <h1>{props.dishName}</h1>
          <h2>{props.dishInfo}</h2>
        </div>
        <div className={styles.details_img_type}>
          {props.type && (
            <img
              src={require(`../../assets/icons/types/${props.urlIcon}`)}
            ></img>
          )}
        </div>
        <div className={styles.price}>
          <div className={styles.Line_L}></div>
          <div className={styles.priceAndImg}>
            <img src={require("../../assets/icons/ils/ils@2x.png")}></img>
            <span>{props.price}</span>
          </div>
          <div className={styles.Line_R}></div>
        </div>
      </div>
    </div>
  )
}

export default Dish
