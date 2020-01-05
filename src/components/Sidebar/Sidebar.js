import React from "react"
import PropTypes from "prop-types"
import BackgroundImage from "gatsby-background-image"
import styles from "./styles.module.css"

const Sidebar = ({ title = "", text = "", autor = "", image }) => (
  <BackgroundImage
    className={styles.container}
    fluid={image}
    backgroundColor="#5a0f34"
  >
    <h1 className={styles.title}>{title}</h1>
    <figure className={styles.quote}>
      <blockquote>{text}</blockquote>
      <figcaption className={styles.autor}>
        <cite>{autor}</cite>
      </figcaption>
    </figure>
  </BackgroundImage>
)

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
}

export default Sidebar
