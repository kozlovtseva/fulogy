import React from "react";

import MenuItem from "./MenuItem";

import styles from "./Menu.module.css";

const Menu = () => {
  let menuItems = [
    "Обучающее видео",
    "Оформление заказа",
    "Оплата",
    "Доставка",
    "Гарантия",
    "Возврат",
    "Контакты",
    "Партнерам"
  ];
  let menu = menuItems.map((value, index) => {
    return <MenuItem key={index} name={value} />;
  });
  return (
    <>
      <ul className={styles.Container}>{menu}</ul>
    </>
  );
};

export default Menu;
