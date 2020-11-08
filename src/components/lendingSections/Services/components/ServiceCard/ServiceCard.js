import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import BGIMG from "gatsby-background-image"

import styles from "./styles.module.css"

const ServiceCard = ({
  className = "",
  title,
  link = "/",
  bgPath,
  iconPath,
  alt = "",
}) => (
  <li className={className}>
    <Link to={link} className={styles.Card}>
      <div className={styles.bgWrapper}>
        <BGIMG fluid={bgPath} className={styles.bg} />
      </div>
      <img
        src={iconPath}
        role="presentation"
        alt={alt}
        className={styles.icon}
        loading="lazy"
        width="50"
        height="50"
      />
      <h4 className={styles.title}>{title}</h4>
    </Link>
  </li>
)

ServiceCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  bgPath: PropTypes.object.isRequired,
  iconPath: PropTypes.string.isRequired,
  alt: PropTypes.string,
}

export default ServiceCard
