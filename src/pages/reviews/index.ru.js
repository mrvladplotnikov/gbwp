import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { graphql } from "gatsby"
import styles from "./styles.module.css"
import Layout from "../../layouts/ru/default"
import Headline from "../../components/Headline"
import ReviewCarousel from "../../components/ReviewCarousel"
import { Inner } from "../../components/Container"
import boxOfDotsLink from "../../images/icon-box.svg"
import { chunk } from "lodash/array"

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

  return (
    <Layout location={location} title="Отзывы">
      <Inner>
        <Headline Tag="h1" className={styles.title}>
          Отзывы
        </Headline>
        <Box />
        <Box />
      </Inner>
      <section>
        <Inner>
          <Headline Tag="h2" className={styles.sectionTitle}>
            Отзывы клиентов
          </Headline>
          {testimonials.map((node, index) => (
            <ReviewCarousel
              key={index}
              reviews={node}
              responsive={{ 0: { items: 1 }, 767: { items: 2 } }}
              classes={{ review: styles.review, meta: styles.meta }}
            />
          ))}
        </Inner>
      </section>
    </Layout>
  )
}

Testimonials.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query TestimonialsPageRuQuery {
    testimonials: allWordpressWpClientReview(
      filter: { polylang_current_lang: { eq: "ru" } }
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
