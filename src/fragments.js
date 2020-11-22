import { graphql } from "gatsby"

export const seoPageData = graphql`
  fragment seoPageData on wordpress__wp_custom_page {
    seo: acf {
      title
      description
    }
  }
`

export const teamData = graphql`
  fragment teamData on wordpress__wp_teamConnection {
    members: nodes {
      id
      name: title
      details: content
      photo: featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 570, srcSetBreakpoints: [445, 900], quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      meta: acf {
        position
      }
    }
  }
`

export const workListItemData = graphql`
  fragment workListItemData on wordpress__wp_workConnection {
    nodes {
      id
      slug
      title
      lang: polylang_current_lang
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

export const workListItemDataWithFilters = graphql`
  fragment workListItemDataWithFilters on wordpress__wp_workConnection {
    works: nodes {
      id
      slug
      title
      lang: polylang_current_lang
      category: work_category {
        value: slug
        label: name
      }
      service: work_service {
        value: slug
        label: name
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

export const userReviewsList = graphql`
  fragment userReviewsList on FileConnection {
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
`

export const clientReviewsList = graphql`
  fragment clientReviewsList on wordpress__wp_client_reviewConnection {
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
        link: s_link
      }
    }
  }
`
