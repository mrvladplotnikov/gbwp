import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

const FeatureCard = ({ className, img, alt, children }) => (
  <figure className={classNames("FeatureCard", className)}>
    <img className="FeatureCard__image" src={img} alt={alt} />
    <figcaption className="FeatureCard__text">{children}</figcaption>
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
