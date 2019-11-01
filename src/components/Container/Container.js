import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./styles.module.css"

const Outer = ({ className = "", children }) => (
  <div className={classNames(styles.Outer, className)}>{children}</div>
)

Outer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

const Inner = ({ className = "", children }) => (
  <div className={classNames(styles.Inner, className)}>{children}</div>
)

Inner.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export { Outer, Inner }
