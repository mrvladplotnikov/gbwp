import React, { useState } from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import { useStaticQuery, Link } from "gatsby"
import { graphql } from "gatsby"
import IMG from "gatsby-image"
import NestedNavItem from "./NestedNavItem"
import NavItem from "./NavItem"
import LangSelect from "../LangSelect"
import HamburgerButton from "../HamburgerButton"
import FixedNavBar from "../FixedNavBar"

const HorizontalNav = ({
  langsMenu = [],
  locale = "uk",
  homeLink = "/",
  hideMenu = false,
}) => {
  const {
    logo,
    site: {
      siteMetadata: { navMenu },
    },
  } = useStaticQuery(graphql`
    query getSiteData {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 54, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          navMenu {
            link {
              uk
              ru
              en
            }
            child {
              link {
                uk
                ru
                en
              }
              label {
                uk
                ru
                en
              }
            }
            label {
              uk
              ru
              en
            }
          }
        }
      }
    }
  `)

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const handleMenuToogle = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <header
      className={styles.container}
      style={
        hideMenu
          ? {
              backgroundColor: "transparent",
            }
          : null
      }
    >
      <Link className={styles.logo} to={homeLink}>
        <IMG fluid={logo.childImageSharp.fluid} alt="VP Production logo" />
      </Link>
      {!hideMenu ? (
        <>
          <nav className={styles.nav}>
            <ul>
              {navMenu.map((item, index) => {
                if (item.child) {
                  return (
                    <NestedNavItem
                      key={index}
                      label={item.label[locale]}
                      child={item.child}
                      locale={locale}
                    />
                  )
                }

                return (
                  <NavItem
                    key={index}
                    label={item.label[locale]}
                    link={item.link[locale]}
                  />
                )
              })}
            </ul>
          </nav>
          <LangSelect langsMenu={langsMenu} />
          <HamburgerButton
            isOpen={menuIsOpen}
            onClick={handleMenuToogle}
            className={styles.menuButton}
          />
          <FixedNavBar
            isOpen={menuIsOpen}
            handleOpen={handleMenuToogle}
            langsMenu={langsMenu}
          />
        </>
      ) : (
        <>
          <HamburgerButton isOpen={menuIsOpen} onClick={handleMenuToogle} />
          <FixedNavBar
            isOpen={menuIsOpen}
            handleOpen={handleMenuToogle}
            langsMenu={langsMenu}
          />
        </>
      )}
    </header>
  )
}

HorizontalNav.propTypes = {
  langsMenu: PropTypes.array,
  locale: PropTypes.string,
  homeLink: PropTypes.string,
  hideMenu: PropTypes.bool,
}

export default HorizontalNav
