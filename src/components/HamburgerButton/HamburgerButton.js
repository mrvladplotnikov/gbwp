import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./styles.module.css"

const HamburgerButton = ({
  className = "",
  isOpen = false,
  onClick = () => {},
  fixed = false,
}) => (
  <button
    type="button"
    className={classNames(styles.hamburger, className, {
      [styles.open]: isOpen,
    })}
    style={{
      position: fixed ? "fixed" : "absolute",
    }}
    onClick={onClick}
  >
    <span className={styles.hamburgerLine}></span>
    <span className={styles.hamburgerLine}></span>
    <span className={styles.hamburgerLine}></span>
  </button>
)

HamburgerButton.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  fixed: PropTypes.bool,
}

export default HamburgerButton
