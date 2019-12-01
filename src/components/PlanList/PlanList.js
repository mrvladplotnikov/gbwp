import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import ReactAliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import "./carousel.css"

const PlanList = ({ children, onClick = () => {} }) => (
  <div className={styles.container}>
    <ReactAliceCarousel
      className={styles.list}
      buttonsDisabled
      fadeOutAnimation
      infinite={false}
      responsive={{
        0: {
          items: 1,
        },
        585: {
          items: 2,
        },
        894: {
          items: 3,
        },
        1366: {
          items: 4,
        },
      }}
    >
      {children}
    </ReactAliceCarousel>
    <button type="button" className={styles.button} onClick={onClick}>
      Все предложения
    </button>
  </div>
)

PlanList.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

export default PlanList
