import styles from "../../styles/cards/SignatureDish.module.scss"
import Dish from "./Dish"
import data from "../../data/SignatureDish"
import Carousel from 'react-elastic-carousel'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { settingsDish } from "../sliderSettings"

const SignatureDish: React.FC = () => {
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
            {data.map(d => {
              return (<Dish
                title={d.title}
                dishName={d.dishName}
                dishInfo={d.dishInfo}
                price={d.price}
                img={d.img}
                type={d.type}
              ></Dish>)
            })}
          </Slider>
        </div>
      </div>
    </>
  )
}
export default SignatureDish
//signature dish
/* 
 <Slider {...settings} className={styles.slider}>
  <Carousel itemsToShow={itemsToShowBeSize} className={styles.Carousel}>

    <Carousel itemsToShow={1}>
            {data.map(d => {
              return (<Dish
                title={d.title}
                dishName={d.dishName}
                dishInfo={d.dishInfo}
                price={d.price}
                img={d.img}
                type={d.type}
              ></Dish>)
            })}
          </Carousel>






             <div className={styles.container}>
      <div className={styles["header-container"]}>
        <span className={styles.header}>SIGNATURE DISH OF :</span>
      </div>
      <div className={styles["card-container"]}>
        <div className={styles.cards}>
      
        </div>
      </div>
    </div>


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
