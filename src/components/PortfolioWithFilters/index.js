import React, { useState, useCallback } from "react"
import PropTypes from "prop-types"
import FilterBar from "./FilterBar"
import WorkCards from "../WorkCards"
import { flatten, uniqBy, chunk } from "lodash/array"
import { FormattedMessage } from "react-intl"
import styles from "./styles.module.css"

const handleWorksDividing = (chunks, chunksToShow = 1) => {
  let result = []
  for (let index = 0; index < chunksToShow; index++) {
    result.push(...chunks[index])
  }
  return result
}
const getFilterOptions = (array = [], optionName) => {
  const raw = array.map(work => work[optionName])
  return uniqBy(flatten(raw), "value")
}

const PortfolioWithFilters = ({ works = [] }) => {
  const [data, setData] = useState(works)
  const [page, setPage] = useState(1)

  //TODO: need to figure out how we can add data to this useCallback deps
  const handleFilters = useCallback((category, service) => {
    let filteredWorks = [...data]

    if (category) {
      filteredWorks = filteredWorks.filter(item =>
        item.category.some(({ value }) => value === category)
      )
    }

    if (service) {
      filteredWorks = filteredWorks.filter(item =>
        item.service.some(({ value }) => value === service)
      )
    }
    setPage(1)
    setData(filteredWorks)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const chunkedWorks = chunk(data, 5)

  const paginatedWorks = handleWorksDividing(chunkedWorks, page)

  return (
    <div>
      <FilterBar
        categoryOptions={getFilterOptions(data, "category")}
        serviceOptions={getFilterOptions(data, "service")}
        onChange={handleFilters}
      />
      <WorkCards works={paginatedWorks} className={styles.works} />
      {page < chunkedWorks.length && (
        <button
          className={styles.loadMoreButton}
          onClick={() => setPage(page + 1)}
        >
          <FormattedMessage id="loadMoreButton" />
        </button>
      )}
    </div>
  )
}

PortfolioWithFilters.propTypes = {
  works: PropTypes.array,
}

export default PortfolioWithFilters
