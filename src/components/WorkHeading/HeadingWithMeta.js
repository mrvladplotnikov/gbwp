import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import styles from "./styles.module.css"

import { strip } from "../../utils/htmlHelpers"

const HeadingWithMeta = ({ image, title, terms }) => (
  <div className={styles.heading}>
    <div className={styles.featuredImage}>
      {image && (
        <Img
          fadeIn={false}
          loading="eager"
          fluid={image.localFile.childImageSharp.fluid}
          alt={strip(title)}
        />
      )}
    </div>

    <div>
      <h1
        className={styles.mainTitle}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {terms && <ul className={styles.meta}>{terms}</ul>}
    </div>
  </div>
)

HeadingWithMeta.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.object,
  terms: PropTypes.node,
}

export default HeadingWithMeta
