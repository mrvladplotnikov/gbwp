import React, { useState, useCallback, useEffect } from "react"
import PropTypes from "prop-types"
import FilterBar from "./FilterBar"
import WorkCards from "../WorkCards"
import flatten from "lodash/flatten"
import uniqBy from "lodash/uniqBy"
import chunk from "lodash/chunk"
import styles from "./styles.module.css"
import LoadMoreButton from "./LoadMoreButton"

const handleWorksDividing = (chunks = [], chunksToShow = 1) => {
  let result = []

  if (chunks.length > 0) {
    for (let index = 0; index < chunksToShow; index++) {
      result.push(...chunks[index])
    }
  }

  return result
}
const getFilterOptions = (array = [], optionName) => {
  const raw = array.map(work => work[optionName])
  const flattenOptions = uniqBy(flatten(raw), "value")

  return flattenOptions.filter(option => option !== null)
}

const getFilteredData = (item, filterBy, filterValue) => {
  const filters = item[filterBy] ?? []

  return filters.some(({ value }) => value === filterValue)
}

const PortfolioWithFilters = ({
  works = [],
  filters: { category, service },
  onFiltersChange = (category, service) => {},
}) => {
  const [data, setData] = useState(works)
  const [page, setPage] = useState(1)

  const handlePageChange = () => setPage(page + 1)

  //TODO: need to figure out how we can add data to this useCallback deps
  const handleFiltering = useCallback((c, s) => {
    let filteredWorks = [...data]

    if (c) {
      filteredWorks = filteredWorks.filter(item =>
        getFilteredData(item, "category", c)
      )
    }
    if (s) {
      filteredWorks = filteredWorks.filter(item =>
        getFilteredData(item, "service", s)
      )
    }
    setPage(1)
    setData(filteredWorks)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    handleFiltering(category, service)
  }, [category, service, handleFiltering])

  const chunkedWorks = chunk(data, 10)

  const paginatedWorks = handleWorksDividing(chunkedWorks, page)

  return (
    <div>
      <FilterBar
        category={category}
        categoryOptions={getFilterOptions(data, "category")}
        service={service}
        serviceOptions={getFilterOptions(data, "service")}
        onChange={onFiltersChange}
      />
      <WorkCards works={paginatedWorks} className={styles.works} />
      {page < chunkedWorks.length && (
        <LoadMoreButton onClick={handlePageChange} />
      )}
    </div>
  )
}

PortfolioWithFilters.propTypes = {
  works: PropTypes.array,
  filters: PropTypes.shape({
    category: PropTypes.string,
    service: PropTypes.string,
  }),
}

export default PortfolioWithFilters
