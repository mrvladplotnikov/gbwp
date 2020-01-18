import React from "react"
import { graphql } from "gatsby"
import Layout from "../../layouts/ru/default"
import Contacts from "../../components/lendingSections/Contacts"
import Headline from "../../components/Headline"
import { Outer } from "../../components/Container"
import WorksList from "../../components/PortfolioWithFilters"
import boxOfDotsLink from "../../images/box-of-dots.svg"
import styles from "./styles.module.css"

const PortfolioBox = () => (
  <img className={styles.box} src={boxOfDotsLink} role="presentation" alt="" />
)

const Portfolio = ({ data, location }) => (
  <Layout location={location} title="Портфолио">
    <Outer>
      <Headline Tag="h1" className={styles.title}>
        Портфолио
      </Headline>
      <PortfolioBox />
      <PortfolioBox />
    </Outer>
    <WorksList works={data.allWordpressWpWork.works} />
    <Contacts />
  </Layout>
)

export const query = graphql`
  query PortfolioPageRuQuery {
    allWordpressWpWork(filter: { polylang_current_lang: { eq: "ru" } }) {
      works: nodes {
        id
        slug
        title
        lang: polylang_current_lang
        category: work_category {
          value: wordpress_id
          label: name
        }
        service: work_service {
          value: wordpress_id
          label: name
        }
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
