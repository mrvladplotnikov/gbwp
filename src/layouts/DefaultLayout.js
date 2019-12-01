import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import Footer from "../components/Footer"
import HorizontalNav from "../components/HorizontalNav/HorizontalNav"
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n"
import { StaticQuery, graphql } from "gatsby"
import { IntlProvider } from "react-intl"
import "intl"
import "./styles.css"

const DefaultLayout = ({ pageTitle, children, location, i18nMessages }) => {
  return (
    <StaticQuery
      query={graphql`
        query DefaultLayoutQuery {
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
        const homeLink = `/${langKey}`.replace(`/${defaultLangKey}`, "/")

        const langsMenu = getLangs(
          langs,
          langKey,
          getUrlForLang(homeLink, url)
        ).map(item => ({
          ...item,
          link: item.link.replace(`/${defaultLangKey}/`, "").replace(`//`, "/"),
        }))

        return (
          <IntlProvider locale={langKey} messages={i18nMessages}>
            <>
              <SEO title={pageTitle} />
              <HorizontalNav
                langsMenu={langsMenu}
                locale={langKey}
                homeLink={homeLink}
              />
              {children}
              <Footer />
            </>
          </IntlProvider>
        )
      }}
    </StaticQuery>
  )
}

DefaultLayout.defaultProps = {
  pageTitle: "",
}

DefaultLayout.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
