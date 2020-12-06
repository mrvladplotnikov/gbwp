import React from "react"
import PropTypes from "prop-types"
import ReactAliceCarousel from "react-alice-carousel"
import Button from "~components/Button"

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
        998: {
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
      <div className="PlanList__button-container">
        <Button
          showArrow={false}
          className="PlanList__button"
          onClick={onClick}
        >
          {label}
        </Button>
      </div>
    )}
  </div>
)

PlanList.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  label: PropTypes.string,
}

export default PlanList
