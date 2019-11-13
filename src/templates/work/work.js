import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Layout from "../../layouts"
import { Inner } from "../../components/Container"
import SingleNavagation from "../../components/SingleNavagation"
import Contacts from "../../components/lendingSections/Contacts"
import parseContent from "../../utils/parseContent"
import styles from "./styles.module.css"

const WorkTemplate = ({ data }) => {
  const work = data.wordpressWpWork
  const categories = data.allWordpressWpWorkCategory.categories
  const services = data.allWordpressWpWorkService.services
  const genres = data.allWordpressWpWorkGenre.genres
  const platforms = data.allWordpressWpWorkPlatform.platforms
  const developers = data.allWordpressWpWorkDeveloper.developers
  const authors = data.allWordpressWpWorkAuthors.authors
  const media = data.allWordpressWpMedia.edges
  const Content = parseContent(work.content, media)

  return (
    <Layout>
      <Inner>
        <div className={styles.template}>
          <h1 className={styles.mainTitle}>{work.title}</h1>
          <ul className={styles.meta}>
            {categories.length > 0 && (
              <li>
                Категория:{" "}
                <ul className={styles.metaValues}>
                  {categories.map(({ id, name }, i) => (
                    <li key={id}>{(i ? ", " : "") + name}</li>
                  ))}
                </ul>
              </li>
            )}
            {services.length > 0 && (
              <li>
                Услуга:{" "}
                <ul className={styles.metaValues}>
                  {services.map(({ id, name }, i) => (
                    <li key={id}>{(i ? ", " : "") + name}</li>
                  ))}
                </ul>
              </li>
            )}
            {genres.length > 0 && (
              <li>
                Жанр:{" "}
                <ul className={styles.metaValues}>
                  {genres.map(({ id, name }, i) => (
                    <li key={id}>{(i ? ", " : "") + name}</li>
                  ))}
                </ul>
              </li>
            )}
            {platforms.length > 0 && (
              <li>
                Платформа:{" "}
                <ul className={styles.metaValues}>
                  {platforms.map(({ id, name }, i) => (
                    <li key={id}>{(i ? ", " : "") + name}</li>
                  ))}
                </ul>
              </li>
            )}
            {developers.length > 0 && (
              <li>
                Разработчик:{" "}
                <ul className={styles.metaValues}>
                  {developers.map(({ id, name }, i) => (
                    <li key={id}>{(i ? ", " : "") + name}</li>
                  ))}
                </ul>
              </li>
            )}
            {authors.length > 0 && (
              <li>
                Работа над проектом:{" "}
                <ul className={styles.metaValues}>
                  {authors.map(({ id, name }, i) => (
                    <li key={id}>{(i ? ", " : "") + name}</li>
                  ))}
                </ul>
              </li>
            )}
          </ul>
          <div className={styles.featuredImage}>
            <Img
              fluid={work.featured_media.localFile.childImageSharp.fluid}
              alt={work.title}
            />
          </div>

          <div className={styles.content}>{Content}</div>
        </div>
      </Inner>
      <SingleNavagation />
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
  query(
    $id: String!
    $work_category_ids: [Int]!
    $work_service_ids: [Int]!
    $work_genre_ids: [Int]!
    $work_platform_ids: [Int]!
    $work_developer_ids: [Int]!
    $work_authors_ids: [Int]!
  ) {
    wordpressWpWork(id: { eq: $id }) {
      title
      content
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
    allWordpressWpWorkCategory(
      filter: { wordpress_id: { in: $work_category_ids } }
    ) {
      categories: nodes {
        name
        id
      }
    }
    allWordpressWpWorkService(
      filter: { wordpress_id: { in: $work_service_ids } }
    ) {
      services: nodes {
        name
        id
      }
    }
    allWordpressWpWorkGenre(filter: { wordpress_id: { in: $work_genre_ids } }) {
      genres: nodes {
        name
        id
      }
    }
    allWordpressWpWorkPlatform(
      filter: { wordpress_id: { in: $work_platform_ids } }
    ) {
      platforms: nodes {
        name
        id
      }
    }
    allWordpressWpWorkDeveloper(
      filter: { wordpress_id: { in: $work_developer_ids } }
    ) {
      developers: nodes {
        name
        id
      }
    }
    allWordpressWpWorkAuthors(
      filter: { wordpress_id: { in: $work_authors_ids } }
    ) {
      authors: nodes {
        name
        id
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
