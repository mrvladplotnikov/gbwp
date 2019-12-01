import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./styles.module.css"
import HamburgerButton from "../HamburgerButton/HamburgerButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useStaticQuery, graphql } from "gatsby"

import NestedNavItem from "./NestedNavItem"
import NavItem from "./NavItem"
import Languages from "../Languages"

const FixedNavBar = ({
  isOpen = false,
  handleOpen = () => {},
  locale = "uk",
  className = "",
  langsMenu = [],
}) => {
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
    <nav
      className={classNames(styles.menu, className, { [styles.open]: isOpen })}
    >
      <HamburgerButton isOpen={isOpen} onClick={handleOpen} />

      <ul className={styles.navigation}>
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
      <Languages className={styles.langs} langsMenu={langsMenu} />

      <ul className={styles.socialLinks}>
        {socialLinks.map((item, index) => (
          <li key={index}>
            <a
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              href={item.link}
            >
              <FontAwesomeIcon icon={["fab", item.icon]} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

FixedNavBar.propTypes = {
  isOpen: PropTypes.bool,
  handleOpen: PropTypes.func,
  locale: PropTypes.string,
  className: PropTypes.string,
}

export default FixedNavBar
