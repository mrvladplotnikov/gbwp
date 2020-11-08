import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import SocialLinks from "../../SocialLinks"
import PortfolioLink from "../../PortfolioLink"

import HeroLogo from "../../../images/logo.inline.svg"

import styles from "./styles.module.css"

const Hero = ({ link = "/porfolio" }) => {
  const data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "hero-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 95) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      fluid={data.bgImage.childImageSharp.fluid}
      Tag="div"
      className={styles.Hero}
    >
      <div className={styles.overlay}>
        <SocialLinks />
        <PortfolioLink link={link} />
        <HeroLogo className={styles.logo} />
      </div>
    </BackgroundImage>
  )
}

Hero.propTypes = {
  link: PropTypes.string,
}

export default Hero
