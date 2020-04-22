import React, { useState } from "react"
import PropTypes from "prop-types"
import Footer from "../components/Footer"
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n"
import { StaticQuery, graphql } from "gatsby"
import { SnackbarProvider } from "react-snackbar-alert"
import { IntlProvider, FormattedHTMLMessage } from "react-intl"
import Languages from "../components/Languages"
import HamburgerButton from "../components/HamburgerButton"
import NavigationDrawer from "../components/NavigationDrawer"
import HorizontalNav from "../components/HorizontalNav/HorizontalNav"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import "intl"
import "normalize.css"
import SEO from "../components/seo"
import useDetectKeyboard from "../utils/useDetectKeyboard"
import InfoBadge from "../components/InfoBadge"

const HomeLayout = ({ children, location, i18nMessages }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const handleMenuToogle = () => {
    setMenuIsOpen(!menuIsOpen)
  }
  const [hideOnScroll, setHideOnScroll] = useState(false)

  useDetectKeyboard()

  useScrollPosition(
    ({ currPos }) => {
      const isShow = currPos.y <= -768
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll],
    false,
    false,
    300
  )

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
              <SEO lang={langKey} />
              {!hideOnScroll ? (
                <>
                  <Languages langsMenu={langsMenu} />
                  <HamburgerButton
                    isOpen={menuIsOpen}
                    onClick={handleMenuToogle}
                    fixed
                  />
                  <NavigationDrawer
                    isOpen={menuIsOpen}
                    handleOpen={handleMenuToogle}
                    locale={langKey}
                    langsMenu={langsMenu}
                  />{" "}
                </>
              ) : (
                <HorizontalNav
                  langsMenu={langsMenu}
                  locale={langKey}
                  homeLink={homeLink.replace("/uk", "/")}
                />
              )}
              <SnackbarProvider
                position="top"
                pauseOnHover={true}
                dismissable={false}
              >
                {children}
              </SnackbarProvider>
              <Footer />
              <InfoBadge isOpenDefault>
                <FormattedHTMLMessage id="work-in-progress-message" />
              </InfoBadge>
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
