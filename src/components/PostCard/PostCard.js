import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./styles.module.css"

import postImage from "../../images/post-t.jpg"

const PostCard = ({ className, title, thumbnail, description }) => (
  <div className={classNames(styles.PostCard, className)}>
    <img className={styles.thumbnail} src={postImage} alt={title} />
    <h5 className={styles.title}>{title}</h5>
    <p className={styles.description}>
      Cras dapibus. Vivamus elementum semper nisi.
    </p>
  </div>
)

PostCard.defaultProps = {
  className: "",
  title: "",
  thumbnail: "",
  description: "",
}

PostCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  description: PropTypes.string,
}

export default PostCard
