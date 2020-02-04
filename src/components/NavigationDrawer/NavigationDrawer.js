import React, { useRef } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { CSSTransition } from "react-transition-group"
import HamburgerButton from "../HamburgerButton/HamburgerButton"
import { useStaticQuery, graphql } from "gatsby"
import Languages from "../Languages"
import useOutsideClick from "../../hooks/useOutsideClick"
import SocialLinks from "./SocialLinks"
import List from "./List"

const NavigationDrawer = ({
  isOpen = true,
  handleOpen = () => {},
  locale = "uk",
  className = "",
  langsMenu = [],
}) => {
  const drawerRef = useRef()

  useOutsideClick(drawerRef, () => {
    if (isOpen) handleOpen()
  })

  const {
    site: {
      siteMetadata: { socialLinks, navMenu },
    },
  } = useStaticQuery(
    graphql`
      query {
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
            socialLinks {
              name
              link
              icon
            }
          }
        }
      }
    `
  )

  return (
    <CSSTransition in={isOpen} timeout={300} classNames="drawer" unmountOnExit>
      <nav
        ref={drawerRef}
        className={classNames("NavigationDrawer", className)}
      >
        <HamburgerButton isOpen={isOpen} onClick={handleOpen} />
        <List navMenu={navMenu} locale={locale} />
        <Languages className="NavigationDrawer__langs" langsMenu={langsMenu} />
        <SocialLinks socialLinks={socialLinks} />
      </nav>
    </CSSTransition>
  )
}

NavigationDrawer.propTypes = {
  isOpen: PropTypes.bool,
  handleOpen: PropTypes.func,
  locale: PropTypes.string,
  className: PropTypes.string,
}

export default NavigationDrawer
 