import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const ServiceIcon = ({ title, icon }) => (
  <figure className={styles.container}>
    <img className={styles.icon} src={icon} alt={title} />
    <figcaption className={styles.title}>{title}</figcaption>
  </figure>
)

ServiceIcon.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default ServiceIcon
