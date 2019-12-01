import React, { Fragment } from "react"
import styles from "./styles.module.css"
import classNames from "classnames"
import { Link } from "gatsby"

const Languages = ({ className = "", langsMenu = [] }) => (
  <div className={classNames(styles.languages, className)}>
    {langsMenu.map((lang, i) => (
      <Fragment key={lang.langKey}>
        <Link
          className={classNames(styles.language, {
            [styles.currentLanguage]: lang.selected,
          })}
          to={lang.link}
        >
          {lang.langKey}
        </Link>
        {i !== langsMenu.length - 1 ? "/" : ""}
      </Fragment>
    ))}
  </div>
)

export default Languages
