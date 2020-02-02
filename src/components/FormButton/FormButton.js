import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

const FormButton = props => {
  const {
    children,
    disabled = false,
    loading = false,
    className = "",
    ...rest
  } = props

  return (
    <button
      className={classNames("form-button", className)}
      disabled={disabled}
      {...rest}
    >
      {loading ? "Loading..." : children}
    </button>
  )
}

FormButton.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
}

export default FormButton
