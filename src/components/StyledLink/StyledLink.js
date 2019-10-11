import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import classNames from "classnames"

import styles from "./styles.module.css"

const StyledLink = ({ className, children, to, ...attrs }) => {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <Link className={styles.StyledLink} to={to} {...attrs}>
        {children}
      </Link>
      <div className={styles.arrowWrapper} aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="73"
          height="9"
          fill="none"
          className={styles.arrow}
        >
          <path stroke="#747474" d="M0 4.5h72m0 0L67.5 1M72 4.5L67.5 8" />
        </svg>
      </div>
    </div>
  )
}

StyledLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string,
}

StyledLink.defaultProps = {
  children: "Link",
}

export default StyledLink
