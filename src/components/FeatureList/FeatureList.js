import React from "react"
import styles from "./styles.module.css"
import features from "../../utils/features"
import { Inner } from "../Container"
import FeatureCard from "../FeatureCard"

const FeatureList = () => (
  <Inner>
    <div className={styles.FeatureList}>
      {features.map(({ id, image, alt, text }) => (
        <FeatureCard
          key={id}
          img={image}
          alt={alt}
          text={text}
          className={styles.feature}
        />
      ))}
    </div>
  </Inner>
)

export default FeatureList
