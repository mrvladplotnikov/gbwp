import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const FeatureCard = ({ img, alt, text }) => (
  <figure className={styles.FeatureCard}>
    <img className={styles.image} src={img} alt={alt} />
    <figcaption className={styles.text}>{text}</figcaption>
  </figure>
)

FeatureCard.defaultProps = {
  img: "",
  alt: "",
  text: "",
}

FeatureCard.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  text: PropTypes.string,
}

export default FeatureCard
