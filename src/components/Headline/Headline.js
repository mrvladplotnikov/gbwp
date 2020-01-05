import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

const Headline = ({ Tag, children, className, ...attrs }) => (
  <Tag className={classNames("Headline", className)} {...attrs}>
    {children}
  </Tag>
)

Headline.propTypes = {
  Tag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Headline.defaultProps = {
  Tag: "h2",
  className: "",
}

export default Headline
