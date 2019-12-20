import React, { Component } from "react";

import Carousel from "../components/constructor/Carousel";
import Info from "../components/constructor/Info";
import TypeSelection from "../components/constructor/TypeSelection";

// import styles from "./LampItem.module.css";

class LampItem extends Component {
  state = {};
  render() {
    return (
      <div>
        <Carousel images={this.props.data.images} />
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
