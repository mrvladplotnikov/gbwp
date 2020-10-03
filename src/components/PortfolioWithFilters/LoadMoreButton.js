import React from "react"
import PropTypes from "prop-types"
import { FormattedMessage } from "react-intl"

import Button from "~components/Button"

import styles from "./styles.module.css"

const LoadMoreButton = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <Button
        onClick={onClick}
        className={styles.loadMoreButton}
        arrowPosition="right"
      >
        <FormattedMessage id="loadMoreButton" />
      </Button>
    </div>
  )
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default LoadMoreButton
