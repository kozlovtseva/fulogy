import React, { Component } from "react";

import Carousel from "./Carousel";
import Info from "../../components/constructor/Info";
import TypeSelection from "../../components/constructor/TypeSelection";
import Modal from "../../components/Modal";

import styles from "./LampItem.module.css";

class LampItem extends Component {
  state = {
    type: "day",
    modal: false
  };

  changeLight = type => {
    this.setState({
      type: type
    });
  };

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    if (this.props.data === undefined) {
      return <div className="spinner" />;
    }
    let item = this.state.modal ? (
      <Modal onClick={this.toggleModal} />
    ) : (
      <div className={styles.Container}>
        <Carousel images={this.props.data.images[this.state.type]} />
        <div className={styles.InfoBlock}>
          <Info data={this.props.data} />
          <div className={styles.ButtonBlock}>
            <button
              onClick={() => this.toggleModal()}
              className={styles.Button}
              type="button"
            >
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
    return <>{item}</>;
  }
}

export default LampItem;
