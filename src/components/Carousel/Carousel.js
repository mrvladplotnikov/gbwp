import React from "react"
import PropTypes from "prop-types"
import ReactAliceCarousel from "react-alice-carousel"
import "./styles.css"

const Carousel = ({ children }) => (
  <ReactAliceCarousel
    buttonsDisabled
    mouseDragEnabled
    fadeOutAnimation
    infinite={false}
    responsive={{
      0: {
        items: 1,
      },
      445: {
        items: 2,
      },
      768: {
        items: 3,
      },
      980: {
        items: 5,
      },
    }}
  >
    {children}
  </ReactAliceCarousel>
)

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Carousel
