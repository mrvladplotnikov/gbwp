import React from "react"
import PropTypes from "prop-types"
import ReactAliceCarousel from "react-alice-carousel"
import { FormattedMessage } from "react-intl"

const PlanList = ({ children, onClick = null }) => (
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
        <FormattedMessage id="allPlans" />
      </button>
    )}
  </div>
)

PlanList.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

export default PlanList
