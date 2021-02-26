import React from "react"
import { useQueryParams, StringParam } from "use-query-params"
import { Trans, useI18next } from "gatsby-plugin-react-i18next"

import Contacts from "~components/lendingSections/Contacts"
import Headline from "~components/Headline"
import { Outer } from "~components/Container"
import WorksList from "~components/PortfolioWithFilters"

import DefaultLayout from "../../layouts/DefaultLayout"

import boxOfDotsLink from "../../images/box-of-dots.svg"
import styles from "./styles.module.css"

import mailTo from "../../utils/mailTo"
import { seoDefaultData } from "../../utils/seo"

const PortfolioBox = () => (
  <img className={styles.box} src={boxOfDotsLink} role="presentation" alt="" />
)

const Portfolio = ({ data }) => {
  const { language } = useI18next()
  const { seo } = data.seoPagesData ?? { seo: seoDefaultData }

  const [filters, setFilters] = useQueryParams({
    category: StringParam,
    service: StringParam,
  })

  const handleFilterChange = (category, service) =>
    setFilters({ category, service })

  return (
    <DefaultLayout
      title={seo.title}
      disableSiteNameInTitle
      description={seo.description}
    >
      <Outer>
        <Headline Tag="h1" className={styles.title}>
          <Trans i18nKey="portfolioPageTitle">Portfolio</Trans>
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
        <Trans
          i18nKey="contactText"
          components={{
            link1: (
              <a
                rel="nofollow noopener noreferrer"
                target="_blank"
                href={mailTo.mail[language]}
              />
            ),
          }}
        />
      </Contacts>
    </DefaultLayout>
  )
}

export const query = graphql`
  query PortfolioPageQuery($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    seoPagesData: wordpressWpCustomPage(
      polylang_current_lang: { eq: $language }
      acf: { page_slug: { eq: "portfolio" } }
    ) {
      ...seoPageData
    }

    allWordpressWpWork(
      filter: { polylang_current_lang: { eq: $language } }
      sort: { fields: acf___order, order: DESC }
    ) {
      ...workListItemDataWithFilters
    }
  }
`

export default Portfolio
