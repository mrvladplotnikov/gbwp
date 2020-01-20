import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import classNames from "classnames"

const StyledLink = ({ className, children, to, onClick, ...attrs }) => {
  return (
    <div className={classNames("StyledLink__wrapper", className)}>
      {to ? (
        <Link className="StyledLink" to={to} {...attrs}>
          {children}
        </Link>
      ) : (
        <button className="StyledLink" onClick={onClick} {...attrs}>
          {children}
        </button>
      )}
      <div className="StyledLink__arrowWrapper" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="73"
          height="9"
          fill="none"
          className="StyledLink__arrow"
        >
          <path stroke="#747474" d="M0 4.5h72m0 0L67.5 1M72 4.5L67.5 8" />
        </svg>
      </div>
    </div>
  )
}

StyledLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
}

StyledLink.defaultProps = {
  to: "",
  children: "link",
  onClick: () => {},
}

export default StyledLink
