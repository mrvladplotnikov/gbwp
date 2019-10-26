import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./styles.module.css"

//TODO: add gatsby link

const PostCard = ({
  className = "",
  title = "",
  thumbnail = "",
  description = "",
  revers = false,
}) => (
  <div
    className={classNames(
      styles.PostCard,
      { [styles.revers]: revers },
      className
    )}
  >
    <img
      className={styles.thumbnail}
      width="366"
      height="366"
      src={thumbnail}
      alt={title}
      onDragStart={e => {
        e.preventDefault()
      }}
    />
    <h5 className={styles.title}>{title}</h5>
    <p className={styles.description}>{description}</p>
  </div>
)

PostCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  description: PropTypes.string,
  revers: PropTypes.bool,
}

export default PostCard
