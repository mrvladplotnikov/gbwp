import React from "react"
import classnames from "classnames"
import PropTypes from "prop-types"

import styles from "./styles.module.scss"

function Item({ className = "", children }) {
  return (
    <li className={classnames(styles.item, "glide__slide", className)}>
      {children}
    </li>
  )
}

Item.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Item
