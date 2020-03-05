import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./styles.module.css"

const InlineButton = ({
  className = "",
  onClick = () => {},
  children,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, className)}
      {...rest}
    >
      {children}
    </button>
  )
}

InlineButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default InlineButton
