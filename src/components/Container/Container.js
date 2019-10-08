import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const Outer = ({ children }) => <div className={styles.Outer}>{children}</div>

Outer.propTypes = {
  children: PropTypes.node.isRequired,
}

const Inner = ({ children }) => <div className={styles.Inner}>{children}</div>

Inner.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Outer, Inner }
