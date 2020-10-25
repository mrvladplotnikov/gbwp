import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const ServiceIcon = ({ title, icon, ...props }) => (
  <li className={styles.container} {...props}>
    <img className={styles.icon} src={icon} alt={title} />
    <h4 className={styles.title}>{title}</h4>
  </li>
)

ServiceIcon.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default ServiceIcon
