import React from "react"
import PropTypes from "prop-types"
import Button from "~components/Button"
import Slider from "~components/Slider"

const PlanList = ({
  children,
  type = "carousel",
  label = "",
  onClick = null,
}) => {
  return (
    <div className="PlanList__container">
      <Slider
        id="plan-slider"
        type={type}
        perView={4}
        gap={10}
        focusAt={0}
        breakpoints={{
          566: {
            perView: 1,
          },
          765: {
            perView: 2,
          },
          1200: {
            perView: 3,
          },
        }}
      >
        {React.Children.map(children, child => (
          <div>{child}</div>
        ))}
      </Slider>
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
}

PlanList.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  label: PropTypes.string,
}

export default PlanList
