import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Img from "gatsby-image"
import Modal from "react-modal"
import styles from "./styles.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

Modal.setAppElement("#___gatsby")

const ReviewGridItem = ({ className = "", image }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const handleClick = () => setModalIsOpen(true)
  const handleKeyPress = event => {
    if (event.key === "Enter") {
      try {
        handleClick()
      } catch (e) {
        console.log(e)
      }
    }
  }
  const handleCloseModal = () => setModalIsOpen(false)

  return (
    <div
      style={{ marginBottom: 15 }}
      className={classNames(styles.item, className)}
      onClickCapture={handleClick}
      role="button"
      tabIndex="0"
      onKeyPress={handleKeyPress}
    >
      <Img fluid={image} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
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
            maxHeight: "80vh",
            width: "100%",
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
          onClick={handleCloseModal}
          className={styles.closeModalButton}
        >
          <FontAwesomeIcon icon={["fas", "times"]} />
        </button>
        <Img fluid={image} />
      </Modal>
    </div>
  )
}

ReviewGridItem.propTypes = {
  className: PropTypes.string,
  image: PropTypes.object.isRequired,
}

export default ReviewGridItem
