import React from "react"
import styles from "./styles.module.css"
import { Link } from "gatsby"

const Languages = () => (
  <div className={styles.languages}>
    <Link
      className={styles.language}
      activeClassName={styles.currentLanguage}
      partiallyActive
      to="/"
    >
      uk
    </Link>
    /
    <Link
      className={styles.language}
      activeClassName={styles.currentLanguage}
      partiallyActive
      to="/ru"
    >
      ru
    </Link>
    /
    <Link
      className={styles.language}
      activeClassName={styles.currentLanguage}
      partiallyActive
      to="/en"
    >
      en
    </Link>
  </div>
)

export default Languages
