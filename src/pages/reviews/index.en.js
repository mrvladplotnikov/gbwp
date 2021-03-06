import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { graphql } from "gatsby"
import styles from "./styles.module.css"
import Layout from "../../layouts/en/default"
import Headline from "../../components/Headline"
import ReviewCarousel from "../../components/ReviewCarousel"
import { Inner } from "../../components/Container"
import boxOfDotsLink from "../../images/icon-box.svg"
import { chunk } from "lodash/array"
import ReviewGrid from "../../components/ReviewGrid"
import { seoDefaultData } from "../../utils/seo"

const Box = ({ className = "" }) => (
  <img
    className={classNames(styles.box, className)}
    src={boxOfDotsLink}
    role="presentation"
    alt=""
  />
)

const Testimonials = ({ data, location }) => {
  const { seo } = data.seoPagesData ?? { seo: seoDefaultData }

  const testimonials = chunk(data.testimonials.nodes, 10)
  const userReviews = data.userReviews.nodes

  return (
    <Layout
      location={location}
      title={seo.title}
      disableSiteNameInTitle
      description={seo.description}
      noindex
    >
      <Inner>
        <Headline Tag="h1" className={styles.title}>
          Reviews
        </Headline>
        <Box />
        <Box />
      </Inner>
      <section>
        <Inner>
          <Headline Tag="h2" className={styles.sectionTitle}>
            Customer and partners' testimonials
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
            Listeners' reviews
          </Headline>
        </Inner>
        <ReviewGrid images={userReviews} />
      </section>
    </Layout>
  )
}

Testimonials.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query TestimonialsPageEnQuery {
    seoPagesData: wordpressWpCustomPage(
      polylang_current_lang: { eq: "en" }
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
      filter: { polylang_current_lang: { eq: "en" } }
    ) {
      ...clientReviewsList
    }
  }
`

export default Testimonials
