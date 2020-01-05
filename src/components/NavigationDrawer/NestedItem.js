import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { Link } from "gatsby"
import ArrowDown from "../../images/arrow-down.inline.svg"

const NestedItem = ({ label = "", child, locale = "uk" }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)

  return (
    <li className={"NavigationDrawer__dropdown"}>
      <button
        className={"NavigationDrawer__dropdownButton"}
        onClick={handleClick}
      >
        {label} <ArrowDown />
      </button>
      <ul
        className={classNames("NavigationDrawer__childList", {
          NavigationDrawer__open: isOpen,
        })}
      >
        {child.map((childItem, i) => (
          <li key={i}>
            <Link to={childItem.link[locale]}>{childItem.label[locale]}</Link>
          </li>
        ))}
      </ul>
    </li>
  )
}

NestedItem.propTypes = {
  label: PropTypes.string,
  locale: PropTypes.string,
  child: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.shape({
        uk: PropTypes.string,
        ru: PropTypes.string,
        en: PropTypes.string,
      }),
      link: PropTypes.shape({
        uk: PropTypes.string,
        ru: PropTypes.string,
        en: PropTypes.string,
      }),
    })
  ),
}

export default NestedItem
