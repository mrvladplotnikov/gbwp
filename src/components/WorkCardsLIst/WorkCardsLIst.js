import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Masonry from "react-masonry-css"
import styles from "./styles.module.css"

import WorkCard from "../WorkCard"

import image1 from "../../images/post-t.jpg"
import image2 from "../../images/post-t-2.jpg"
import image3 from "../../images/post-t-3.jpg"
import image4 from "../../images/post-t-4.jpg"
import image5 from "../../images/post-t-5.jpg"
import image6 from "../../images/post-t-6.jpg"

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
      image={image4}
      link="/"
    />
    <WorkCard
      className={styles.item}
      title="Lorem ipsum dolores 5"
      image={image5}
      link="/"
    />
    <WorkCard
      className={styles.item}
      title="Lorem ipsum dolores 6"
      image={image6}
      link="/"
    />
  </Masonry>
)

WorkCardsLIst.propTypes = {
  className: PropTypes.string,
}

export default WorkCardsLIst
