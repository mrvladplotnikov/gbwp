import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../../layouts/en/default"
import { Inner } from "../../components/Container"
import SingleNavagation from "../../components/SingleNavagation"
import Contacts from "../../components/lendingSections/Contacts"
import parseContent from "../../utils/parseContent"
import { HeadingWithMeta, HeadingWithHero } from "../../components/WorkHeading"
import TermItem from "../../components/TermItem"

import styles from "./styles.module.css"
import Headline from "../../components/Headline"
import ReviewCarousel from "../../components/ReviewCarousel/ReviewCarousel"
import mailTo from "../../utils/mailTo"
import getServiceURI from "../../utils/getServiceURI"

const WorkTemplate = ({ data, pageContext: { next, prev }, location }) => {
  const {
    title,
    content,
    format,
    wordpress_id,
    translations,
    featured_media,
    work_category,
    work_service,
    work_genre,
    work_platform,
    work_developer,
    acf,
  } = data.wordpressWpWork
  const media = data.allWordpressWpMedia.edges
  const Content = parseContent(content, media)
  const isHeroFormat = format === "link"
  const reviews =
    data.reviews.nodes &&
    data.reviews.nodes.filter(r => r.meta.project === wordpress_id)

  return (
    <Layout
      location={location}
      translations={translations}
      title={acf.title || title}
      description={acf.description}
    >
      {isHeroFormat && acf.work_video && (
        <div className={styles.videoBGWrapper}>
          <div className={styles.videoBG}>
            <iframe
              src={`https://player.vimeo.com/video/${acf.work_video}?background=1&autoplay=1&loop=1&byline=0&title=0`}
              frameBorder="0"
              allowFullScreen
              title={`${title} - video bg`}
            ></iframe>
          </div>
        </div>
      )}
      <Inner>
        <div className={styles.template}>
          {isHeroFormat ? (
            <HeadingWithHero title={title} />
          ) : (
            <HeadingWithMeta
              image={featured_media}
              title={title}
              terms={
                <>
                  <TermItem
                    className={styles.metaValues}
                    terms={work_category}
                    name="Category"
                  />
                  <TermItem
                    className={styles.metaValues}
                    terms={getServiceURI(work_service)}
                    name="Service"
                  />
                  <TermItem
                    className={styles.metaValues}
                    terms={work_genre}
                    name="Genre"
                  />
                  <TermItem
                    className={styles.metaValues}
                    terms={work_platform}
                    name="Platform"
                  />
                  <TermItem
                    className={styles.metaValues}
                    terms={work_developer}
                    name="Developer"
                  />
                  <TermItem
                    className={styles.metaValues}
                    terms={acf.autors}
                    name="Work on the project"
                  />
                </>
              }
            />
          )}
          <div
            className={styles.content}
            style={{
              marginBottom: reviews.length ? "0" : "3rem",
            }}
          >
            {Content}
          </div>
          {reviews.length > 0 && (
            <>
              <Headline Tag="h2">Customer’s testimonial</Headline>
              <div
                style={{
                  marginBottom: "2rem",
                }}
              >
                <ReviewCarousel reviews={reviews} />
              </div>
            </>
          )}
        </div>
      </Inner>
      <SingleNavagation
        next={next ? next.slug : null}
        prev={prev ? prev.slug : null}
        list="en/portfolio"
        prefix="en/works"
      />
      <Inner>
        <Contacts>
          Tell us about your project, product, or idea. Ask for advice, or get a
          full{" "}
          <a
            rel="nofollow noopener noreferrer"
            target="_blank"
            href={mailTo.mail.en}
          >
            free consultation
          </a>
          . Find out the cost, specify a vital question, well anything you want!
          We will be happy to get to know you and help.
        </Contacts>
      </Inner>
    </Layout>
  )
}

WorkTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default WorkTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressWpWork(id: { eq: $id }) {
      wordpress_id
      title
      content
      format
      acf {
        autors
        work_video
        title
        description
      }
      work_developer {
        id
        name
      }
      work_genre {
        id
        name
      }
      work_platform {
        id
        name
      }
      work_category {
        id
        name
      }
      work_service {
        id
        name
        lang: polylang_current_lang
      }
      translations: polylang_translations {
        slug
        langKey: polylang_current_lang
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 570, maxHeight: 570, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    reviews: allWordpressWpClientReview(
      filter: { polylang_current_lang: { eq: "en" } }
    ) {
      nodes {
        id
        title
        content
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 250, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        meta: acf {
          company
          position
          link: s_link
          project
        }
      }
    }
    allWordpressWpMedia {
      edges {
        node {
          id
          wordpress_id
          source_url
          localFile {
            childImageSharp {
              fluid(
                maxWidth: 1920
                srcSetBreakpoints: [200, 340, 520, 900]
                quality: 100
              ) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
