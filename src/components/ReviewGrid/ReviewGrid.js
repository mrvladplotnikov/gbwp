import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Masonry from "react-masonry-css"
import ReviewGridItem from "../ReviewGridItem"
import useBreakpoint from "../../hooks/useBreakpoint"
import { chunk } from "lodash/array"
import { FormattedMessage } from "react-intl"
import styles from "./styles.module.css"

const queries = {
  md: "(min-width: 720px)",
}

const handleDividing = (chunks, chunksToShow = 1) => {
  let result = []
  for (let index = 0; index < chunksToShow; index++) {
    result.push(...chunks[index])
  }
  return result
}

const ReviewGrid = ({ className = "", images = [] }) => {
  const [page, setPage] = useState(1)
  const matchPoints = useBreakpoint(queries)

  const cimages =
    matchPoints && matchPoints.md ? chunk(images, 32) : chunk(images, 8)

  const paginatedImages = handleDividing(cimages, page)

  return (
    <>
      <Masonry
        breakpointCols={{
          default: 5,
          1100: 5,
          700: 3,
          500: 2,
          450: 1,
        }}
        className={classNames("Cards__grid", className)}
        columnClassName="Cards__column"
      >
        {paginatedImages &&
          paginatedImages.map(image => (
            <ReviewGridItem
              key={image.id}
              image={image.childImageSharp.fluid}
            />
          ))}
      </Masonry>
      {page < cimages.length && (
        <button
          className={styles.loadMoreButton}
          onClick={() => setPage(page + 1)}
        >
          <FormattedMessage id="loadMoreButton" />
        </button>
      )}
    </>
  )
}

ReviewGrid.propTypes = {
  className: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      childImageSharp: PropTypes.object,
    })
  ),
}

export default ReviewGrid
