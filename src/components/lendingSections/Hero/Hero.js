import React from "react"
import styles from "./styles.module.css"
import Languages from "../../Languages"
import HamburgerMenu from "../../HamburgerMenu"
import SocialLinks from "../../SocialLinks"
import PortfolioButton from "../../PortfolioButton/PortfolioButton"
import HeroLogo from "../../../images/logo.inline.svg"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <div className={styles.Hero}>
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt=""
        role="presentation"
        className={styles.bg}
      />
      <div className={styles.overlay}>
        <Languages />
        <HamburgerMenu />
        <SocialLinks />
        <PortfolioButton />
        <HeroLogo className={styles.logo} />
      </div>
    </div>
  )
}

export default Hero
