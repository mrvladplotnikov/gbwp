import React from "react"
import PropTypes from "prop-types"
import { useI18next } from "gatsby-plugin-react-i18next"

import styles from "./styles.module.css"

import CloseIcon from "../../images/close.inline.svg"

const ResetFiltersButton = ({ onClick = () => null }) => {
  const { t } = useI18next()

  const label = t("resetFilterButton", { defaultValue: "Reset" })
  return (
    <button
      type="button"
      className={styles.resetFilter}
      title={label}
      onClick={onClick}
    >
      <CloseIcon className={styles.resetFilterIcon} />
      <span className={styles.resetFilterText}>{label}</span>
    </button>
  )
}

ResetFiltersButton.propTypes = {
  onClick: PropTypes.func,
}

export default ResetFiltersButton
