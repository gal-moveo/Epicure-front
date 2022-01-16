import styles from "../../styles/cards/PopularRestaurants.module.scss"
import Arrows from "../svgs/Arrows"
import Restaurant from "./Restaurant"
import data from "../../data/restaurants"
import Slider from "react-slick"
import Carousel from 'react-elastic-carousel'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { settings } from "../sliderSettings"
const PopularRestaurants: React.FC = () => {
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
          <Slider {...settings} className={styles.slider}>
            {data.map(d => {
              return <Restaurant resName={d.resName} chefName={d.chefName} img={d.img}></Restaurant>
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
//className={styles.container}
export default PopularRestaurants


/*
 {data.map((d) => {
            console.log("123");
            <Restaurants></Restaurants>
          })}
 <div className={styles.container}>
      <div className={styles["header-container"]}>
        <span className={styles.header}>
          THE POPULAR RESTAURANTS IN EPICURE :
        </span>
      </div>
      <div className={styles["cards-container"]}>
        <div className={styles.cards}>
          <Carousel itemsToShow={1} >
            {data.map(d => {
              return <div>asd</div>
            })}
          </Carousel>
        </div>
      </div>
      <div className={styles["All-Restaurants"]}>
        <span>All Restaurants</span>
        <Arrows></Arrows>
      </div>
    </div>
<Restaurants resName={d.resName} chefName={d.chefName} img={d.img}></Restaurants>
 const settings = {
    // className: "center",
    // centerMode: true,
    // centerPadding: "100%",
    // fade: true,
    arrows: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    // className: "center",
    // centerMode: true,
    // centerPadding: "10px",
    responsive: [
      {
        breakpoint: 416,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        }
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        }
      },
    ]
  };
*/