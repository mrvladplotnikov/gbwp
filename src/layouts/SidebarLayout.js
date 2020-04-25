import React, { useState, useLayoutEffect } from "react"
import PropTypes from "prop-types"
import { SnackbarProvider } from "react-snackbar-alert"
import Footer from "../components/Footer"
import { Inner } from "../components/Container"
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n"
import { StaticQuery, graphql } from "gatsby"
import { IntlProvider, FormattedHTMLMessage } from "react-intl"
import HorizontalNav from "../components/HorizontalNav/HorizontalNav"
import SEO from "../components/seo"
import "intl"
import "normalize.css"
import useDetectKeyboard from "../utils/useDetectKeyboard"
import useBreakpoint from "../hooks/useBreakpoint"
import InfoBadge from "../components/InfoBadge"

const queries = {
  lg: "(min-width: 1660px)",
}

const SidebarLayout = ({
  Sidebar,
  ServiceHero,
  children,
  location,
  i18nMessages,
  title,
  description,
  meta,
}) => {
  useDetectKeyboard()
  const matchPoints = useBreakpoint(queries)
  const [isScreenLg, setIsScreenLg] = useState(true)

  useLayoutEffect(() => {
    if (matchPoints && matchPoints.lg) {
      setIsScreenLg(true)
    } else {
      setIsScreenLg(false)
    }
  }, [matchPoints])

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
                pathname={url}
                langsMenu={langsMenu}
              />
              <HorizontalNav
                langsMenu={langsMenu}
                locale={langKey}
                homeLink={homeLink}
                hideMenu
              />
              <div className="main main--sidebar">
                {isScreenLg ? (
                  <>
                    <aside className="site-sidebar">{Sidebar}</aside>
                    <div className="site-content">
                      <Inner>
                        {ServiceHero}
                        <SnackbarProvider
                          position="top"
                          pauseOnHover={true}
                          dismissable={false}
                        >
                          {children}
                        </SnackbarProvider>
                        <Footer />
                      </Inner>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="site-hero">
                      <aside className="site-sidebar">{Sidebar}</aside>
                      <Inner className="site-herocontent">{ServiceHero}</Inner>
                    </div>
                    <div className="site-content">
                      <Inner>
                        <SnackbarProvider
                          position="top"
                          pauseOnHover={true}
                          dismissable={false}
                        >
                          {children}
                        </SnackbarProvider>

                        <Footer />
                      </Inner>
                    </div>
                  </>
                )}
                <InfoBadge isOpenDefault>
                  <FormattedHTMLMessage id="work-in-progress-message" />
                </InfoBadge>
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
  ServiceHero: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
}

export default SidebarLayout
