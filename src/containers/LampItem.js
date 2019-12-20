import React, { Component } from "react";

import Carousel from "./Carousel";
import Info from "../components/constructor/Info";
import TypeSelection from "../components/constructor/TypeSelection";

import styles from "./LampItem.module.css";

class LampItem extends Component {
  state = {
    type: "day"
  };

  changeLight = type => {
    this.setState({
      type: type
    });
  };

  render() {
    if (this.props.data === undefined) {
      return <div className="spinner" />;
    }
    return (
      <div className={styles.Container}>
        <Carousel images={this.props.data.images[this.state.type]} />
        <div className={styles.InfoBlock}>
          <Info data={this.props.data} />
          <div className={styles.ButtonBlock}>
            <button className={styles.Button} type="button">
              i
            </button>
            <div className={styles.Text}>
              <p>Выберите цвет свечения</p>
            </div>
          </div>
          <TypeSelection state={this.state.type} onClick={this.changeLight} />
        </div>
      </div>
    );
  }
}

export default LampItem;
