import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import Img from "gatsby-image"

const ReviewCarouselItem = ({
  thumbnail = null,
  review = "",
  position = "",
  name = "",
  company = "",
}) => (
  <div className={styles.review}>
    <div className={styles.meta}>
      {thumbnail && (
        <Img
          fluid={thumbnail.localFile.childImageSharp.fluid}
          alt={thumbnail.name}
          className={styles.thumbnail}
        />
      )}
      <h4 className={styles.nameAndPos}>{`${name}, ${position}`}</h4>
      {company && <h5 className={styles.company}>{company}</h5>}
    </div>
    {review && (
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: review }}
      />
    )}
  </div>
)

ReviewCarouselItem.propTypes = {
  thumbnail: PropTypes.object,
  review: PropTypes.string,
  position: PropTypes.string,
  name: PropTypes.string,
  company: PropTypes.string,
}

export default ReviewCarouselItem
