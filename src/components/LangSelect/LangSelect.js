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

const LangSelect = ({ langsMenu = [] }) => {
  const currentLang = langsMenu.find(lang => lang.selected === true)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  return (
    <div className={styles.langs}>
      <button className={styles.currentLang} onClick={handleOpen}>
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
  langsMenu: PropTypes.array,
}

export default LangSelect
