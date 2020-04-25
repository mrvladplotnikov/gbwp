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

function SEO({ description, lang, meta, title, pathname, langsMenu }) {
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

  const metaDescription = description || site.siteMetadata.description

  const metaProp = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
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
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
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
        ...langsMenu.map(lang => ({
          rel: "alternate",
          hreflang: lang.langKey,
          key: lang.langKey,
          href: `${site.siteMetadata.siteUrl}${lang.link.replace(/\/$/, "")}`,
        })),
      ]}
    />
  )
}

SEO.defaultProps = {
  meta: [],
  description: ``,
  title: ``,
  langsMenu: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  pathname: PropTypes.string.isRequired,
  langsMenu: PropTypes.array,
}

export default SEO
