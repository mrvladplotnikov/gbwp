import React, { useState } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { CSSTransition } from "react-transition-group"

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

const LangSelect = ({ className = "" }) => {
  const { languages, originalPath, language } = useI18next()

  const [open, setOpen] = useState(false)
  const handleToogle = () => setOpen(!open)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div
      className={classNames("LangSelect", className)}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      role="presentation"
    >
      <button className="LangSelect--currentLang" onClick={handleToogle}>
        / {processLangLable(language)} /
      </button>
      <CSSTransition
        in={open}
        classNames="fade"
        mountOnEnter
        unmountOnExit
        timeout={200}
      >
        <ul>
          {languages
            .filter(lang => lang !== language)
            .map(lang => (
              <li key={lang}>
                <Link to={originalPath} language={lang}>
                  {" "}
                  {processLangLable(lang)}{" "}
                </Link>
              </li>
            ))}
        </ul>
      </CSSTransition>
    </div>
  )
}

LangSelect.propTypes = {
  className: PropTypes.string,
  langsMenu: PropTypes.array,
}

export default LangSelect
