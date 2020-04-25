import React from "react"
import { graphql } from "gatsby"
import Layout from "../../layouts/uk/default"
import Headline from "../../components/Headline"
import { Outer } from "../../components/Container"
import WorksList from "../../components/PortfolioWithFilters"
import boxOfDotsLink from "../../images/box-of-dots.svg"
import styles from "./styles.module.css"
import mailTo from "../../utils/mailTo"
import Contacts from "../../components/lendingSections/Contacts"

const PortfolioBox = () => (
  <img className={styles.box} src={boxOfDotsLink} role="presentation" alt="" />
)

const Portfolio = ({ data, location }) => (
  <Layout location={location} title="Портфолiо">
    <Outer>
      <Headline Tag="h1" className={styles.title}>
        Портфолiо
      </Headline>
      <PortfolioBox />
      <PortfolioBox />
    </Outer>
    <WorksList works={data.allWordpressWpWork.works} />
    <Contacts>
      Розкажіть нам про свій проєкт, продукт або ідею. Запитайте пораду або
      отримайте повноцінну{" "}
      <a rel="noopener noreferrer" target="_blank" href={mailTo.mail.uk}>
        безплатну консультацію
      </a>
      . Дізнайтеся вартість, уточніть важливе питання, та що завгодно! Ми будемо
      раді з вами познайомитися й допомогти.
    </Contacts>
  </Layout>
)

export const query = graphql`
  query PortfolioPageUkQuery {
    allWordpressWpWork(
      filter: { polylang_current_lang: { eq: "uk" } }
      sort: { fields: acf___order, order: DESC }
    ) {
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
              fluid(maxWidth: 500, quality: 100) {
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
