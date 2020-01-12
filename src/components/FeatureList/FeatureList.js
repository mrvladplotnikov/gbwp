import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import { Inner } from "../Container"

const FeatureList = ({ children }) => (
  <Inner>
    <div className={styles.FeatureList}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { className: styles.feature })
      )}
    </div>
  </Inner>
)

FeatureList.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FeatureList
