import React from "react";

import styles from "./CarouselIndicator.module.css";

const CarouselIndicator = props => {
  return (
    <li>
      <div
        className={
          props.index === props.activeIndex
            ? styles.Indicator + " " + styles.IndicatorActive
            : styles.Indicator
        }
        onClick={props.onClick}
      />
    </li>
  );
};

export default CarouselIndicator;
