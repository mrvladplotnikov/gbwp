import React, { Fragment } from "react"
import classNames from "classnames"
import { Link, useI18next } from "gatsby-plugin-react-i18next"

const Languages = ({ className = "" }) => {
  const { languages, originalPath, language } = useI18next()

  return (
    <div className={classNames("languages", className)}>
      {languages.map((lang, i) => (
        <Fragment key={lang}>
          <Link
            className={classNames("language", {
              currentLanguage: lang === language,
            })}
            to={originalPath}
            language={lang}
          >
            {lang}
          </Link>
          {i !== languages.length - 1 ? "/" : ""}
        </Fragment>
      ))}
    </div>
  )
}

export default Languages
