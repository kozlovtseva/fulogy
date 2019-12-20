import React from "react";

import styles from "./Info.module.css";

const Info = props => {
  return (
    <div className={styles.Container}>
      <div className={styles.Item}>
        <p className={styles.Title}>Класс:</p>
        <div className={styles.Class + " " + styles.Text}>
          {props.data.class}
        </div>
      </div>
      <div className={styles.Item}>
        <p className={styles.Title}>Потребляемая мощность:</p>
        <p className={styles.Text}>{props.data.capacity}</p>
      </div>
      <div className={styles.Item}>
        <p className={styles.Title}>Сила света:</p>
        <p className={styles.Text}>{props.data.intensity}</p>
      </div>
      <div className={styles.Item}>
        <p className={styles.Title}>Гарантия:</p>
        <p className={styles.Text}>{props.data.guaranty}</p>
      </div>
      <div className={styles.Item}>
        <p className={styles.Title}>Монтаж:</p>
        <p className={styles.Text}>{props.data.installation}</p>
      </div>
      <div className={styles.Item}>
        <p className={styles.Title}>Итого сумма:</p>
        <p className={styles.Text}>{props.data.sum}</p>
      </div>
    </div>
  );
};

export default Info;
