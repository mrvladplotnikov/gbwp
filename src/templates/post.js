import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../layouts/uk/default"

const PostTemplate = ({ data, location }) => {
  const post = data.wordpressPost

  return (
    <Layout location={location}>
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
