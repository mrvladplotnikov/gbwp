import React from "react"
import PropTypes from "prop-types"
import Select, { components } from "react-select"
import ArrowIcon from "../../images/arrow-down.inline.svg"
import CloseIcon from "../../images/close.inline.svg"

const customStyles = {
  input: provided => ({
    ...provided,
    color: "#ffffff",
  }),
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
    position: "relative",
    cursor: "pointer",
    color: "#ffffff",
    backgroundColor: "transparent",
    fontWeight: "normal",
    padding: "10px 15px",
    lineHeight: 1.65,
    fontSize: 16,
    textShadow:
      state.isSelected || state.isFocused ? "1px 0 0 currentColor" : "none",
    span: {
      paddingBottom: "0.3em",
      borderBottom: "1px solid",
      borderColor:
        state.isSelected || state.isFocused ? "#ffffff" : "transparent",
    },
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
      textDecoration: "none",
      textShadow: "1px 0 0 currentColor",
      span: {
        borderColor: "#ffffff",
      },
    },
    "&:hover": {
      fontWeight: "normal",
      textDecoration: "none",
      textShadow: "1px 0 0 currentColor",
      span: {
        borderColor: "#ffffff",
      },
    },
  }),
  container: provided => ({
    ...provided,
    display: "inline-block",
    minWidth: 132,
    "@media(min-width: 540px)": {
      minWidth: 182,
    },
  }),
  control: (provided, state) => {
    return {
      ...provided,
      backgroundColor: state.menuIsOpen ? "rgba(9, 9, 9, 0.98)" : "transparent",
      transition: "background-color 0.3s",
      border: "none",
      borderRadius: 0,
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
  valueContainer: provided => ({
    ...provided,
    color: "#ffffff",
    padding: "2px 15px",
  }),
}

const DropdownIndicator = props =>
  components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <ArrowIcon />
    </components.DropdownIndicator>
  )

const Option = props =>
  components.Option && (
    <components.Option {...props}>
      <span>{props.children}</span>
    </components.Option>
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
      Option,
    }}
    {...props}
  />
)

StyledSelect.propTypes = {
  placeholder: PropTypes.string,
  isClearable: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func,
  name: PropTypes.string,
  options: PropTypes.array,
}

export default StyledSelect
