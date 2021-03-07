import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { graphql } from "gatsby"
import { chunk } from "lodash/array"
import { useI18next } from "gatsby-plugin-react-i18next"

import DefaultLayout from "../../layouts/DefaultLayout"

import Headline from "~components/Headline"
import ReviewCarousel from "~components/ReviewCarousel"
import { Inner } from "~components/Container"
import ReviewGrid from "~components/ReviewGrid"

import styles from "./styles.module.css"
import { seoDefaultData } from "../../utils/seo"
import boxOfDotsLink from "../../images/icon-box.svg"

const Box = ({ className = "" }) => (
  <img
    className={classNames(styles.box, className)}
    src={boxOfDotsLink}
    role="presentation"
    alt=""
  />
)

const Testimonials = ({ data }) => {
  const { t } = useI18next()
  const { seo } = data.seoPagesData ?? { seo: seoDefaultData }

  const testimonials = chunk(data.testimonials.nodes, 10)
  const userReviews = data.userReviews.nodes

  return (
    <DefaultLayout
      title={seo.title}
      disableSiteNameInTitle
      description={seo.description}
      noindex
    >
      <Inner>
        <Headline Tag="h1" className={styles.title}>
          {t("reviewsPageTitle")}
        </Headline>
        <Box />
        <Box />
      </Inner>
      <section>
        <Inner>
          <Headline Tag="h2" className={styles.sectionTitle}>
            {t("customerReviewsTitle")}
          </Headline>
          {testimonials.map((node, index) => (
            <ReviewCarousel
              id={`review-carousel-${index}`}
              key={index}
              reviews={node}
              responsive={{ 0: { items: 1 }, 767: { items: 2 } }}
              classes={{ review: styles.review, meta: styles.meta }}
            />
          ))}
          <Headline Tag="h2" className={styles.sectionTitle}>
            {t("usersReviewsTitle")}
          </Headline>
        </Inner>
        <ReviewGrid images={userReviews} />
      </section>
    </DefaultLayout>
  )
}

Testimonials.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query TestimonialsPageQuery($language: String!) {
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
      acf: { page_slug: { eq: "reviews" } }
    ) {
      ...seoPageData
    }
    userReviews: allFile(
      filter: { relativeDirectory: { eq: "user-reviews" } }
      sort: { fields: changeTime, order: DESC }
    ) {
      ...userReviewsList
    }
    testimonials: allWordpressWpClientReview(
      filter: { polylang_current_lang: { eq: $language } }
    ) {
      ...clientReviewsList
    }
  }
`

export default Testimonials
