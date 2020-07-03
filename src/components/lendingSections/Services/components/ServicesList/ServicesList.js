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
          fluid(quality: 100, maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image1: file(relativePath: { eq: "services/bg-3.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "services/bg-2.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 768) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "services/bg-4.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 768) {
            ...GatsbyImageSharpFluid
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
            bgPath={data[`image${i}`].childImageSharp.fluid}
            iconPath={icons[i]}
            link={service.link}
            alt={service.alt}
          />
        ))}
    </ul>
  )
}

export default ServicesList
