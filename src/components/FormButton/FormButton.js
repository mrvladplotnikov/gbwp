import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { FormattedMessage } from "react-intl"

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
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? <FormattedMessage id="loadingMessage" /> : children}
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
