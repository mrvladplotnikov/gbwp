import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import SocialLinks from "../../SocialLinks"
import PortfolioLink from "../../PortfolioLink"
import HeroLogo from "../../../images/logo.inline.svg"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = ({ link = "/porfolio" }) => {
  const data = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "hero-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1280, quality: 95) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <div className={styles.Hero}>
      <Img
        fluid={data.bgImage.childImageSharp.fluid}
        alt=""
        role="presentation"
        className={styles.bg}
      />
      <div className={styles.overlay}>
        <SocialLinks />
        <PortfolioLink link={link} />
        <HeroLogo className={styles.logo} />
      </div>
    </div>
  )
}

Hero.propTypes = {
  link: PropTypes.string,
}

export default Hero
