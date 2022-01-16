import styles from "../../styles/cards/ChefOfTheWeekRestaurants.module.scss"
import ChefOfTheWeekRestaurant from "./ChefOfTheWeekRestaurant"
import data from "../../data/chefOfWeekRestaurants"
import Carousel from 'react-elastic-carousel'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Slider from "react-slick"
import { settings } from "../sliderSettings"
const ChefOfTheWeekRestaurants = () => {
  return (
    <div className={styles.container}>
      <Slider {...settings} className={styles.slider}>
        {data.map(d => {
          return <ChefOfTheWeekRestaurant resName={d.resName} img={d.img} ></ChefOfTheWeekRestaurant>
        })}
      </Slider>
    </div>
  )
}

export default ChefOfTheWeekRestaurants

{
  /* 
  className={`${styles["flex"]} ${styles["justify-center"]}`}
  
  <div style={{width:'100%'}}>
    <span>text</span>
    <div style={{ overflowX: 'auto' }}>
      <div>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  </div> */
}
