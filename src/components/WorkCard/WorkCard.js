import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { Link } from "gatsby"
import gPath from "../../utils/generatePath"
import Img from "gatsby-image"
import noImage from "../../images/no-image.png"
import { strip } from "../../utils/htmlHelpers"

const WorkCard = ({
  className = "",
  link = "",
  image = "",
  title = "",
  lang = "",
}) => {
  return (
    <Link
      className={classNames("WorkCard", className)}
      to={gPath(lang, `works/${link}`)}
    >
      <div className="WorkCard__container">
        {image ? (
          <Img
            backgroundColor="#000000"
            className="WorkCard__image"
            fluid={image}
            alt={strip(title)}
          />
        ) : (
          <img src={noImage} className="WorkCard__image" alt="" />
        )}
        <h4
          className="WorkCard__title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </div>
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
