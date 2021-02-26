/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"

import { escapeHtml } from "../utils/htmlHelpers"

import metaLogo from "../images/meta-logo.jpg"

function SEO({ description, meta, title, schemaOrg, disableSiteNameInTitle }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const {
    languages,
    language,
    originalPath,
    defaultLanguage,
    siteUrl = "",
  } = useI18next()

  const createUrlWithLang = lng => {
    const url = `${siteUrl}${
      lng === defaultLanguage ? "" : `/${lng}`
    }${originalPath}`
    return url.endsWith("/") ? url : `${url}/`
  }

  const schema = schemaOrg ? schemaOrg : {}

  const metaDescription = description || site.siteMetadata.description
  /**
   * remove noindex
   */
  const metaProp = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title ? title : site.siteMetadata.title,
    },
    {
      property: `og:site_name`,
      content: site.siteMetadata.title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:image`,
      content: `${site.siteMetadata.siteUrl}${metaLogo}`,
    },
    {
      property: `og:image:width`,
      content: 500,
    },
    {
      property: `og:image:height`,
      content: 500,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:title`,
      content: title ? title : site.siteMetadata.title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ].concat(meta)

  return (
    <Helmet
      title={escapeHtml(title)}
      titleTemplate={
        !disableSiteNameInTitle ? `%s | ${site.siteMetadata.title}` : null
      }
      defaultTitle={site.siteMetadata.title}
      meta={metaProp}
    >
      <html lang={language} />
      <link rel="canonical" href={createUrlWithLang(language)} />
      {languages.map(lng => {
        const lang = lng === "uk" ? "uk-ua" : lng
        return (
          <link
            rel="alternate"
            key={lng}
            href={createUrlWithLang(lng)}
            hrefLang={lang}
          />
        )
      })}

      {/* We need this due SEO request */}
      <link
        rel="alternate"
        href={createUrlWithLang("en")}
        hrefLang="x-default"
      />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

SEO.defaultProps = {
  meta: [],
  description: ``,
  title: ``,
  schemaOrg: null,
  disableSiteNameInTitle: false,
}

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  schemaOrg: PropTypes.object,
  disableSiteNameInTitle: PropTypes.bool,
}

export default SEO
