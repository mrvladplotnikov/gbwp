import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./styles.module.css"
import { Link } from "gatsby"
import gPath from "../../utils/generatePath"
import Img from "gatsby-image"
import noImage from "../../images/no-image.png"

const WorkCard = ({
  className = "",
  link = "",
  image = "",
  title = "",
  lang = "",
}) => {
  return (
    <Link
      className={classNames(styles.WorkCard, className)}
      to={gPath(lang, `works/${link}`)}
    >
      <figure className={styles.container}>
        {image ? (
          <Img className={styles.image} fluid={image} alt={title} />
        ) : (
          <img src={noImage} className={styles.image} alt="" />
        )}
        <figcaption className={styles.title}>{title}</figcaption>
      </figure>
    </Link>
  )
}

WorkCard.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
}

export default WorkCard
