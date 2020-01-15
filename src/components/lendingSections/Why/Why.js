import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import FeatureList from "../../FeatureList"
import Headline from "../../Headline"
import { Outer, Inner } from "../../Container"
import { FormattedMessage } from "react-intl"

const Why = ({ intl, title, children, ...props }) => (
  <section className={styles.Why} {...props}>
    <Outer>
      <Headline className={styles.title}>
        {title ? title : <FormattedMessage id="whyTitle" />}
      </Headline>
      <Inner>
        <FeatureList>{children}</FeatureList>
      </Inner>
    </Outer>
  </section>
)

Why.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Why
