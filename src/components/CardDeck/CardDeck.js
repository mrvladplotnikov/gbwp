import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const CardDeck = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

CardDeck.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CardDeck
