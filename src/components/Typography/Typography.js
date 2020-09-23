import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import styles from "./styles.module.scss"

const Typography = ({ component, variant, disableGutters, ...props }) => {
  const Tag = component

  return (
    <Tag
      className={classnames(styles.Typography, styles[variant], {
        [styles.disableGutters]: disableGutters,
      })}
      {...props}
    />
  )
}

Typography.propTypes = {
  component: PropTypes.oneOf(["div", "span", "p", "h1", "h2", "h3", "h4"]),
  variant: PropTypes.oneOf([
    "body1",
    "body2",
    "title1",
    "subtitle1",
    "subtitle2",
  ]),
  disableGutters: PropTypes.bool,
}

Typography.defaultProps = {
  component: "p",
  variant: "body1",
  disableGutters: false,
}

export default Typography
