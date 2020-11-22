import React from "react"
import { graphql } from "gatsby"
import { useQueryParams, StringParam } from "use-query-params"
import Layout from "../../layouts/uk/default"
import Headline from "../../components/Headline"
import { Outer } from "../../components/Container"
import WorksList from "../../components/PortfolioWithFilters"
import boxOfDotsLink from "../../images/box-of-dots.svg"
import Contacts from "../../components/lendingSections/Contacts"

import mailTo from "../../utils/mailTo"

import styles from "./styles.module.css"
import { seoDefaultData } from "../../utils/seo"

const PortfolioBox = () => (
  <img className={styles.box} src={boxOfDotsLink} role="presentation" alt="" />
)

const Portfolio = ({ data, location }) => {
  const { seo } = data.seoPagesData ?? { seo: seoDefaultData }

  const [filters, setFilters] = useQueryParams({
    category: StringParam,
    service: StringParam,
  })

  const handleFilterChange = (category, service) =>
    setFilters({ category, service })

  return (
    <Layout
      location={location}
      title={seo.title}
      disableSiteNameInTitle
      description={seo.description}
    >
      <Outer>
        <Headline Tag="h1" className={styles.title}>
          Портфолiо
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
        Розкажіть нам про свій проєкт, продукт або ідею. Запитайте пораду або
        отримайте повноцінну{" "}
        <a
          rel="nofollow noopener noreferrer"
          target="_blank"
          href={mailTo.mail.uk}
        >
          безплатну консультацію
        </a>
        . Дізнайтеся вартість, уточніть важливе питання, та що завгодно! Ми
        будемо раді з вами познайомитися й допомогти.
      </Contacts>
    </Layout>
  )
}

export const query = graphql`
  query PortfolioPageUkQuery {
    seoPagesData: wordpressWpCustomPage(
      polylang_current_lang: { eq: "uk" }
      acf: { page_slug: { eq: "portfolio" } }
    ) {
      ...seoPageData
    }

    allWordpressWpWork(
      filter: { polylang_current_lang: { eq: "uk" } }
      sort: { fields: acf___order, order: DESC }
    ) {
      ...workListItemDataWithFilters
    }
  }
`

export default Portfolio
