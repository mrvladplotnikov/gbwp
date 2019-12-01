import React from "react"
import styles from "./styles.module.css"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Inner } from "../Container"
const Sidebar = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "services/sidebar-bg-1.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          className={styles.container}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <Inner>
            <h1 className={styles.title}>Создание музыки</h1>
            <figure className={styles.quote}>
              <blockquote>
                При создании игр, как и при съёмке кино, звук имеет очень
                большое значение. 60 или даже 70% ощущений создаётся именно за
                счёт звука. При этом звук – это не только музыкальное
                сопровождение, но и звуковые эффекты. Их наличие или отсутствие
                очень сильно определяет атмосферу игры.
              </blockquote>
              <figcaption className={styles.autor}>
                <cite>Хидео Кодзима</cite>
              </figcaption>
            </figure>
          </Inner>
        </BackgroundImage>
      )
    }}
  ></StaticQuery>
)

export default Sidebar
