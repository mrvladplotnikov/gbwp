import React from "react"
import styles from "./styles.module.css"
import { Outer, Inner } from "../../Container"
import Headline from "../../Headline"
import ServicesList from "./components/ServicesList/ServicesList"

const Services = () => {
  return (
    <section className={styles.Services}>
      <Outer>
        <Headline className={styles.title} Tag="h2">
          Наши услуги
        </Headline>
        <Inner>
          <ServicesList />
        </Inner>
      </Outer>
    </section>
  )
}

export default Services
