import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { Inner, Outer } from "~components/Container"
import Button from "~components/Button"
import Headline from "~components/Headline"

import styles from "./styles.module.css"

const About = ({
  title = "",
  alt = "",
  text = "",
  linkLabel = "",
  linkURL = null,
}) => {
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
          <div className={styles.imageCard}>
            <Img
              fadeIn={false}
              loading="eager"
              fluid={data.placeholderImage.childImageSharp.fluid}
              alt={alt}
              className={styles.image}
            />
            <p className={styles.text}>{text}</p>
          </div>
          {linkURL && (
            <div className={styles.linkWrapper}>
              <Button className={styles.link} to={linkURL}>
                {linkLabel}
              </Button>
            </div>
          )}
        </Inner>
      </Outer>
    </section>
  )
}

export default About
