import React from "react"
import classNames from "classnames"
import styles from "./styles.module.css"
import { Outer, Inner } from "../../Container"
import Headline from "../../Headline"
import ServicesList from "./components/ServicesList/ServicesList"

const Services = ({ className = "", title = "", services = [] }) => {
  return (
    <section className={classNames(styles.Services, className)}>
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
