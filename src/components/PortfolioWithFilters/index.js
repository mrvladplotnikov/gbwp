import React, { useState, useCallback } from "react"
import PropTypes from "prop-types"
import FilterBar from "./FilterBar"
import WorkCards from "../WorkCards"
import { flatten, uniqBy, chunk } from "lodash/array"
import { FormattedMessage } from "react-intl"
import Button from "~components/Button"
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
  const flattenOptions = uniqBy(flatten(raw), "value")

  return flattenOptions.filter(option => option !== null)
}

const PortfolioWithFilters = ({ works = [] }) => {
  const [data, setData] = useState(works)
  const [page, setPage] = useState(1)

  //TODO: need to figure out how we can add data to this useCallback deps
  const handleFilters = useCallback((category, service) => {
    let filteredWorks = [...data]

    if (category) {
      filteredWorks = filteredWorks.filter(item => {
        if (!item.category) return []

        return item.category.some(({ value }) => value === category)
      })
    }

    if (service) {
      filteredWorks = filteredWorks.filter(item => {
        if (!item.service) return []

        return item.service.some(({ value }) => value === service)
      })
    }
    setPage(1)
    setData(filteredWorks)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const chunkedWorks = chunk(data, 10)

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
        <div className={styles.container}>
          <Button
            onClick={() => setPage(page + 1)}
            className={styles.loadMoreButton}
            arrowPosition="right"
          >
            <FormattedMessage id="loadMoreButton" />
          </Button>
        </div>
      )}
    </div>
  )
}

PortfolioWithFilters.propTypes = {
  works: PropTypes.array,
}

export default PortfolioWithFilters
