import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Layout from "../../layouts/en/default"
import { Inner } from "../../components/Container"
import SingleNavagation from "../../components/SingleNavagation"
import Contacts from "../../components/lendingSections/Contacts"
import parseContent from "../../utils/parseContent"
import styles from "./styles.module.css"

const WorkTemplate = ({ data, pageContext: { next, prev }, location }) => {
  const work = data.wordpressWpWork
  const category = data.wordpressWpWork.meta.category
  const service = data.wordpressWpWork.meta.service
  const genre = data.wordpressWpWork.meta.genre
  const platform = data.wordpressWpWork.meta.platform
  const developer = data.wordpressWpWork.meta.developer
  const authors = data.wordpressWpWork.meta.authors
  const media = data.allWordpressWpMedia.edges
  const Content = parseContent(work.content, media)

  return (
    <Layout location={location}>
      <Inner>
        <div className={styles.template}>
          <h1 className={styles.mainTitle}>{work.title}</h1>
          <ul className={styles.meta}>
            {category && (
              <li>
                Категория:{" "}
                <ul className={styles.metaValues}>
                  {category.split(", ").map((item, i) => (
                    <li key={i}>{(i ? ", " : "") + item}</li>
                  ))}
                </ul>
              </li>
            )}
            {service && (
              <li>
                Услуга:{" "}
                <ul className={styles.metaValues}>
                  {service.split(", ").map((item, i) => (
                    <li key={i}>{(i ? ", " : "") + item}</li>
                  ))}
                </ul>
              </li>
            )}
            {genre && (
              <li>
                Жанр:{" "}
                <ul className={styles.metaValues}>
                  {genre.split(", ").map((item, i) => (
                    <li key={i}>{(i ? ", " : "") + item}</li>
                  ))}
                </ul>
              </li>
            )}
            {platform && (
              <li>
                Платформа:{" "}
                <ul className={styles.metaValues}>
                  {platform.split(", ").map((item, i) => (
                    <li key={i}>{(i ? ", " : "") + item}</li>
                  ))}
                </ul>
              </li>
            )}
            {developer && (
              <li>
                Разработчик:{" "}
                <ul className={styles.metaValues}>
                  {developer.split(", ").map((item, i) => (
                    <li key={i}>{(i ? ", " : "") + item}</li>
                  ))}
                </ul>
              </li>
            )}
            {authors && (
              <li>
                Работа над проектом:{" "}
                <ul className={styles.metaValues}>
                  {authors.split(", ").map((item, i) => (
                    <li key={i}>{(i ? ", " : "") + item}</li>
                  ))}
                </ul>
              </li>
            )}
          </ul>
          <div className={styles.featuredImage}>
            {work.featured_media && (
              <Img
                fluid={work.featured_media.localFile.childImageSharp.fluid}
                alt={work.title}
              />
            )}
          </div>

          <div className={styles.content}>{Content}</div>
        </div>
      </Inner>
      <SingleNavagation
        next={next ? next.slug : null}
        prev={prev ? prev.slug : null}
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
      title
      content
      meta: acf {
        category
        service
        genre
        platform
        developer
        authors
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 470, maxHeight: 470) {
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
    allWordpressWpMedia {
      edges {
        node {
          id
          wordpress_id
          source_url
          localFile {
            childImageSharp {
              fluid(maxWidth: 1170, srcSetBreakpoints: [200, 340, 520, 900]) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
