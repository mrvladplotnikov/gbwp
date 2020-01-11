import React from "react"
import PropTypes from "prop-types"
import ReactAliceCarousel from "react-alice-carousel"

const PlanList = ({ children, label = "", onClick = null }) => (
  <div className="PlanList__container">
    <ReactAliceCarousel
      className="PlanList__list"
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
    {onClick && (
      <button type="button" className="PlanList__button" onClick={onClick}>
        {label}
      </button>
    )}
  </div>
)

PlanList.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  label: PropTypes.string,
}

export default PlanList
