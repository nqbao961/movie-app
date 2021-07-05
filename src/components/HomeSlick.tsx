import React from "react";
import Slider from "react-slick";
import styles from "../styles/HomeSlick.module.scss";

export default function HomeSlick() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className={styles.container}>
      <div className={styles.item}>
        <img
          src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/loki-tom-hiddleston.jpg"
          alt=""
        />
      </div>
      <div className={styles.item}>
        <img
          src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/loki-tom-hiddleston.jpg"
          alt=""
        />
      </div>
      <div className={styles.item}>
        <img
          src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/loki-tom-hiddleston.jpg"
          alt=""
        />
      </div>
    </Slider>
  );
}
