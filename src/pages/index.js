import React from "react"
import { useTranslation, Trans, useI18next } from "gatsby-plugin-react-i18next"

import HomeLayout from "../layouts/HomeLayout"

import Hero from "~components/lendingSections/Hero"
import About from "~components/lendingSections/About"
import Why from "~components/lendingSections/Why"
import Services from "~components/lendingSections/Services"
import ChosenWorks from "~components/lendingSections/ChosenWorks"
import SectionWithText from "~components/SectionWithText"
import Contacts from "~components/lendingSections/Contacts"

import mailTo from "../utils/mailTo"
import { seoDefaultData } from "../utils/seo"

const IndexPage = ({ data }) => {
  const { t } = useTranslation()
  const { language } = useI18next()

  const works = data.works.nodes
  const { seo } = data.seoPagesData ?? { seo: seoDefaultData }

  return (
    <HomeLayout
      title={seo.title}
      description={seo.description}
      disableSiteNameInTitle
    >
      <Hero link="/portfolio" />
      <About
        title={t("aboutTitle")}
        alt={t("aboutAlt")}
        text={t("aboutText")}
        linkLabel={t("aboutLinkLabel")}
        linkURL="/about"
      />
      <Why />
      <Services />
      <ChosenWorks
        title={t("chosenWorksTitle", { defaultValue: "Featured Works" })}
        works={works}
        linkLabel={t("chosenWorksLabel", { defaultValue: "Portfolio" })}
        linkURL="/portfolio"
      />
      <SectionWithText
        linkLabel={t("ourValuesLinkLabel", { defaultValue: "Our values" })}
        link="/our-values"
      >
        <h3>
          <Trans i18nKey="ourValuesText">
            Using audio, we inspire listeners on both sides of audiovisual
            projects to live new experiences and discover their creative
            potential.
          </Trans>
        </h3>
      </SectionWithText>
      <Contacts>
        <Trans
          i18nKey="contactText"
          defaultValue="Tell us about your project, product, or idea. Ask for advice, or get a
            full <link1>free consultation</link1>. Find out the rates, clarify a vital question, well anything you
            want! We will be happy to get to know you and help."
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
    </HomeLayout>
  )
}

export default IndexPage

export const query = graphql`
  query HomePageQuery($language: String!) {
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
      acf: { page_slug: { eq: "home" } }
    ) {
      ...seoPageData
    }
    works: allWordpressWpWork(
      filter: {
        acf: { front_page: { front_page_visibility: { eq: true } } }
        polylang_current_lang: { eq: $language }
      }
      sort: { fields: acf___front_page___front_page_order, order: DESC }
    ) {
      ...workListItemData
    }
  }
`
