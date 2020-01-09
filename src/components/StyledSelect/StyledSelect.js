import React from "react"
import PropTypes from "prop-types"
import Select, { components } from "react-select"
import ArrowIcon from "../../images/arrow-down.inline.svg"
import CloseIcon from "../../images/close.inline.svg"
import { injectIntl, intlShape } from "react-intl"

const customStyles = {
  indicatorSeparator: () => ({
    display: "none",
  }),
  menu: provided => ({
    ...provided,
    marginTop: 0,
    backgroundColor: "rgba(9, 9, 9, 0.98)",
  }),
  menuList: provided => ({
    ...provided,
    padding: 0,
    "&::-webkit-scrollbar": {
      width: 5,
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "rgba(9, 9, 9, 0.98)",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    color: "#ffffff",
    backgroundColor: "transparent",
    textDecoration: state.isSelected || state.isFocused ? "underline" : "none",
    fontWeight: state.isSelected || state.isFocused ? "600" : "normal",
    padding: "10px 15px",
    lineHeight: 1.65,
    fontSize: 16,
    "&:first-of-type": {
      padding: "10px 15px",
      paddingTop: "20px",
    },
    "&:last-of-type": {
      padding: "10px 15px",
      paddingBottom: "20px",
    },
    "&:active": {
      backgroundColor: "transparent",
    },
  }),
  container: provided => ({
    ...provided,
    minWidth: 164,
    display: "inline-block",
  }),
  control: (provided, state) => {
    return {
      ...provided,
      backgroundColor: state.menuIsOpen ? "rgba(9, 9, 9, 0.98)" : "transparent",
      transition: "background-color 0.3s",
      border: "none",
      borderRadius: "none",
      color: "#ffffff",
      cursor: "pointer",
    }
  },
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = "opacity 300ms"

    return { ...provided, opacity, transition, color: "#ffffff", fontSize: 16 }
  },
  clearIndicator: provided => ({
    ...provided,
    color: "#933636",
    cursor: "pointer",
    "&:hover": {
      color: "#FF2D2D",
    },
  }),
  placeholder: provided => ({ ...provided, color: "#ffffff", fontSize: 16 }),
}

const DropdownIndicator = props =>
  components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <ArrowIcon />
    </components.DropdownIndicator>
  )

const ClearIndicator = props =>
  components.ClearIndicator && (
    <components.ClearIndicator {...props}>
      <CloseIcon />
    </components.ClearIndicator>
  )

const StyledSelect = ({
  placeholder = "",
  isClearable = true,
  value = null,
  onChange = () => {},
  name = "",
  options = [],
  intl,
  ...props
}) => (
  <Select
    noOptionsMessage={intl.formatMessage({ id: "noOptionsMessage" })}
    placeholder={placeholder}
    isClearable={isClearable}
    value={value}
    onChange={onChange}
    options={options}
    name={name}
    styles={customStyles}
    components={{
      DropdownIndicator,
      ClearIndicator,
    }}
    {...props}
  />
)

StyledSelect.propTypes = {
  intl: intlShape.isRequired,
  placeholder: PropTypes.string,
  isClearable: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func,
  name: PropTypes.string,
  options: PropTypes.array,
}

export default injectIntl(StyledSelect)
