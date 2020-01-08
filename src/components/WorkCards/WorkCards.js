import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Masonry from "react-masonry-css"
import WorkCard from "../WorkCard"

const WorkCards = ({ className = "", works = [] }) => (
  <Masonry
    breakpointCols={{
      default: 5,
      1100: 5,
      700: 3,
      500: 2,
    }}
    className={classNames("WorkCards__grid", className)}
    columnClassName="WorkCards__column"
  >
    {works &&
      works.map(work => (
        <WorkCard
          key={work.id}
          className="WorkCards__item"
          title={work.title}
          lang={work.lang}
          image={
            work.featured_media
              ? work.featured_media.localFile.childImageSharp.fluid
              : ""
          }
          link={work.slug}
        />
      ))}
  </Masonry>
)

WorkCards.propTypes = {
  className: PropTypes.string,
}

export default WorkCards
