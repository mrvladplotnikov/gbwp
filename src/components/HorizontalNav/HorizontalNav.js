import React, { useState } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby"
import IMG from "gatsby-image"
import NestedNavItem from "./NestedNavItem"
import NavItem from "./NavItem"
import LangSelect from "../LangSelect"
import HamburgerButton from "../HamburgerButton"
import NavigationDrawer from "../NavigationDrawer"

const HorizontalNav = ({ hideMenu = false, className = "" }) => {
  const { language, siteUrl } = useI18next()

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
      className={classNames(styles.container, className)}
      style={
        hideMenu
          ? {
              backgroundColor: "transparent",
            }
          : null
      }
    >
      <Link className={styles.logo} to="/" language={language}>
        <IMG
          fadeIn={false}
          loading="eager"
          fluid={logo.childImageSharp.fluid}
          alt="VP Production"
        />
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
                      label={item.label[language]}
                      child={item.child}
                      locale={language}
                    />
                  )
                }

                return (
                  <NavItem
                    key={index}
                    label={item.label[language]}
                    link={item.link[language]}
                  />
                )
              })}
            </ul>
          </nav>
          <LangSelect className={styles.langsSelect} />
          <HamburgerButton
            isOpen={menuIsOpen}
            onClick={handleMenuToogle}
            className={styles.menuButton}
          />
          <NavigationDrawer
            isOpen={menuIsOpen}
            handleOpen={handleMenuToogle}
            locale={language}
          />
        </>
      ) : (
        <>
          <HamburgerButton isOpen={menuIsOpen} onClick={handleMenuToogle} />
          <NavigationDrawer
            isOpen={menuIsOpen}
            handleOpen={handleMenuToogle}
            locale={language}
          />
        </>
      )}
    </header>
  )
}

HorizontalNav.propTypes = {
  locale: PropTypes.string,
  homeLink: PropTypes.string,
  hideMenu: PropTypes.bool,
  className: PropTypes.string,
}

export default HorizontalNav
