import React from "react"
import PropTypes from "prop-types"
import { injectIntl, intlShape } from "react-intl"
import styles from "./styles.module.css"
import CloseIcon from "../../images/close.inline.svg"

const ResetFiltersButton = ({ intl, onClick = () => null }) => {
  const label = intl.formatMessage({ id: "resetFilterButton" })
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
  intl: intlShape.isRequired,
  onClick: PropTypes.func,
}

export default injectIntl(ResetFiltersButton)
