import React from "react"
import { graphql } from "gatsby"
import { useQueryParams, StringParam } from "use-query-params"
import Layout from "../../layouts/ru/default"
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
      title="Портфолио"
      description="Наши проекты по созданию • музыки • аудио брендов • звукового дизайна • голосового озвучивания. ✔ Игры, приложения, анимация, реклама, театр, квеструмы. Аудио, которое работает на миллионные аудитории."
    >
      <Outer>
        <Headline Tag="h1" className={styles.title}>
          Портфолио
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
        Расскажите нам о своём проекте, продукте или идее. Спросите совет или
        получите полноценную{" "}
        <a
          rel="nofollow noopener noreferrer"
          target="_blank"
          href={mailTo.mail.ru}
        >
          бесплатную консультацию
        </a>
        . Узнайте цены, уточните важный вопрос, да что угодно! Мы будем рады с
        вами познакомиться и помочь.
      </Contacts>
    </Layout>
  )
}

export const query = graphql`
  query PortfolioPageRuQuery {
    allWordpressWpWork(
      filter: { polylang_current_lang: { eq: "ru" } }
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
