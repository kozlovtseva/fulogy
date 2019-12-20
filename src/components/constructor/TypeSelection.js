import React from "react";

import styles from "./TypeSelection.module.css";

const TypeSelection = props => {
  return (
    <div className={styles.Container}>
      <div className={styles.Type} onClick={() => props.onClick("day")}>
        <img
          className={styles.Image}
          src={require("../../images/kitchen_thumb.png")}
          alt="light"
        />
        <div className={styles.Text}>Дневной</div>
        <div
          className={
            props.state === "day"
              ? styles.Mark + " " + styles.MarkActive
              : styles.Mark
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            fill="#fff"
            height="10"
            viewBox="0 0 24 24"
          >
            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
          </svg>
        </div>
      </div>
      <div className={styles.Type} onClick={() => props.onClick("warm")}>
        <img
          className={styles.Image}
          src={require("../../images/kitchen_thumb_warm.png")}
          alt="light"
        />
        <div className={styles.Text}>Теплый</div>
        <div
          className={
            props.state === "warm"
              ? styles.Mark + " " + styles.MarkActive
              : styles.Mark
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            fill="#fff"
            height="10"
            viewBox="0 0 24 24"
          >
            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
          </svg>
        </div>
      </div>
      <div className={styles.Type} onClick={() => props.onClick("cold")}>
        <img
          className={styles.Image}
          src={require("../../images/kitchen_thumb_cold.png")}
          alt="light"
        />
        <div className={styles.Text}>Холодный</div>
        <div
          className={
            props.state === "cold"
              ? styles.Mark + " " + styles.MarkActive
              : styles.Mark
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            fill="#fff"
            height="10"
            viewBox="0 0 24 24"
          >
            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TypeSelection;
