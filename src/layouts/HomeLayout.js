import React, { useState } from "react"
import PropTypes from "prop-types"
import "./styles.css"
import SEO from "../components/seo"
import Footer from "../components/Footer"
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n"
import { StaticQuery, graphql } from "gatsby"
import { IntlProvider } from "react-intl"
import "intl"
import Languages from "../components/Languages"
import HamburgerButton from "../components/HamburgerButton"
import FixedNavBar from "../components/FixedNavBar"

const HomeLayout = ({ pageTitle, children, location, i18nMessages }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const handleMenuToogle = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <StaticQuery
      query={graphql`
        query HomeLayoutQuery {
          site {
            siteMetadata {
              languages {
                defaultLangKey
                langs
              }
            }
          }
        }
      `}
    >
      {data => {
        const url = location.pathname
        const { langs, defaultLangKey } = data.site.siteMetadata.languages
        const langKey = getCurrentLangKey(langs, defaultLangKey, url)
        const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, "/")
        const langsMenu = getLangs(
          langs,
          langKey,
          getUrlForLang(homeLink, url)
        ).map(item => ({
          ...item,
          link: item.link
            .replace("//", "/")
            .replace(`/${defaultLangKey}/`, "/"),
        }))
        return (
          <IntlProvider locale={langKey} messages={i18nMessages}>
            <>
              <Languages langsMenu={langsMenu} />
              <HamburgerButton isOpen={menuIsOpen} onClick={handleMenuToogle} />
              <FixedNavBar
                isOpen={menuIsOpen}
                handleOpen={handleMenuToogle}
                locale={langKey}
                langsMenu={langsMenu}
              />
              <SEO title={pageTitle} />
              {children}
              <Footer />
            </>
          </IntlProvider>
        )
      }}
    </StaticQuery>
  )
}

HomeLayout.defaultProps = {
  pageTitle: "",
}

HomeLayout.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default HomeLayout
