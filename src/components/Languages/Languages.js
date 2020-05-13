import React, { Fragment } from "react"
import classNames from "classnames"
import { Link } from "gatsby"

const Languages = ({ className = "", langsMenu = [] }) => {
  return (
    <div className={classNames("languages", className)}>
      {langsMenu.map((lang, i) => (
        <Fragment key={lang.langKey}>
          <Link
            className={classNames("language", {
              currentLanguage: lang.selected,
            })}
            to={lang.link || "/"}
          >
            {lang.langKey}
          </Link>
          {i !== langsMenu.length - 1 ? "/" : ""}
        </Fragment>
      ))}
    </div>
  )
}

export default Languages
