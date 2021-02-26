import React from "react"
import PropTypes from "prop-types"
import { Trans, Link, useI18next } from "gatsby-plugin-react-i18next"

import styles from "./styles.module.css"

const PortfolioLink = ({ link = "/portfolio" }) => {
  const { language } = useI18next()

  return (
    <Link to={link} language={language} className={styles.PortfolioLink}>
      <span className={styles.line}></span>
      <Trans i18nKey="portfolioLabel" default="Portfolio" />
    </Link>
  )
}

PortfolioLink.propTypes = {
  link: PropTypes.string,
}

export default PortfolioLink
