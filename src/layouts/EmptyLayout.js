import React from "react"
import PropTypes from "prop-types"
import { SnackbarProvider } from "react-snackbar-alert"
import { getCurrentLangKey } from "ptz-i18n"
import { StaticQuery, graphql } from "gatsby"
import { IntlProvider } from "react-intl"
import "intl"
import "normalize.css"
import SEO from "../components/seo"
import AlertProvider from "../utils/AlertProvider"

const EmptyLayout = ({
  children,
  location,
  i18nMessages,
  title,
  description,
  meta,
}) => (
  <StaticQuery
    query={graphql`
      query EmptyLayoutQuery {
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

      return (
        <IntlProvider locale={langKey} messages={i18nMessages}>
          <AlertProvider>
            <SEO
              title={title}
              description={description}
              meta={meta}
              lang={langKey}
              pathname={url}
            />
            <SnackbarProvider
              position="top"
              pauseOnHover={true}
              dismissable={false}
            >
              {children}
            </SnackbarProvider>
          </AlertProvider>
        </IntlProvider>
      )
    }}
  </StaticQuery>
)

EmptyLayout.defaultProps = {
  title: "",
  description: "",
  meta: [],
}

EmptyLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.array,
  children: PropTypes.node.isRequired,
}

export default EmptyLayout
