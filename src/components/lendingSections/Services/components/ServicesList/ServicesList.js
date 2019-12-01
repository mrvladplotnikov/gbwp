import React from "react"
import ServicesCard from "../ServiceCard"
import styles from "./styles.module.css"

import serviceIcon1 from "../../../../../images/services/icon-1.svg"
import serviceIcon2 from "../../../../../images/services/icon-2.svg"
import serviceIcon3 from "../../../../../images/services/icon-3.svg"
import serviceIcon4 from "../../../../../images/services/icon-4.svg"

import { useStaticQuery, graphql } from "gatsby"

const icons = [serviceIcon1, serviceIcon2, serviceIcon3, serviceIcon4]

const ServicesList = ({ services = [] }) => {
  const data = useStaticQuery(graphql`
    query {
      image0: file(relativePath: { eq: "services/bg-1.jpg" }) {
        childImageSharp {
          fixed(width: 569, height: 236, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      image1: file(relativePath: { eq: "services/bg-2.jpg" }) {
        childImageSharp {
          fixed(width: 569, height: 236, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      image2: file(relativePath: { eq: "services/bg-3.jpg" }) {
        childImageSharp {
          fixed(width: 569, height: 236, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      image3: file(relativePath: { eq: "services/bg-4.jpg" }) {
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
      {services &&
        services.map((service, i) => (
          <ServicesCard
            key={i}
            className={styles.item}
            title={service.title}
            bgPath={data[`image${i}`].childImageSharp.fixed}
            iconPath={icons[i]}
            link={service.link}
          />
        ))}
    </ul>
  )
}

export default ServicesList
