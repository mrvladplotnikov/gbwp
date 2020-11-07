import React, { useState } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { Link } from "gatsby"
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

const LangSelect = ({ className = "", langsMenu = [] }) => {
  const currentLang = langsMenu.find(lang => lang.selected === true)
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
        / {processLangLable(currentLang ? currentLang.langKey : "uk")} /
      </button>
      <CSSTransition
        in={open}
        classNames="fade"
        mountOnEnter
        unmountOnExit
        timeout={200}
      >
        <ul>
          {langsMenu
            .filter(lang => !lang.selected)
            .map(lang => (
              <li key={lang.langKey}>
                <Link to={lang.link}> {processLangLable(lang.langKey)} </Link>
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
