import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import { Link } from "gatsby"
import { FormattedMessage } from "react-intl"

const PortfolioLink = ({ link = "/portfolio" }) => (
  <Link to={link} className={styles.PortfolioLink}>
    <span className={styles.line}></span>
    <FormattedMessage id="portfolioLabel" />
  </Link>
)

PortfolioLink.propTypes = {
  link: PropTypes.string,
}

export default PortfolioLink
