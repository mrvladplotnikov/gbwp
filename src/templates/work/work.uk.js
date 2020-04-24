import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../../layouts/uk/default"
import { Inner } from "../../components/Container"
import SingleNavagation from "../../components/SingleNavagation"
import Contacts from "../../components/lendingSections/Contacts"
import parseContent from "../../utils/parseContent"
import TermItem from "../../components/TermItem"
import { HeadingWithMeta, HeadingWithHero } from "../../components/WorkHeading"

import styles from "./styles.module.css"
import ReviewCarousel from "../../components/ReviewCarousel/ReviewCarousel"
import Headline from "../../components/Headline"

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
    <Layout location={location} translations={translations} title={title}>
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
                    name="Категорія"
                  />
                  <TermItem
                    className={styles.metaValues}
                    terms={work_service}
                    name="Послуга"
                  />
                  <TermItem
                    className={styles.metaValues}
                    terms={work_genre}
                    name="Жанр"
                  />
                  <TermItem
                    className={styles.metaValues}
                    terms={work_platform}
                    name="Платформа"
                  />
                  <TermItem
                    className={styles.metaValues}
                    terms={work_developer}
                    name="Розробник"
                  />
                  <TermItem
                    className={styles.metaValues}
                    terms={acf.autors}
                    name="Робота над проєктом"
                  />
                </>
              }
            />
          )}

          <div
            className={styles.content}
            style={{
              marginBottom: reviews.length ? "0" : "10rem",
            }}
          >
            {Content}
          </div>
          {reviews.length > 0 && (
            <>
              <Headline Tag="h2">Відгук клієнта про проєкт</Headline>
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
        list="portfolio"
        prefix="works"
      />
      <Inner>
        <Contacts />
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
      }
      translations: polylang_translations {
        slug
        langKey: polylang_current_lang
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(quality: 100) {
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
      filter: { polylang_current_lang: { eq: "uk" } }
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
