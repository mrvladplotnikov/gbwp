import React, { useState } from "react"
import classNames from "classnames"
import { graphql } from "gatsby"
import { Trans, useI18next, Link } from "gatsby-plugin-react-i18next"

import DefaultLayout from "../../layouts/DefaultLayout"

import Contacts from "~components/lendingSections/Contacts"
import Headline from "~components/Headline"
import { Inner } from "~components/Container"
import StyledAccordion from "~components/StyledAccordion"
import StyledAccordionItem from "~components/StyledAccordionItem"
import ModalContactForm from "~components/ModalContactForm"
import InlineButton from "~components/InlineButton"

import { seoDefaultData } from "../../utils/seo"
import boxOfDotsLink from "../../images/icon-box.svg"
import mailTo from "../../utils/mailTo"

import schemaOrg from "./schemaOrg.json"
import styles from "./styles.module.css"

const Boxes = ({ className = "" }) => (
  <img
    className={classNames(styles.box, className)}
    src={boxOfDotsLink}
    role="presentation"
    alt=""
  />
)

const FaqSection = ({ title = "", questions = [], ...props }) => {
  return (
    <>
      <Headline Tag="h2" className={styles.subtitle}>
        {title}
      </Headline>
      <StyledAccordion className={styles.accordeon}>
        {questions.map((q, i) => (
          <StyledAccordionItem key={i} title={q.title}>
            <p
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{ __html: q.content }}
            />
          </StyledAccordionItem>
        ))}
      </StyledAccordion>
    </>
  )
}

const buildLink = (defaultLanguage, language, link) => {
  if (defaultLanguage === language) return link

  return `/${language}${link}`
}

const Faq = ({ data, location }) => {
  const { language, t, defaultLanguage } = useI18next()
  const contactEmail = data.site.siteMetadata.adminEmail
  const { seo } = data.seoPagesData ?? { seo: seoDefaultData }

  const templateLink = mailTo.mail[language]
  const emailLink = `mailto:${contactEmail}`
  const musicComposingLink = buildLink(
    defaultLanguage,
    language,
    "/services/music-composing"
  )
  const soundDesignLink = buildLink(
    defaultLanguage,
    language,
    "/services/sound-design"
  )
  const audioBrandingLink = buildLink(
    defaultLanguage,
    language,
    "/services/audio-branding"
  )
  const voiceCastingLink = buildLink(
    defaultLanguage,
    language,
    "/services/voice-casting"
  )

  return (
    <DefaultLayout
      title={seo.title}
      disableSiteNameInTitle
      description={seo.description}
      schemaOrg={schemaOrg[language]}
    >
      <Inner>
        <Headline Tag="h1" className={styles.title}>
          {t("faqPageTitle", {
            defaultValue: "Faq",
          })}
        </Headline>

        <Boxes className={styles.boxFirst} />

        <Boxes className={styles.boxSecond} />

        <FaqSection
          {...t("faqSec1", {
            returnObjects: true,
            templateLink,
            emailLink,
            musicComposingLink,
            soundDesignLink,
            audioBrandingLink,
            voiceCastingLink,
          })}
        />

        <FaqSection
          {...t("faqSec2", {
            returnObjects: true,
          })}
        />

        <FaqSection
          {...t("faqSec3", {
            returnObjects: true,
          })}
        />

        <Contacts>
          {t("faqPageContactText", {
            defaultValue:
              "Did not find the answer to an essential question for you? Don'thesitate to ask us directly, and we will be happy to help you.",
          })}
        </Contacts>
      </Inner>
    </DefaultLayout>
  )
}

export const query = graphql`
  query FAQPageQuery($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    site {
      siteMetadata {
        adminEmail
      }
    }
    seoPagesData: wordpressWpCustomPage(
      polylang_current_lang: { eq: $language }
      acf: { page_slug: { eq: "faq" } }
    ) {
      ...seoPageData
    }
  }
`

export default Faq
