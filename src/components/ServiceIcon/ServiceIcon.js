import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const ServiceIcon = ({ title, icon, alt, ...props }) => {
  const imageAlt = alt || title

  return (
    <li className={styles.container} {...props}>
      <img className={styles.icon} src={icon} alt={imageAlt} />
      <h4 className={styles.title}>{title}</h4>
    </li>
  )
}

ServiceIcon.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

export default ServiceIcon
