import React, { useState } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import Img from "gatsby-image"
import { FormattedMessage } from "react-intl"
import Modal from "react-modal"
import NoImage from "../../images/no-image.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { strip } from "../../utils/htmlHelpers"

Modal.setAppElement("#___gatsby")

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
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleReadMore = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  if (review.length > 153 && !showReadMoreButton) {
    setShowReadMoreButton(true)
  }

  return (
    <div className={classNames(styles.review, classes.review)}>
      <div className={classNames(styles.meta, classes.meta)}>
        {thumbnail ? (
          <Img
            fluid={thumbnail.localFile.childImageSharp.fluid}
            alt={thumbnail.name}
            className={classNames(styles.thumbnail, classes.thumbnail)}
          />
        ) : (
          <img src={NoImage} className={styles.noImage} alt={name} />
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
          {strip(review).slice(0, 150)}{" "}
          {showReadMoreButton && (
            <>
              <button
                type="button"
                className={styles.readMoreButton}
                onClick={handleReadMore}
              >
                <FormattedMessage id="loadMoreButton" />
              </button>

              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Details"
                className={styles.modal}
                closeTimeoutMS={300}
                style={{
                  overlay: {
                    zIndex: 2001,
                    background: "rgba(0, 0, 0, 0.86)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  },
                  content: {
                    margin: "0 15px",
                    paddingTop: 70,
                    maxWidth: 768,
                    background: "transparent",
                    position: "relative",
                    borderRadius: 0,
                    border: "none",
                    overflowX: "hidden",
                    outline: "none",
                  },
                }}
              >
                <button
                  type="button"
                  onClick={closeModal}
                  className={styles.closeModalButton}
                >
                  <FontAwesomeIcon icon={["fas", "times"]} />
                </button>

                <div className={styles.modalInner}>
                  <div
                    className={classNames(styles.content, classes.content)}
                    dangerouslySetInnerHTML={{ __html: review }}
                  />
                  <h4
                    className={classNames(styles.nameAndPos, classes.name)}
                  >{`${name}, ${position}`}</h4>
                  {company && (
                    <h5 className={classNames(styles.company, classes.company)}>
                      {company}
                    </h5>
                  )}
                </div>
              </Modal>
            </>
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
