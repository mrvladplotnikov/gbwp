import React from "react"
import PropTypes from "prop-types"
import FilterBar from "./FilterBar"
import WorkCardsList from "../WorkCardsList"

const PortfolioWithFilters = ({ filterOptions, filteredWorks = [] }) => {
  const { categoryOptions, serviceOptions } = filterOptions
  const handleFilters = (categories, services) =>
    console.log({
      categories,
      services,
    })

  return (
    <div>
      <FilterBar
        categoryOptions={categoryOptions}
        serviceOptions={serviceOptions}
        onChange={handleFilters}
      />
      <WorkCardsList works={filteredWorks} />
    </div>
  )
}

PortfolioWithFilters.propTypes = {
  filterOptions: PropTypes.shape({
    categoryOptions: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number,
        label: PropTypes.string,
      })
    ),
    serviceOptions: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number,
        label: PropTypes.string,
      })
    ),
  }).isRequired,
  filteredWorks: PropTypes.array,
}

export default PortfolioWithFilters
