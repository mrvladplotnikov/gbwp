import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

const InlineButton = ({
  className = "",
  onClick = () => {},
  children,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames("InlineButton", className)}
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
