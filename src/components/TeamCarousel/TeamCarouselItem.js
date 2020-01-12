import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import Img from "gatsby-image"

const TeamCarouselItem = ({
  name = "",
  details = "",
  photo = null,
  position = "",
  link = "",
}) => {
  const handleClick = e => {
    if (!link) {
      e.preventDefault()
      return false
    }
  }
  return (
    <div className={styles.member}>
      <div className={styles.photoContainer}>
        {photo && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            title={link}
            onClick={handleClick}
          >
            <Img
              fluid={photo.localFile.childImageSharp.fluid}
              alt={photo.name}
              className={styles.photo}
            />
          </a>
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.meta}>
          <h4 className={styles.name}>{name}</h4>
          {position && <h5 className={styles.position}>{position}</h5>}
        </div>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: details }}
        />
      </div>
    </div>
  )
}

TeamCarouselItem.propTypes = {
  name: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  photo: PropTypes.object,
  position: PropTypes.string,
  link: PropTypes.string,
}

export default TeamCarouselItem
