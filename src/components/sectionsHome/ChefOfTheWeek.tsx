import styles from "../../styles/sections/ChefOfTheWeek.module.scss"
import ChefOfTheWeekRestaurant from "../cards/ChefOfTheWeekRestaurant"
import ChefOfTheWeekRestaurants from "../cards/ChefOfTheWeekRestaurants"
import Dish from "../cards/Dish"

const ChefOfTheWeek: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.Paragraph}>CHEF OF THE WEEK :</p>
        <div className={styles["chef-photo-and-details"]}>
          <div className={styles["photo-and-header-name"]}>
            <img
              src={require("../../assets/img/chefOfTheWeek/rectangle@2x.png")}
            ></img>
            <div className={styles["name-header"]}>Yossi Shitrit</div>
          </div>
          <span>
            Chef Yossi Shitrit has been living and breathing his culinary dreams
            for more than two decades, including running the kitchen in his
            first restaurant, the fondly-remembered Violet, located in Moshav
            Udim. Shitrit's creativity and culinary acumen born of long
            experience are expressed in the every detail of each and every dish.
          </span>
        </div>
        <div className={styles["chef-restaurants-container"]}>
          <div className={styles["chef-restaurants-span-container"]}>
            <p className={styles["chef-restaurants-p"]}>
              Yossi’s restaurants :
            </p>
          </div>
          <ChefOfTheWeekRestaurants></ChefOfTheWeekRestaurants>
        </div>
      </div>
    </>
  )
}

export default ChefOfTheWeek
//Restaurants
/**
 *
 * style={{ overflowX: "auto" }}
 *
 *
 */
