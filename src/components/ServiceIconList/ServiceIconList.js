import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const ServiceIconList = ({ children, align }) => (
  <ul className={styles.list} style={{ justifyContent: align }}>
    {children}
  </ul>
)

ServiceIconList.defaultProps = {
  align: "space-around",
}

ServiceIconList.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(["space-around", "center", "space-evenly"]),
}

export default ServiceIconList
