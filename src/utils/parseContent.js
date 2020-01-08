import React from "react"
import Img from "gatsby-image"
import Parser from "html-react-parser"

export default (content, media) =>
  Parser(content, {
    replace: domNode => {
      if (domNode.name === "img") {
        let image = media.find(
          m => m.node.wordpress_id === parseInt(domNode.attribs["data-id"], 10)
        )
        if (image) {
          if (image.node.localFile.childImageSharp) {
            return <Img fluid={image.node.localFile.childImageSharp.fluid} />
          }

          return domNode
        }
      }
    },
  })
