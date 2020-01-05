import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
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
}) => (
  <Link
    className={classNames("WorkCard", className)}
    to={gPath(lang, `works/${link}`)}
  >
    <figure className="WorkCard__container">
      {image ? (
        <Img className="WorkCard__image" fluid={image} alt={title} />
      ) : (
        <img src={noImage} className="WorkCard__image" alt="" />
      )}
      <figcaption className="WorkCard__title">{title}</figcaption>
    </figure>
  </Link>
)

WorkCard.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
}

export default WorkCard
