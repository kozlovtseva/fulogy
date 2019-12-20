import React from "react";

import styles from "./NavigationItem.module.css";

const NavigationItem = props => {
  return (
    <li
      className={
        props.name === "Цвет свечения"
          ? styles.Item + " " + styles.ItemActive
          : styles.Item
      } //данная стилизация используется как заглушка, в дальнейшем при навигации через React-Router безусловно нужно поменять
    >
      <div className={styles.Text}>{props.name}</div>
    </li>
  );
};

export default NavigationItem;
