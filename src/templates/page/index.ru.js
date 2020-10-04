import React from "react"
import { graphql } from "gatsby"
import Layout from "../../layouts/ru/default"
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
        ../
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
        Расскажите нам о своём проекте, продукте или идее. Спросите совет или
        получите полноценную{" "}
        <a
          rel="nofollow noopener noreferrer"
          target="_blank"
          href={mailTo.mail.ru}
        >
          бесплатную консультацию
        </a>
        . Узнайте цены, уточните важный вопрос, да что угодно! Мы будем рады с
        вами познакомиться и помочь.
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
