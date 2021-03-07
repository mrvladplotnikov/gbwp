import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"

import DefaultLayout from "../../layouts/DefaultLayout"

import { Outer, Inner } from "~components/Container"
import Headline from "~components/Headline"
import Contacts from "~components/lendingSections/Contacts"
import SectionWithText from "~components/SectionWithText"
import Why from "~components/lendingSections/Why"
import Services from "~components/lendingSections/Services"
import TeamCarousel from "~components/TeamCarousel"

import boxOfDotsLink from "../../images/icon-box.svg"

import logoWithSlogan from "../../images/logo-with-slogan.svg"
import styles from "./styles.module.css"

import mailTo from "../../utils/mailTo"
import { seoDefaultData } from "../../utils/seo"

const Box = () => (
  <img className={styles.box} src={boxOfDotsLink} role="presentation" alt="" />
)

const About = ({ data }) => {
  const { t, language } = useI18next()
  const team = data.team.members
  const { seo } = data.seoPagesData ?? { seo: seoDefaultData }
  const mailToLink = mailTo.mail[language]

  return (
    <DefaultLayout
      title={seo.title}
      disableSiteNameInTitle
      description={seo.description}
    >
      <Inner>
        <Headline Tag="h1" className={styles.title}>
          {t("aboutPageTitle")}
        </Headline>
        <Box />
        <Box />
      </Inner>
      <section className={styles.aboutSection}>
        <Outer>
          <Headline className={styles.aboutTitle} Tag="h2">
            {t("aboutPageForeword")}
          </Headline>
          <Inner className={styles.aboutContainer}>
            <div className={styles.aboutCol}>
              <p
                style={{ whiteSpace: "pre-wrap" }}
                dangerouslySetInnerHTML={{
                  __html: t("aboutPageBio", {
                    bandcampLink: "https://total-empty.bandcamp.com/",
                  }),
                }}
              />
            </div>
            <div className={styles.aboutCol}>
              <img
                className={styles.aboutImage}
                src={logoWithSlogan}
                alt="VP Production"
              />
            </div>
          </Inner>
        </Outer>
      </section>
      <section className={styles.ourTeamSection}>
        <Outer>
          <Headline Tag="h2">{t("aboutTeamTitle")}</Headline>
        </Outer>
        <Inner>
          <TeamCarousel team={team} />
        </Inner>
      </section>
      <SectionWithText style={{ backgroundColor: "#090909" }}>
        <h3>{t("aboutQuote1")}</h3>
        <h3>{t("aboutQuote2")}</h3>
        <h3>{t("aboutQuote3")}</h3>
      </SectionWithText>

      <Services />
      <Why
        title={t("aboutWhySectionTitle")}
        style={{ backgroundColor: "#000" }}
      />
      <SectionWithText
        linkLabel={t("aboutOurValuesButton")}
        link="/our-values"
        style={{ backgroundColor: "#090909" }}
      >
        <h3>{t("aboutOurValuesText")}</h3>
      </SectionWithText>
      <Contacts>
        <p
          style={{ whiteSpace: "pre-wrap" }}
          dangerouslySetInnerHTML={{
            __html: t("aboutContacts", { mailToLink }),
          }}
        />
      </Contacts>
    </DefaultLayout>
  )
}

About.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query AboutPageQuery($language: String!) {
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
      acf: { page_slug: { eq: "about" } }
    ) {
      ...seoPageData
    }
    team: allWordpressWpTeam(
      filter: { polylang_current_lang: { eq: $language } }
    ) {
      ...teamData
    }
  }
`

export default About
