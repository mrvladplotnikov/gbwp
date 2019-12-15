import React from "react"
import { graphql } from "gatsby"
import Layout from "../../layouts/uk/home"
import Contacts from "../../components/lendingSections/Contacts"

const Portfolio = ({ data, location }) => {
  return (
    <Layout location={location}>
      <Contacts />
    </Layout>
  )
}

export const query = graphql`
  query PortfolioPageUkQuery {
    works: allWordpressWpWork(
      limit: 10
      filter: { polylang_current_lang: { eq: "uk" } }
    ) {
      nodes {
        id
        slug
        title
        lang: polylang_current_lang
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 249, srcSetBreakpoints: [445, 900], quality: 95) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default Portfolio
