import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

const FeatureCard = ({ tag, className, img, alt, children }) => {
  const Tag = tag

  return (
    <Tag className={classNames("FeatureCard", className)}>
      <img
        className="FeatureCard__image"
        loading="lazy"
        width="36"
        height="36"
        src={img}
        alt={alt}
      />
      <p className="FeatureCard__text">{children}</p>
    </Tag>
  )
}

FeatureCard.defaultProps = {
  tag: "li",
  className: "",
  img: "",
  alt: "",
  children: "",
}

FeatureCard.propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node,
}

export default FeatureCard
