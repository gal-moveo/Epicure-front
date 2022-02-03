import styles from "../../styles/sections/ChefOfTheWeek.module.scss"
import ChefOfTheWeekRestaurants from "../cards/ChefOfTheWeekRestaurants"
import { useState, useEffect } from "react"
import axios from "axios"
import { IChef } from "../../interfaces/IChef"

const a = "../../assets/img/chefOfTheWeek/"
const ChefOfTheWeek: React.FC = () => {
  const [weeklyChef, setWeeklyChef] = useState<IChef>()
  useEffect(() => {
    axios
      .get("http://localhost:5000/chefs/getWeeklyChef")
      .then(function (response) {
        setWeeklyChef(response.data[0].chef[0])
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  return (
    <>
      <div className={styles.container}>
        <p className={styles.Paragraph}>CHEF OF THE WEEK :</p>
        <div className={styles["chef-photo-and-details"]}>
          <div className={styles["photo-and-header-name"]}>
            {weeklyChef?.imgUrl && (
              <img
                src={require(`../../assets/img/chefOfTheWeek/${weeklyChef?.imgUrl}`)}
              />
            )}
            <div
              className={styles["name-header"]}
            >{`${weeklyChef?.firstName} ${weeklyChef?.lastName}`}</div>
          </div>
          <span>{weeklyChef?.description}</span>
        </div>
        <div className={styles["chef-restaurants-container"]}>
          <div className={styles["chef-restaurants-span-container"]}>
            <p className={styles["chef-restaurants-p"]}>
              Yossi’s restaurants :
            </p>
          </div>
          <ChefOfTheWeekRestaurants
            chefId={`${weeklyChef?._id}`}
          ></ChefOfTheWeekRestaurants>
        </div>
      </div>
    </>
  )
}

export default ChefOfTheWeek

//style={{ overflowX: "auto" }}
