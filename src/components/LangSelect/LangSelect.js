import React, { useState } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import { Link } from "gatsby"

const processLangLable = langCode => {
  switch (langCode) {
    case "uk":
      return "Укр"
    case "en":
      return "En"
    case "ru":
      return "Рус"
    default:
      return "None"
  }
}

const LangSelect = ({ className = "", langsMenu = [] }) => {
  const currentLang = langsMenu.find(lang => lang.selected === true)
  const [open, setOpen] = useState(false)
  const handleToogle = () => setOpen(!open)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div
      className={classNames(styles.langs, className)}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <button className={styles.currentLang} onClick={handleToogle}>
        /{processLangLable(currentLang ? currentLang.langKey : "uk")}/
      </button>
      <ul className={classNames({ [styles.open]: open })}>
        {langsMenu
          .filter(lang => !lang.selected)
          .map(lang => (
            <li key={lang.langKey}>
              <Link to={lang.link}>{processLangLable(lang.langKey)}</Link>
            </li>
          ))}
      </ul>
    </div>
  )
}

LangSelect.propTypes = {
  className: PropTypes.string,
  langsMenu: PropTypes.array,
}

export default LangSelect
