import React from "react"
import PropTypes from "prop-types"
import FilterBar from "./FilterBar"

const PortfolioWithFilters = ({ filterOptions }) => {
  const { categoryOptions, serviceOptions } = filterOptions

  return (
    <div>
      <FilterBar
        categoryOptions={categoryOptions}
        serviceOptions={serviceOptions}
      />
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
}

export default PortfolioWithFilters
