import React from "react"
import PropTypes from "prop-types"
import { Trans } from "gatsby-plugin-react-i18next"

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
        <Trans i18nKey="loadMoreButton" defaults="Load more.." />
      </Button>
    </div>
  )
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default LoadMoreButton
