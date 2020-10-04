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
import { escapeHtml } from "../utils/htmlHelpers"

function SEO({
  description,
  lang,
  meta,
  title,
  pathname,
  langsMenu,
  schemaOrg,
}) {
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
      content: title
        ? `${title} | ${site.siteMetadata.title}`
        : site.siteMetadata.title,
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
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:title`,
      content: title
        ? `${title} | ${site.siteMetadata.title}`
        : site.siteMetadata.title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ].concat(meta)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={escapeHtml(title)}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      defaultTitle={site.siteMetadata.title}
      meta={metaProp}
      link={[
        {
          rel: "canonical",
          key: `${site.siteMetadata.siteUrl}${pathname.replace(/\/$/, "")}`,
          href: `${site.siteMetadata.siteUrl}${pathname.replace(/\/$/, "")}`,
        },
        ...langsMenu
          .filter(item => !item.disabled)
          .map(lang => ({
            rel: "alternate",
            hreflang: lang.langKey,
            key: lang.langKey,
            href: `${site.siteMetadata.siteUrl}${lang.link.replace(/\/$/, "")}`,
          })),
      ]}
    >
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

SEO.defaultProps = {
  meta: [],
  description: ``,
  title: ``,
  langsMenu: [],
  schemaOrg: null,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  pathname: PropTypes.string.isRequired,
  langsMenu: PropTypes.array,
  schemaOrg: PropTypes.object,
}

export default SEO
