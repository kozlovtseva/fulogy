import React, { Component } from "react";

import CarouselIndicator from "../../components/carousel/CarouselIndicator";
import CarouselSlide from "../../components/carousel/CarouselSlide";

import styles from "./Carousel.module.css";

class Carousel extends Component {
  state = {
    activeIndex: 0
  };

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  render() {
    if (this.props.images === undefined) {
      return <div className="spinner" />;
    }
    return (
      <>
        <ul className={styles.Slides}>
          {this.props.images.map((image, index) => (
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={image}
            />
          ))}
          <li>
            <ul className={styles.Indicators}>
              {this.props.images.map((slide, index) => (
                <CarouselIndicator
                  key={index}
                  index={index}
                  activeIndex={this.state.activeIndex}
                  isActive={this.state.activeIndex === index}
                  onClick={() => this.goToSlide(index)}
                />
              ))}
            </ul>
          </li>
        </ul>
      </>
    );
  }
}

export default Carousel;
