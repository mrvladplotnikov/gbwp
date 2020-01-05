import React from "react"
import { graphql } from "gatsby"
import Layout from "../../layouts/uk/default"
import Contacts from "../../components/lendingSections/Contacts"
import Headline from "../../components/Headline"
import { Outer } from "../../components/Container"
import WorksList from "../../components/PortfolioWithFilters"
import boxOfDotsLink from "../../images/box-of-dots.svg"
import styles from "./styles.module.css"

const PortfolioBox = () => (
  <img className={styles.box} src={boxOfDotsLink} role="presentation" alt="" />
)

const Portfolio = ({ data, location }) => {
  const filterOptions = {
    ...data.allWordpressWpWorkCategory,
    ...data.allWordpressWpWorkService,
  }

  return (
    <Layout location={location}>
      <Outer>
        <Headline Tag="h1" className={styles.title}>
          Портфолiо
        </Headline>
        <PortfolioBox />
        <PortfolioBox />
      </Outer>
      <WorksList
        filterOptions={filterOptions}
        filteredWorks={data.allWordpressWpWork.filteredWorks}
      />
      <Contacts />
    </Layout>
  )
}

export const query = graphql`
  query PortfolioPageUkQuery {
    allWordpressWpWorkCategory(
      filter: { polylang_current_lang: { eq: "uk" } }
    ) {
      categoryOptions: nodes {
        value: wordpress_id
        label: name
      }
    }

    allWordpressWpWorkService(filter: { polylang_current_lang: { eq: "uk" } }) {
      serviceOptions: nodes {
        value: wordpress_id
        label: name
      }
    }

    allWordpressWpWork(
      limit: 10
      filter: { polylang_current_lang: { eq: "uk" } }
    ) {
      filteredWorks: nodes {
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
