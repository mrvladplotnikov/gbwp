import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

const Outer = ({ className = "", children }) => (
  <div className={classNames("Outer", className)}>{children}</div>
)

Outer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

const Inner = ({ className = "", children }) => (
  <div className={classNames("Inner", className)}>{children}</div>
)

Inner.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export { Outer, Inner }
