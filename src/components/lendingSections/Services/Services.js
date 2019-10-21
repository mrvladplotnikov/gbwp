import React from "react"
import styles from "./styles.module.css"
import { Outer, Inner } from "../../Container"
import Headline from "../../Headline"

const Services = props => {
  return (
    <section className={styles.Services}>
      <Outer>
        <Headline className={styles.title} Tag="h2">
          Наши услуги
        </Headline>
        <Inner></Inner>
      </Outer>
    </section>
  )
}

export default Services
