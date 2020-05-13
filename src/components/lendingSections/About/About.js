import React from "react"
import styles from "./styles.module.css"
import { Inner, Outer } from "../../Container"
import StyledLink from "../../StyledLink"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Headline from "../../Headline"

const About = ({ title = "", text = "", linkLabel = "", linkURL = null }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
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
          {title}
        </Headline>
        <Inner>
          <figure className={styles.imageCard}>
            <Img
              fadeIn={false}
              loading="eager"
              fluid={data.placeholderImage.childImageSharp.fluid}
              alt={title}
              className={styles.image}
            />
            <figcaption className={styles.text}>{text}</figcaption>
          </figure>
          {linkURL && (
            <div className={styles.linkWrapper}>
              <StyledLink className={styles.link} to={linkURL}>
                {linkLabel}
              </StyledLink>
            </div>
          )}
        </Inner>
      </Outer>
    </section>
  )
}

export default About
