import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import Footer from "../components/Footer"
import { Inner } from "../components/Container"
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n"
import { StaticQuery, graphql } from "gatsby"
import { IntlProvider } from "react-intl"
import HorizontalNav from "../components/HorizontalNav/HorizontalNav"
import "intl"
import "normalize.css"

const SidebarLayout = ({
  pageTitle,
  Sidebar,
  children,
  location,
  i18nMessages,
}) => {
  return (
    <StaticQuery
      query={graphql`
        query SidebarLayoutQuery {
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
      render={data => {
        const url = location.pathname
        const { langs, defaultLangKey } = data.site.siteMetadata.languages
        const langKey = getCurrentLangKey(langs, defaultLangKey, url)
        const homeLink = `/${langKey}`.replace(`/${defaultLangKey}`, "/")
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
              <HorizontalNav
                langsMenu={langsMenu}
                locale={langKey}
                homeLink={homeLink}
                hideMenu
              />
              <div className="main main--sidebar">
                <SEO title={pageTitle} />
                <aside className="site-sidebar">{Sidebar}</aside>
                <div className="site-content">
                  <Inner>
                    {children}
                    <Footer />
                  </Inner>
                </div>
              </div>
            </>
          </IntlProvider>
        )
      }}
    />
  )
}

SidebarLayout.defaultProps = {
  pageTitle: "",
}

SidebarLayout.propTypes = {
  pageTitle: PropTypes.string,
  Sidebar: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
}

export default SidebarLayout
