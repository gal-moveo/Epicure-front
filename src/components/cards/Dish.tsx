import styles from "../../styles/cards/Dish.module.scss"
//<{ headerName: string }>
const Dish: React.FC<{ title :string,dishName :string,dishInfo :string,price :string,img :string ,type:string|null}>= (props) => {
  return (
    <div className={styles.main_div_}>
      {/* img top card */}
      <div className={styles["header-container"]}>
        <h1>{props.title}</h1>
      </div>
      <div className={styles.img_div}>
        <img
          className="imgMeal"
          src={require(`../../assets/img/allDish/${props.img}`)}
        ></img>
      </div>
      {/* name details */}
      <div className={styles.details_div}>
        <div className={styles.headers}>
          <h1>{props.dishName}</h1>
          <h2>
            {props.dishInfo}
          </h2>
        </div>
        {/* img type */}
        <div className={styles.details_img_type}>
          {props.type &&  <img
            src={require(`../../assets/icons/types/${props.type}`)}
          ></img>}
        </div>
        {/*price */}
        <div className={styles.price}>
          <div className={styles.Line_L}></div>
          <div>
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
//Restaurants
