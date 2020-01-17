import React, { useState } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import Img from "gatsby-image"
import { FormattedMessage } from "react-intl"

const ReviewCarouselItem = ({
  thumbnail = null,
  review = "",
  position = "",
  name = "",
  company = "",
  classes = {
    review: "",
    meta: "",
    thumbnail: "",
    name: "",
    company: "",
    content: "",
  },
}) => {
  const [showReadMoreButton, setShowReadMoreButton] = useState(false)

  if (review.length > 338 && !showReadMoreButton) {
    setShowReadMoreButton(true)
  }

  return (
    <div className={classNames(styles.review, classes.review)}>
      <div className={classNames(styles.meta, classes.meta)}>
        {thumbnail && (
          <Img
            fluid={thumbnail.localFile.childImageSharp.fluid}
            alt={thumbnail.name}
            className={classNames(styles.thumbnail, classes.thumbnail)}
          />
        )}
        <h4
          className={classNames(styles.nameAndPos, classes.name)}
        >{`${name}, ${position}`}</h4>
        {company && (
          <h5 className={classNames(styles.company, classes.company)}>
            {company}
          </h5>
        )}
      </div>
      {review && (
        <div className={classNames(styles.content, classes.content)}>
          <div
            className={styles.contentInside}
            dangerouslySetInnerHTML={{ __html: review }}
          />
          {showReadMoreButton && (
            <button type="button" className={styles.readMoreButton}>
              <FormattedMessage id="loadMoreButton" />
            </button>
          )}
        </div>
      )}
    </div>
  )
}

ReviewCarouselItem.propTypes = {
  thumbnail: PropTypes.object,
  review: PropTypes.string,
  position: PropTypes.string,
  name: PropTypes.string,
  company: PropTypes.string,
  classes: PropTypes.shape({
    review: PropTypes.string,
    meta: PropTypes.string,
    thumbnail: PropTypes.string,
    name: PropTypes.string,
    company: PropTypes.string,
    content: PropTypes.string,
  }),
}

export default ReviewCarouselItem
