import React from "react";

import styles from "./MenuItem.module.css";

const MenuItem = props => {
  return (
    //в дальнейшем - навигация через React-Router
    <li className={styles.Item}>{props.name}</li>
  );
};

export default MenuItem;
