import React from "react"
import { graphql } from "gatsby"
import Layout from "../../layouts/en/default"
import { Inner } from "../../components/Container"
import Contacts from "../../components/lendingSections/Contacts"
import mailTo from "../../utils/mailTo"

const PageTemplate = ({ data, location }) => {
  const currentPage = data.wordpressPage
  const acf = data.wordpressPage.acf

  return (
    <Layout
      location={location}
      title={acf.title || currentPage.title}
      description={acf.description}
      noindex={acf.noindex}
      translations={data.wordpressPage.translations}
    >
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
        . Find out the rates, clarify a vital question, well anything you want!
        We will be happy to get to know you and help.
      </Contacts>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      acf {
        title
        description
        noindex
      }
      translations: polylang_translations {
        slug
        langKey: polylang_current_lang
      }
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`
