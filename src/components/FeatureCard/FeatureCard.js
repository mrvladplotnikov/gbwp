import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import classNames from "classnames"

const FeatureCard = ({ className, img, alt, children }) => (
  <figure className={classNames(styles.FeatureCard, className)}>
    <img className={styles.image} src={img} alt={alt} />
    <figcaption className={styles.text}>{children}</figcaption>
  </figure>
)

FeatureCard.defaultProps = {
  className: "",
  img: "",
  alt: "",
  children: "",
}

FeatureCard.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node,
}

export default FeatureCard
