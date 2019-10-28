import React from "react"
import ServicesCard from "../ServiceCard"
import styles from "./styles.module.css"

import serviceIcon1 from "../../../../../images/services/icon-1.svg"
import serviceIcon2 from "../../../../../images/services/icon-2.svg"
import serviceIcon3 from "../../../../../images/services/icon-3.svg"
import serviceIcon4 from "../../../../../images/services/icon-4.svg"

import { useStaticQuery, graphql } from "gatsby"

const ServicesList = () => {
  const data = useStaticQuery(graphql`
    query {
      serviceBg1: file(relativePath: { eq: "services/bg-1.jpg" }) {
        childImageSharp {
          fixed(width: 569, height: 236, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      serviceBg2: file(relativePath: { eq: "services/bg-2.jpg" }) {
        childImageSharp {
          fixed(width: 569, height: 236, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      serviceBg3: file(relativePath: { eq: "services/bg-3.jpg" }) {
        childImageSharp {
          fixed(width: 569, height: 236, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      serviceBg4: file(relativePath: { eq: "services/bg-4.jpg" }) {
        childImageSharp {
          fixed(width: 569, height: 236, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <ul className={styles.list}>
      <ServicesCard
        className={styles.item}
        title="Создание музыки"
        bgPath={data.serviceBg1.childImageSharp.fixed}
        iconPath={serviceIcon1}
        link="/"
      />
      <ServicesCard
        className={styles.item}
        title="Аудиобрендинг"
        bgPath={data.serviceBg3.childImageSharp.fixed}
        iconPath={serviceIcon3}
        link="/"
      />
      <ServicesCard
        className={styles.item}
        title="Звуковой дизайн"
        bgPath={data.serviceBg2.childImageSharp.fixed}
        iconPath={serviceIcon2}
        link="/"
      />
      <ServicesCard
        className={styles.item}
        title="Голосовое озвучивание"
        bgPath={data.serviceBg4.childImageSharp.fixed}
        iconPath={serviceIcon4}
        link="/"
      />
    </ul>
  )
}

export default ServicesList
