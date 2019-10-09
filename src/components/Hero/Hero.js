import React from "react"
import styles from "./styles.module.css"
import Languages from "../Languages"
import HamburgerMenu from "../HamburgerMenu"
import SocialLinks from "../SocialLinks"
import PortfolioButton from "../PortfolioButton/PortfolioButton"
import HeroLogo from "../../images/logo.inline.svg"

const Hero = () => (
  <div className={styles.Hero}>
    <div className={styles.overlay}>
      <Languages />
      <HamburgerMenu />
      <SocialLinks />
      <PortfolioButton />
      <HeroLogo className={styles.logo} />
    </div>
  </div>
)

export default Hero
