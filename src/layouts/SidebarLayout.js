import React from "react"
import PropTypes from "prop-types"
import Footer from "../components/Footer"
import { Inner } from "../components/Container"
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n"
import { StaticQuery, graphql } from "gatsby"
import { IntlProvider } from "react-intl"
import HorizontalNav from "../components/HorizontalNav/HorizontalNav"
import SEO from "../components/seo"
import "intl"
import "normalize.css"

const SidebarLayout = ({
  Sidebar,
  children,
  location,
  i18nMessages,
  title,
  description,
  meta,
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
              <SEO
                title={title}
                description={description}
                meta={meta}
                lang={langKey}
              />
              <HorizontalNav
                langsMenu={langsMenu}
                locale={langKey}
                homeLink={homeLink}
                hideMenu
              />
              <div className="main main--sidebar">
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
  title: "",
  description: "",
  meta: [],
}

SidebarLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.array,
  Sidebar: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
}

export default SidebarLayout
