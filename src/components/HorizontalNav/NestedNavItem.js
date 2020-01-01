import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./styles.module.css"
import { Link } from "gatsby"
import ArrowDown from "../../images/arrow-down.inline.svg"

const NestedNavItem = ({ label = "", child, locale = "uk" }) => {
  const [open, setOpen] = useState(false)
  const handleToogle = () => setOpen(!open)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <li
      className={styles.dropdown}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <button className={styles.dropdownButton} onClick={handleToogle}>
        {label} <ArrowDown />
      </button>
      <ul className={classNames(styles.childList, { [styles.open]: open })}>
        {child.map((childItem, i) => (
          <li key={i}>
            <Link to={childItem.link[locale]}>{childItem.label[locale]}</Link>
          </li>
        ))}
      </ul>
    </li>
  )
}

NestedNavItem.propTypes = {
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

export default NestedNavItem
