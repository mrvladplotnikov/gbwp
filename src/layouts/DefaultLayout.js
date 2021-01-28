import React from "react"
import PropTypes from "prop-types"
import { SnackbarProvider } from "react-snackbar-alert"
import Footer from "../components/Footer"
import HorizontalNav from "../components/HorizontalNav/HorizontalNav"
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n"
import { StaticQuery, graphql } from "gatsby"
import { IntlProvider } from "react-intl"
import "intl"
import "normalize.css"
import SEO from "../components/seo"
import useDetectKeyboard from "../utils/useDetectKeyboard"
import AlertProvider from "../utils/AlertProvider"

const DefaultLayout = ({
  children,
  location,
  translations,
  i18nMessages,
  title,
  description,
  meta,
  noindex = false,
  schemaOrg,
  disableSiteNameInTitle = false,
}) => {
  useDetectKeyboard()
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
            <AlertProvider>
              <SEO
                title={title}
                description={description}
                schemaOrg={schemaOrg}
                meta={
                  noindex
                    ? meta.concat([{ name: "robots", content: "noindex" }])
                    : meta
                }
                lang={langKey}
                pathname={url}
                langsMenu={
                  translations && translations.length > 0
                    ? dynamicLangsMenu
                    : langsMenu
                }
                disableSiteNameInTitle={disableSiteNameInTitle}
              />
              <HorizontalNav
                langsMenu={
                  translations && translations.length > 0
                    ? dynamicLangsMenu
                    : langsMenu
                }
                locale={langKey}
                homeLink={homeLink}
              />
              <SnackbarProvider
                position="top"
                pauseOnHover={true}
                dismissable={false}
              >
                {children}
              </SnackbarProvider>
              <Footer />
            </AlertProvider>
          </IntlProvider>
        )
      }}
    </StaticQuery>
  )
}

DefaultLayout.defaultProps = {
  title: "",
  description: "",
  meta: [],
  translations: [],
  schemaOrg: null,
}

DefaultLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.array,
  translations: PropTypes.array,
  children: PropTypes.node.isRequired,
  schemaOrg: PropTypes.object,
}

export default DefaultLayout
