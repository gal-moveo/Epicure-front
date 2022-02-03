import styles from "../../styles/cards/ChefOfTheWeekRestaurants.module.scss"
import ChefOfTheWeekRestaurant from "./ChefOfTheWeekRestaurant"
// import Carousel from "react-elastic-carousel"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { settingsChefOfTheWeek } from "../sliderSettings"
import { useState, useEffect } from "react"
import axios from "axios"
import { IAllChefRestaurant } from "../../interfaces/IAllChefRestaurant"

const ChefOfTheWeekRestaurants: React.FC<{ chefId: string }> = (props) => {
  const [allChefRestaurant, setAllChefRestaurant] = useState<
    [IAllChefRestaurant] | []
  >([])
  useEffect(() => {
    axios
      .get("http://localhost:5000/chefs/getWeeklyChef")
      .then(function (response) {
        var id = response.data[0].chef[0]._id
        axios
          .get(
            `http://localhost:5000/restaurants/getAllRestaurantsOfChef/${id}`
          )
          .then(function (response) {
            setAllChefRestaurant(response.data)
          })
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  return (
    <div className={styles.container}>
      <Slider {...settingsChefOfTheWeek} className={styles.slider}>
        {allChefRestaurant.map((Restaurant) => {
          return (
            <ChefOfTheWeekRestaurant
              resName={Restaurant.name}
              img={Restaurant.imgUrl}
            ></ChefOfTheWeekRestaurant>
          )
        })}
      </Slider>
    </div>
  )
}
export default ChefOfTheWeekRestaurants
