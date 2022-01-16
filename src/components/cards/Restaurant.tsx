import styles from "../../styles/cards/Restaurants.module.scss"

const Restaurant: React.FC<{ resName: string, chefName: string, img: string }> = (props) => {
  return (
    <div className={styles.main_div_}>
      <div className={styles.img_div}>
        <img
          className="imgMeal"
          src={require(`../../assets/img/allRestaurants/${props.img}`)}
        ></img>
      </div>
      <div className={styles.details_div}>
        <div className={styles.headers}>
          <h1>{props.resName}</h1>
          <h2>{props.chefName}</h2>
        </div>
      </div>
    </div>
  )
}

export default Restaurant

/*

    <div className={styles.main_div_}>
      <div className={styles.img_div}>
        <img
          className="imgMeal"
          src={require(`../../assets/img/allRestaurants/${props.img}`)}
        ></img>
      </div>
      <div className={styles.details_div}>
        <div className={styles.headers}>
          <h1>{props.resName}</h1>
          <h2>{props.chefName}</h2>
        </div>
      </div>
    </div>
<div >
      <div >
        <div >
          <h1>asd</h1>
          <h2>sdfsdf</h2>
        </div>
      </div>
    </div>


*/