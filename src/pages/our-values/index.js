import React from "react"
import classNames from "classnames"
import { graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"

import DefaultLayout from "../../layouts/DefaultLayout"

import Headline from "~components/Headline"
import { Inner } from "~components/Container"

import { seoDefaultData } from "../../utils/seo"

import styles from "./styles.module.css"

const OurValues = ({ data }) => {
  const { t } = useI18next()
  const { seo } = data.seoPagesData ?? { seo: seoDefaultData }

  return (
    <DefaultLayout
      title={seo.title}
      disableSiteNameInTitle
      description={seo.description}
      noindex
    >
      <div className={styles.container}>
        <div className={classNames(styles.module, styles.rectImg)}>
          <Inner>
            <Headline Tag="h2" className={styles.largeText}>
              {t("our-values-s1-p1", { defaultValue: "Our values." })}
            </Headline>
            <Headline Tag="h2" className={styles.largeText}>
              {t("our-values-s1-p2", { defaultValue: "Our beliefs." })}
            </Headline>
            <Headline Tag="h2" className={styles.largeText}>
              {t("our-values-s1-p3", { defaultValue: "Our manifesto." })}
            </Headline>
          </Inner>
        </div>

        <div className={classNames(styles.module, styles.pseudoImg)}>
          <Inner>
            <h5 className={styles.text}>
              {t("our-values-s2-p1", {
                defaultValue:
                  "We believe that sound is a natural way of communication, and we only give it the shape and vector it needs.",
              })}
            </h5>
          </Inner>
        </div>

        <div className={styles.module}>
          <Inner>
            <h5 className={styles.text}>
              {t("our-values-s3-p1", {
                defaultValue:
                  "We believe that music is one of the most significant forms of art and deserves respect.",
              })}
            </h5>
          </Inner>
        </div>

        <div className={styles.module}>
          <Inner>
            <h5 className={styles.text}>
              {t("our-values-s4-p1", {
                defaultValue:
                  "We believe in the power of open, sincere communication.",
              })}
            </h5>
          </Inner>
        </div>

        <div className={styles.module}>
          <Inner>
            <h5 className={styles.text}>
              {t("our-values-s5-p1", {
                defaultValue: "We value people and human relationships.",
              })}
            </h5>
          </Inner>
        </div>

        <div className={styles.module}>
          <Inner>
            <h5 className={styles.text}>
              {t("our-values-s6-p1", {
                defaultValue:
                  "We know that each of us is capable of changing the world, but only together can we truly make a difference.",
              })}
            </h5>
          </Inner>
        </div>
      </div>
    </DefaultLayout>
  )
}

export const query = graphql`
  query OurValuesPageQuery($language: String!) {
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
      acf: { page_slug: { eq: "our-values" } }
    ) {
      ...seoPageData
    }
  }
`

export default OurValues
