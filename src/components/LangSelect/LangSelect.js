import React, { useState } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import { Link } from "gatsby"
import { UK, RU, EN } from "../../utils/langs"

const processLangLabe = langCode => {
  switch (langCode) {
    case UK:
      return "Укр"
    case EN:
      return "En"
    case RU:
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
      <div className={styles.currentLang} onClick={handleOpen}>
        /{processLangLabe(currentLang ? currentLang.langKey : UK)}/
      </div>
      <ul className={classNames({ [styles.open]: open })}>
        {langsMenu
          .filter(lang => !lang.selected)
          .map(lang => (
            <li key={lang.langKey}>
              <Link to={lang.link}>{processLangLabe(lang.langKey)}</Link>
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
