import React from "react"
import styles from "./styles.module.css"
import FeatureList from "../../FeatureList"
import { Outer, Inner } from "../../Container"
import Headline from "../../Headline"
const Why = () => (
  <section className={styles.Why}>
    <Outer>
      <Headline className={styles.title}>Почему мы?</Headline>
      <Inner>
        <FeatureList />
      </Inner>
    </Outer>
  </section>
)

export default Why
