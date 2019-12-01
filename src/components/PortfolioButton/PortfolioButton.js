import React from "react"
import styles from "./styles.module.css"
const PortfolioButton = ({ onClick = () => {} }) => (
  <button onClick={onClick} className={styles.PortfolioButton}>
    Portfolio
  </button>
)

export default PortfolioButton
