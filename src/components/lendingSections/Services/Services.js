import React from "react"
import styles from "./styles.module.css"
import { Outer, Inner } from "../../Container"
import Headline from "../../Headline"
import ServicesList from "./components/ServicesList/ServicesList"

const Services = ({ title = "", services = [] }) => {
  return (
    <section className={styles.Services}>
      <Outer>
        <Headline className={styles.title} Tag="h2">
          {title}
        </Headline>
        <Inner>
          <ServicesList services={services} />
        </Inner>
      </Outer>
    </section>
  )
}

export default Services
