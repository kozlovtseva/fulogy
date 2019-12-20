import React from "react";

import styles from "./CarouselSlide.module.css";

const CarouselSlide = props => {
  return (
    <li
      className={
        props.index === props.activeIndex
          ? styles.Slide + " " + styles.SlideActive
          : styles.Slide
      }
    >
      <img src={require(`../../images/${props.slide}`)} alt="light" />
    </li>
  );
};

export default CarouselSlide;
