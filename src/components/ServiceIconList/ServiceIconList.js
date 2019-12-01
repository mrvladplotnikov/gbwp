import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const ServiceIconList = ({ children }) => (
  <div className={styles.list}>{children}</div>
)

ServiceIconList.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ServiceIconList
