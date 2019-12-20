import React from "react";

import NavigationItem from "./NavigationItem";

import styles from "./Navigation.module.css";

const Navigation = () => {
  let navigationItems = [
    "Вариант кухни",
    "Размеры",
    "Сенсор",
    "Питающий кабель",
    "Блок Питания",
    "Цвет свечения",
    "Монтаж",
    "Корзина"
  ];
  let list = navigationItems.map((value, index) => {
    return <NavigationItem key={index} name={value} />;
  });
  return <ul className={styles.Container}>{list}</ul>;
};

export default Navigation;
