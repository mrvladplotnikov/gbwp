import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Masonry from "react-masonry-css"
import WorkCard from "../WorkCard"

const defaultBreakpoint = {
  default: 5,
  1100: 5,
  992: 4,
  768: 3,
  500: 2,
}

const WorkCards = ({
  className = "",
  works = [],
  breakpoints = defaultBreakpoint,
}) => (
  <Masonry
    breakpointCols={breakpoints}
    className={classNames("Cards__grid", className)}
    columnClassName="Cards__column"
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
  breakpoints: PropTypes.shape({
    default: PropTypes.number,
    1100: PropTypes.number,
    700: PropTypes.number,
    500: PropTypes.number,
  }),
}

export default WorkCards
