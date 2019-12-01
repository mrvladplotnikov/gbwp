import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import classNames from "classnames"

const FeatureCard = ({ className, img, alt, body }) => (
  <figure className={classNames(styles.FeatureCard, className)}>
    <img className={styles.image} src={img} alt={alt} />
    <figcaption
      className={styles.text}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  </figure>
)

FeatureCard.defaultProps = {
  className: "",
  img: "",
  alt: "",
  body: "",
}

FeatureCard.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  body: PropTypes.string,
}

export default FeatureCard
