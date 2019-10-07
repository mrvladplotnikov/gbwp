import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import { FaRegClock } from "react-icons/fa"
import generatePath from "../utils/generatePath"

import Layout from "../layouts"

import { rhythm } from "../utils/typography"

class Home extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <div css={{ marginBottom: rhythm(1) }}>
          <h1>Pages</h1>
          {data.allWordpressPage.edges.map(({ node }) => {
            const path = generatePath(node.lang, node.slug)

            return (
              <div key={node.slug}>
                <Link to={path} css={{ textDecoration: `none` }}>
                  <h3>{node.title}</h3>
                </Link>
                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                <span>
                  <FaRegClock
                    size={14}
                    css={{ position: `relative`, bottom: 1 }}
                  />
                  {` `}
                  {node.date}
                </span>
              </div>
            )
          })}
        </div>
        <hr />
        <h1>Posts</h1>
        {data.allWordpressPost.edges.map(({ node }) => {
          const path = generatePath(node.lang, node.slug)

          return (
            <div css={{ marginBottom: rhythm(2) }} key={node.slug}>
              <Link to={path} css={{ textDecoration: `none` }}>
                <h3>{node.title}</h3>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default Home

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
          lang: polylang_current_lang
        }
      }
    }
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
          lang: polylang_current_lang
        }
      }
    }
  }
`
