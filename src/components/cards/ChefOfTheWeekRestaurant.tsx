import styles from "../../styles/cards/ChefOfTheWeekRestaurant.module.scss"
//import "../../assets/img/rectangle/rectangle@3x.png"

const ChefOfTheWeekRestaurant: React.FC<{resName:string,img:string}> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.img_div}>
        <img
          className="imgMeal"
          src={require(`../../assets/img/allRestaurantsOfChefOfTheWeek/${props.img}`)}
        ></img>
      </div>
      <div className={styles.details_div}>
        <div className={styles.headers}>
          <h1>{props.resName}</h1>
        </div>
      </div>
    </div>
  )
}

export default ChefOfTheWeekRestaurant
