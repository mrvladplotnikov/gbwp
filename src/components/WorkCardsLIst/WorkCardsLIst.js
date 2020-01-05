import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Masonry from "react-masonry-css"
import styles from "./styles.module.css"
import WorkCard from "../WorkCard"

const WorkCardsList = ({ className = "", works = [] }) => (
  <Masonry
    breakpointCols={{
      default: 5,
      1100: 5,
      700: 3,
      500: 2,
    }}
    className={classNames(styles.grid, className)}
    columnClassName={styles.column}
  >
    {works &&
      works.map(work => (
        <WorkCard
          key={work.id}
          className={styles.item}
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

WorkCardsList.propTypes = {
  className: PropTypes.string,
}

export default WorkCardsList
