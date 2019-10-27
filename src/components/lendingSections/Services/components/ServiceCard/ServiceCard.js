import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ServiceCard = ({
  className = "",
  title,
  link = "/",
  bgPath,
  iconPath,
}) => (
  <li className={className}>
    <Link to={link} className={styles.Card}>
      <div className={styles.bgWrapper}>
        <Img fixed={bgPath} alt="" role="presentation" className={styles.bg} />
      </div>
      <img src={iconPath} alt="" className={styles.icon} />
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
}

export default ServiceCard
