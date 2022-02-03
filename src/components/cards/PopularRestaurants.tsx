import styles from "../../styles/cards/PopularRestaurants.module.scss"
import Arrows from "../svgs/Arrows"
import Restaurant from "./Restaurant"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { settingsDish } from "../sliderSettings"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { IPopularRestaurantAndChef } from "../../interfaces/IPopularRestaurantAndChef"
const PopularRestaurants: React.FC = () => {
  const [popularRestaurantAndChef, setPopularRestaurantAndChef] = useState<
    [IPopularRestaurantAndChef] | []
  >([])
  useEffect(() => {
    axios
      .get("http://localhost:5000/restaurants/getAllPopularRestaurants")
      .then(function (response) {
        setPopularRestaurantAndChef(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  return (
    <>
      <div className={styles.container}>
        <div className={styles["header-container"]}>
          <span className={styles.header}>
            THE POPULAR RESTAURANTS IN EPICURE :
          </span>
        </div>
      </div>
      <div className={styles["container-slider"]}>
        <div className={styles.slider}>
          <Slider {...settingsDish} className={styles.slider}>
            {popularRestaurantAndChef.map((resAndChef) => {
              return (
                <Restaurant
                  resName={resAndChef.name}
                  chefName={`${resAndChef.chef[0].firstName} ${resAndChef.chef[0].lastName}`}
                  img={resAndChef.imgUrl}
                ></Restaurant>
              )
            })}
          </Slider>
        </div>
      </div>
      <div>
        <div className={styles["All-Restaurants"]}>
          <span>All Restaurants</span>
          <Arrows></Arrows>
        </div>
      </div>
    </>
  )
}
export default PopularRestaurants
