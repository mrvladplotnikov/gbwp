export default {
  indicatorSeparator: () => ({
    display: "none",
  }),
  menu: provided => ({
    ...provided,
    marginTop: 0,
    transition: "background-color 0.3s",
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
    display: state.isSelected ? "none" : "block",
    position: "relative",
    cursor: "pointer",
    backgroundColor: "transparent",
    fontWeight: "normal",
    padding: "0.5em",
    lineHeight: 1.5,
    fontSize: 14,
    transition: "color 0.3s",
    color: state.isFocused ? "#ffffff" : "#939393",
    "@media(min-width: 540px)": {
      fontSize: 16,
      padding: "0.5em 1.5em",
    },
    "@media(min-width: 768px)": {
      fontSize: 20,
    },
    span: {
      paddingBottom: "0.3em",
      borderBottom: "1px solid",
      transition: "border-color 0.3s",
      borderColor: state.isFocused ? "#ffffff" : "transparent",
    },

    "&:last-of-type": {
      paddingBottom: "1.5em",
    },
    "&:active": {
      backgroundColor: "transparent",
      textDecoration: "none",
      color: "#ffffff",
      span: {
        borderColor: "#ffffff",
      },
    },
    "&:hover": {
      fontWeight: "normal",
      textDecoration: "none",
      color: "#ffffff",
      span: {
        borderColor: "#ffffff",
      },
    },
  }),
  container: provided => ({
    ...provided,
    display: "inline-block",
    fontWeight: 400,
    width: "100%",
    "@media(min-width: 540px)": {
      width: "auto",
    },
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: state.menuIsOpen ? "rgba(9, 9, 9, 0.98)" : "transparent",
    transition: "background-color 0.3s",
    border: "none",
    borderRadius: 0,
    cursor: "pointer",
    paddingRight: "1em",
    color: state.isSelected || state.isFocused ? "#ffffff" : "#939393",
    boxShadow: "none",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = "opacity 0.3s"

    return {
      ...provided,
      opacity,
      transition,
      color: "#ffffff",
      fontSize: 16,
      "@media(min-width: 540px)": {
        fontSize: 20,
      },
      "@media(min-width: 768px)": {
        fontSize: 22,
      },
    }
  },
  clearIndicator: provided => ({
    ...provided,
    color: "#933636",
    cursor: "pointer",
    paddingRight: "1.25em",
    transition: "color 0.3s",
    "&:hover": {
      color: "#FF2D2D",
    },
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: state.isSelected || state.isFocused ? "#ffffff" : "#939393",
    fontSize: 16,
    lineHeight: 1,
    transition: "color 0.3s",
    "@media(min-width: 540px)": {
      fontSize: 20,
    },
    "@media(min-width: 768px)": {
      fontSize: 22,
    },
  }),
  valueContainer: provided => ({
    ...provided,
    color: "#ffffff",
    fontSize: 16,
    padding: "2em 0em 0em 0.75em",
    "@media(min-width: 540px)": {
      fontSize: 20,
      padding: "2em 0em 0em 1.25em",
    },
    "@media(min-width: 768px)": {
      fontSize: 22,
    },
  }),
  dropdownIndicator: (provided, { hasValue }) => {
    if (hasValue)
      return {
        display: "none",
      }

    return {
      ...provided,
      paddingRight: "0.25em",
      "@media(min-width: 540px)": {
        paddingRight: "1.25em",
      },
      "@media(min-width: 768px)": {
        paddingRight: "1.25em",
      },
    }
  },
}
