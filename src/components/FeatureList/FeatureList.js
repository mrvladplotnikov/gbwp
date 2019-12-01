import React from "react"
import styles from "./styles.module.css"
import { Inner } from "../Container"
import FeatureCard from "../FeatureCard"

const FeatureList = ({ features = [] }) => (
  <Inner>
    <div className={styles.FeatureList}>
      {features.map(({ id, image, alt, body }) => (
        <FeatureCard
          key={id}
          img={image}
          alt={alt}
          body={body}
          className={styles.feature}
        />
      ))}
    </div>
  </Inner>
)

export default FeatureList
