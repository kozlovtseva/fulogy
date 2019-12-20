import React, { Component } from "react";

import { getLamps } from "../store/actions/lampsActions";
import { connect } from "react-redux";

import Navigation from "../components/navigation/Navigation";

// import styles from "./Constructor.module.css";

class Constructor extends Component {
  state = {};

  componentDidMount() {
    this.props.dispatch(getLamps());
  }

  render() {
    return (
      <div>
        {/* <Item data={this.props.lamps.lamps} /> */}
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
