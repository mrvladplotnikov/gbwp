import React from "react"
import { graphql } from "gatsby"
import Layout from "../../layouts/uk/default"
import { Inner } from "../../components/Container"
import Contacts from "../../components/lendingSections/Contacts"

const PageTemplate = ({ data, location }) => {
  const currentPage = data.wordpressPage

  return (
    <Layout location={location}>
      <Inner>
        <div
          style={{
            margin: "6rem 1rem 2rem",
          }}
        >
          <h1 dangerouslySetInnerHTML={{ __html: currentPage.title }} />
          <div dangerouslySetInnerHTML={{ __html: currentPage.content }} />
        </div>
      </Inner>
      <Contacts />
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`
