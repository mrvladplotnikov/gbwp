import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/uk/default"

const PageTemplate = ({ data, location }) => {
  const currentPage = data.wordpressPage

  return (
    <Layout location={location}>
      <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
      <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`
