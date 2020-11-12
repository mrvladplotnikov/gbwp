import React from "react"
import { graphql } from "gatsby"
import { useQueryParams, StringParam } from "use-query-params"
import Layout from "../../layouts/en/default"
import Contacts from "../../components/lendingSections/Contacts"
import Headline from "../../components/Headline"
import { Outer } from "../../components/Container"
import WorksList from "../../components/PortfolioWithFilters"
import boxOfDotsLink from "../../images/box-of-dots.svg"
import styles from "./styles.module.css"
import mailTo from "../../utils/mailTo"

const PortfolioBox = () => (
  <img className={styles.box} src={boxOfDotsLink} role="presentation" alt="" />
)

const Portfolio = ({ data, location }) => {
  const [filters, setFilters] = useQueryParams({
    category: StringParam,
    service: StringParam,
  })

  const handleFilterChange = (category, service) =>
    setFilters({ category, service })

  return (
    <Layout
      location={location}
      title="Portfolio"
      description="Our projects • music composing • sonic identity • sound design • voice casting. ✔ For video games, apps, animation, advertising, theatre, questrooms. Audio that works for millions of people."
    >
      <Outer>
        <Headline Tag="h1" className={styles.title}>
          Portfolio
        </Headline>
        <PortfolioBox />
        <PortfolioBox />
      </Outer>
      <WorksList
        works={data.allWordpressWpWork.works}
        filters={filters}
        onFiltersChange={handleFilterChange}
      />
      <Contacts>
        Tell us about your project, product, or idea. Ask for advice, or get a
        full{" "}
        <a
          rel="nofollow noopener noreferrer"
          target="_blank"
          href={mailTo.mail.en}
        >
          free consultation
        </a>
        . Find out the rates, clarify a vital question, well anything you want!
        We will be happy to get to know you and help.
      </Contacts>
    </Layout>
  )
}

export const query = graphql`
  query PortfolioPageEnQuery {
    allWordpressWpWork(
      filter: { polylang_current_lang: { eq: "en" } }
      sort: { fields: acf___order, order: DESC }
    ) {
      works: nodes {
        id
        slug
        title
        lang: polylang_current_lang
        category: work_category {
          value: slug
          label: name
        }
        service: work_service {
          value: slug
          label: name
        }
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`

export default Portfolio
