import React, { useState } from "react"
import PropTypes from "prop-types"
import { Outer } from "../Container"
import StyledSelect from "../StyledSelect"
import { injectIntl, intlShape } from "react-intl"
import ResetFiltersButton from "./ResetFiltersButton"
import styles from "./styles.module.css"

const FilterBar = ({
  intl,
  categoryOptions = [],
  serviceOptions = [],
  onChange = (category, service) => null,
  category = null,
  service = null,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(category)
  const handleChangeCategory = selectedOption => {
    setSelectedCategory(selectedOption)
    onChange(selectedCategory, setSelectedCategory)
  }

  const [selectedService, setSelectedService] = useState(service)
  const handleChangeService = selectedOption => {
    setSelectedService(selectedOption)
    onChange(selectedCategory, setSelectedCategory)
  }

  const handleResetFilters = () => {
    setSelectedCategory(null)
    setSelectedService(null)
    onChange(selectedCategory, setSelectedCategory)
  }

  return (
    <Outer>
      <StyledSelect
        className={styles.selectFilter}
        placeholder={intl.formatMessage({ id: "categoryFilter" })}
        name="category"
        isClearable
        options={categoryOptions}
        onChange={handleChangeCategory}
        value={selectedCategory}
      />
      <StyledSelect
        className={styles.selectFilter}
        placeholder={intl.formatMessage({ id: "serviceFilter" })}
        name="service"
        isClearable
        options={serviceOptions}
        onChange={handleChangeService}
        value={selectedService}
      />
      <ResetFiltersButton onClick={handleResetFilters} />
    </Outer>
  )
}

FilterBar.propTypes = {
  intl: intlShape.isRequired,
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
  onChange: PropTypes.func.isRequired,
  category: PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
  }),
  service: PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
  }),
}

export default injectIntl(FilterBar)
