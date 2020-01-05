import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/seo"
import Footer from "../components/Footer"
import HorizontalNav from "../components/HorizontalNav/HorizontalNav"
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n"
import { StaticQuery, graphql } from "gatsby"
import { IntlProvider } from "react-intl"
import "intl"

const DefaultLayout = ({
  pageTitle,
  children,
  location,
  translations,
  i18nMessages,
}) => {
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
          disabled: false,
          link: item.link
            .replace("//", "/")
            .replace(`/${defaultLangKey}/`, "/"),
        }))

        const dynamicLangsMenu = langsMenu.map(item => {
          const originLangKey = getCurrentLangKey(
            langs,
            defaultLangKey,
            item.link
          )
          const originLink = item.link.substr(0, item.link.lastIndexOf("/"))

          const dynamicSlug = translations.find(
            link => link.langKey === originLangKey
          )
          if (!translations) {
            return item
          } else if (!dynamicSlug) {
            return {
              ...item,
              disabled: true,
              link: "/",
            }
          }

          return {
            ...item,
            link: `${originLink}/${dynamicSlug.slug}`,
          }
        })

        return (
          <IntlProvider locale={langKey} messages={i18nMessages}>
            <>
              <SEO title={pageTitle} />
              <HorizontalNav
                langsMenu={dynamicLangsMenu}
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
  translations: [],
}

DefaultLayout.propTypes = {
  pageTitle: PropTypes.string,
  translations: PropTypes.array,
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
