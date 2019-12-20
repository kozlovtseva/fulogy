import React, { Component } from "react";

import Carousel from "./Carousel";
import Info from "../components/constructor/Info";
import TypeSelection from "../components/constructor/TypeSelection";

import styles from "./LampItem.module.css";

class LampItem extends Component {
  state = {
    type: "day"
  };

  render() {
    if (this.props.data === undefined) {
      return <div className="spinner" />;
    }
    return (
      <div className={styles.Container}>
        <Carousel images={this.props.data.images[this.state.type]} />
        <div>
          <Info data={this.props.data} />
          <div>
            <button type="button">i</button>
            <div>
              <p>Выберите цвет свечения</p>
            </div>
          </div>
          <TypeSelection />
        </div>
      </div>
    );
  }
}

export default LampItem;
