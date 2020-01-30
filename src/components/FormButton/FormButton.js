import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

const FormButton = props => {
  const {
    children,
    onClick,
    disabled = false,
    loading = false,
    className = "",
  } = props

  return (
    <button
      className={classNames("form-button", className)}
      disabled={disabled}
      onClick={onClick}
    >
      {loading ? "Loading..." : children}
    </button>
  )
}

FormButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
}

export default FormButton
