import React from "react"
import styles from "./styles.module.css"
import { Inner, Outer } from "../../Container"
import StyledLink from "../../StyledLink"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Headline from "../../Headline"
const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1170) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <section className={styles.About}>
      <Outer>
        <Headline className={styles.title} Tag="h1">
          VP Production
        </Headline>
        <Inner>
          <figure className={styles.imageCard}>
            <Img
              fluid={data.placeholderImage.childImageSharp.fluid}
              alt="Мы – команда людей, которые создают музыку."
              className={styles.image}
            />
            <figcaption className={styles.text}>
              Мы – команда людей, которые создают музыку, звуки и продюсируют
              дикторское озвучивание на грани чистого творчества и
              функциональности.
            </figcaption>
          </figure>
          <div className={styles.linkWrapper}>
            <StyledLink className={styles.link} to="/about">
              О нас
            </StyledLink>
          </div>
        </Inner>
      </Outer>
    </section>
  )
}

export default About
