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

const Box = ({ className = "" }) => (
  <img
    className={classNames(styles.box, className)}
    src={boxOfDotsLink}
    role="presentation"
    alt=""
  />
)

const Testimonials = ({ data, location }) => {
  const testimonials = chunk(data.testimonials.nodes, 10)
  const userReviews = data.userReviews.nodes

  return (
    <Layout location={location} title="Reviews">
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
            Customer reviews
          </Headline>
          {testimonials.map((node, index) => (
            <ReviewCarousel
              key={index}
              reviews={node}
              responsive={{ 0: { items: 1 }, 767: { items: 2 } }}
              classes={{ review: styles.review, meta: styles.meta }}
            />
          ))}
          <Headline Tag="h2" className={styles.sectionTitle}>
            Listeners reviews
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
    userReviews: allFile(
      filter: { relativeDirectory: { eq: "user-reviews" } }
    ) {
      totalCount
      nodes {
        id
        childImageSharp {
          fluid(quality: 95) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }

    testimonials: allWordpressWpClientReview(
      filter: { polylang_current_lang: { eq: "en" } }
    ) {
      nodes {
        id
        title
        content
        featured_media {
          localFile {
            childImageSharp {
              fluid(
                maxWidth: 250
                maxHeight: 250
                srcSetBreakpoints: [445, 900]
              ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        meta: acf {
          company
          position
        }
      }
    }
  }
`

export default Testimonials
