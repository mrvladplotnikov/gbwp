import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./styles.module.css"
import { Link } from "gatsby"

const WorkCard = ({ className = "", link = "", image = "", title = "" }) => (
  <Link
    className={classNames(styles.WorkCard, className)}
    to={link}
    style={{ backgroundImage: image }}
  >
    <figure className={styles.container}>
      <img className={styles.image} src={image} alt={title} />
      <figcaption className={styles.title}>{title}</figcaption>
    </figure>
  </Link>
)

WorkCard.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
}

export default WorkCard
