import React from "react"
import styles from "./styles.module.css"
import FeatureList from "../../FeatureList"
import { Outer, Inner } from "../../Container"
import Headline from "../../Headline"
const Why = ({ title = "", features = [] }) => (
  <section className={styles.Why}>
    <Outer>
      <Headline className={styles.title}>{title}</Headline>
      <Inner>
        <FeatureList features={features} />
      </Inner>
    </Outer>
  </section>
)

export default Why
