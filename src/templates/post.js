import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../layouts"

const PostTemplate = ({ data }) => {
  const post = data.wordpressPost

  return (
    <Layout>
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
