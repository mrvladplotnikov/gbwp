import React from "react"
import PropTypes from "prop-types"
import Select, { components } from "react-select"
import ArrowIcon from "../../images/arrow-down.inline.svg"
import CloseIcon from "../../images/close.inline.svg"
import styled from "styled-components"

import customSelectStyles from "./customSelectStyles"

const StyledReactSelect = styled(({ minWidth, ...other }) => (
  <Select {...other} />
))`
  .vp-react-select__control {
    min-width: ${({ minWidth }) => minWidth};

    @media (min-width: 540px) {
      min-width: 182px;
    }
    @media (min-width: 768px) {
      min-width: 266px;
    }
  }

  .vp-react-select__dropdown-indicator svg path {
    fill: #939393;
    transition: fill 0.3s;
  }

  &:hover {
    .vp-react-select__dropdown-indicator svg path {
      fill: #fff;
    }
    .vp-react-select__placeholder {
      color: #fff;
    }
  }
`

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
  minWidth = "140px",
  ...props
}) => {
  return (
    <StyledReactSelect
      isSearchable={false}
      placeholder={placeholder}
      isClearable={isClearable}
      value={value}
      onChange={onChange}
      options={options}
      name={name}
      styles={customSelectStyles}
      minWidth={minWidth}
      classNamePrefix="vp-react-select"
      components={{
        DropdownIndicator,
        ClearIndicator,
        Option,
      }}
      {...props}
    />
  )
}

StyledSelect.propTypes = {
  placeholder: PropTypes.string,
  isClearable: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func,
  name: PropTypes.string,
  options: PropTypes.array,
  minWidth: PropTypes.string,
}

export default StyledSelect
