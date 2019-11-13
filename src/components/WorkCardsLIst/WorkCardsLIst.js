import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Masonry from "react-masonry-css"
import styles from "./styles.module.css"

import WorkCard from "../WorkCard"

import image1 from "../../images/works/1.jpg"
import image2 from "../../images/works/2.jpg"
import image3 from "../../images/works/3.jpg"

const WorkCardsLIst = ({ className = "" }) => (
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
    <WorkCard
      className={styles.item}
      title="Lorem ipsum dolores 1"
      image={image1}
      link="/"
    />
    <WorkCard
      className={styles.item}
      title="Lorem ipsum dolores 2"
      image={image2}
      link="/"
    />
    <WorkCard
      className={styles.item}
      title="Lorem ipsum dolores 3"
      image={image3}
      link="/"
    />
    <WorkCard
      className={styles.item}
      title="Lorem ipsum dolores 4 "
      image={image2}
      link="/"
    />
    <WorkCard
      className={styles.item}
      title="Lorem ipsum dolores 5"
      image={image1}
      link="/"
    />
    <WorkCard
      className={styles.item}
      title="Lorem ipsum dolores 6"
      image={image3}
      link="/"
    />
    <WorkCard
      className={styles.item}
      title="Lorem ipsum dolores 7"
      image={image1}
      link="/"
    />
    <WorkCard
      className={styles.item}
      title="Lorem ipsum dolores 8"
      image={image3}
      link="/"
    />
  </Masonry>
)

WorkCardsLIst.propTypes = {
  className: PropTypes.string,
}

export default WorkCardsLIst
