import React from "react"
import PropTypes from "prop-types"

import styles from "./styles.module.css"

const Headline = ({ Tag, children, ...attrs }) => (
  <Tag className={styles.headline} {...attrs}>
    {children}
  </Tag>
)

Headline.propTypes = {
  Tag: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5"]),
  children: PropTypes.node.isRequired,
}

Headline.defaultProps = {
  Tag: "h2",
}

export default Headline
