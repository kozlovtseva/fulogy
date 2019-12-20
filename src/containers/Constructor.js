import React, { Component } from "react";

import { getLamps } from "../store/actions/lampsActions";
import { connect } from "react-redux";

import Navigation from "../components/navigation/Navigation";
import LampItem from "./LampItem";

// import styles from "./Constructor.module.css";

class Constructor extends Component {
  componentDidMount() {
    this.props.dispatch(getLamps());
  }

  render() {
    return (
      <div>
        <LampItem data={this.props.lamps.lamps} />
        <Navigation />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    lamps: store.lamps.lamps
  };
}

export default connect(mapStateToProps)(Constructor);
