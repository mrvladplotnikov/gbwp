import React from "react"
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
  category = undefined,
  service = undefined,
}) => {
  const selectedCategory = category
    ? categoryOptions.find(({ value }) => value === category)
    : undefined
  const selectedService = service
    ? serviceOptions.find(({ value }) => value === service)
    : undefined

  const handleChangeCategory = selectedOption =>
    onChange(selectedOption ? selectedOption.value : undefined, service)
  const handleChangeService = selectedOption =>
    onChange(category, selectedOption ? selectedOption.value : undefined)

  const handleResetFilters = () => onChange()

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
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  serviceOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  onChange: PropTypes.func.isRequired,
  category: PropTypes.string,
  service: PropTypes.string,
}

export default injectIntl(FilterBar)
