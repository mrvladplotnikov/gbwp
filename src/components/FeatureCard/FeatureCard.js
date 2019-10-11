import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import classNames from "classnames"

const FeatureCard = ({ className, img, alt, text }) => (
  <figure className={classNames(styles.FeatureCard, className)}>
    <img className={styles.image} src={img} alt={alt} />
    <figcaption className={styles.text}>{text}</figcaption>
  </figure>
)

FeatureCard.defaultProps = {
  className: "",
  img: "",
  alt: "",
  text: "",
}

FeatureCard.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string,
}

export default FeatureCard
