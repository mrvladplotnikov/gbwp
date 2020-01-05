import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

const HamburgerButton = ({
  className = "",
  isOpen = false,
  onClick = () => {},
  fixed = false,
}) => (
  <button
    type="button"
    className={classNames("hamburger", className, {
      "hamburger--open": isOpen,
    })}
    style={{
      position: fixed ? "fixed" : "absolute",
    }}
    onClick={onClick}
  >
    <span className="hamburger__line"></span>
    <span className="hamburger__line"></span>
    <span className="hamburger__line"></span>
  </button>
)

HamburgerButton.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  fixed: PropTypes.bool,
}

export default HamburgerButton
