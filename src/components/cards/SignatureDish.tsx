import styles from "../../styles/cards/SignatureDish.module.scss"
import Dish from "./Dish"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useEffect, useState } from "react"
import { settingsDish } from "../sliderSettings"
import axios from "axios"
import { ISignatureDish } from "../../interfaces/ISignatureDish"

const SignatureDish: React.FC = () => {
  const [signatureDish, setSignatureDish] = useState<[ISignatureDish] | []>([])
  useEffect(() => {
    axios
      .get("http://localhost:5000/dishes/getAllSignatureDishes")
      .then(function (response) {
        setSignatureDish(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  return (
    <>
      <div className={styles.container}>
        <div className={styles["header-container"]}>
          <span className={styles.header}>SIGNATURE DISH OF :</span>
        </div>
      </div>
      <div className={styles["container-slider"]}>
        <div className={styles.slider}>
          <Slider {...settingsDish} className={styles.slider}>
            {signatureDish.map((dish) => {
              return (
                <Dish
                  title={dish.restaurantName}
                  dishName={dish.name}
                  dishInfo={dish.description}
                  price={dish.price.toString()}
                  img={dish.imgUrl}
                  type={dish.icon.type}
                  urlIcon={dish.icon.imgUrl}
                ></Dish>
              )
            })}
          </Slider>
        </div>
      </div>
    </>
  )
}

export default SignatureDish
