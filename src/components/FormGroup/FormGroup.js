import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

const FormGroup = props => {
  const {
    type,
    value,
    onChange,
    placeholder,
    label,
    id,
    classes,
    error,
    helpText,
    disabled,
    ...props
  } = props

  return (
    <div
      className={classNames("form-group", classes.group, {
        "form-group--error": error,
        "form-group--disabled": disabled,
      })}
    >
      <label className={classNames("form-group__label", classes.label)}>
        {label}
        <input
          id={id}
          type={type}
          className={classNames("form-group__control", classes.input)}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
      </label>
      {error && (
        <small
          className={classnames(
            "form-group__text",
            "form-group__text--error",
            classes.error
          )}
        >
          {error}
        </small>
      )}
      {helpText && (
        <small className={classnames("form-group__text", classes.helpText)}>
          {helpText}
        </small>
      )}
    </div>
  )
}

FormGroup.defaultProps = {
  type: "text",
  value: "",
  onChange: () => {},
  placeholder: "",
  label: "",
  id: "",
  classes: {
    group: "",
    label: "",
    input: "",
    error: "",
    helpText: "",
  },
  error: "",
  helpText: "",
  disabled: false,
}

FormGroup.propTypes = {
  type: PropTypes.oneOf(["email", "text"]),
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  classes: PropTypes.shape({
    group: PropTypes.string,
    label: PropTypes.string,
    input: PropTypes.string,
    error: PropTypes.string,
    helpText: PropTypes.string,
  }),
  error: PropTypes.string,
  helpText: PropTypes.string,
  disabled: PropTypes.bool,
}

export default FormGroup
