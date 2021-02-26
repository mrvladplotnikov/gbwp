import React from "react"
import PropTypes from "prop-types"
import { useI18next } from "gatsby-plugin-react-i18next"

import { Outer } from "../Container"
import StyledSelect from "../StyledSelect"
import ResetFiltersButton from "./ResetFiltersButton"

import styles from "./styles.module.css"

const FilterBar = ({
  categoryOptions = [],
  serviceOptions = [],
  onChange = (category, service) => null,
  category = undefined,
  service = undefined,
}) => {
  const { t } = useI18next()

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
    <Outer className={styles.container}>
      <StyledSelect
        className={styles.selectFilter}
        placeholder={t("categoryFilter", { defaultValue: "Category" })}
        name="category"
        isClearable
        options={categoryOptions}
        onChange={handleChangeCategory}
        value={selectedCategory}
        minWidth="135px"
      />
      <StyledSelect
        className={styles.selectFilter}
        placeholder={t("serviceFilter", { defaultValue: "Service" })}
        name="service"
        isClearable
        options={serviceOptions}
        onChange={handleChangeService}
        value={selectedService}
        minWidth="125px"
      />
      <ResetFiltersButton onClick={handleResetFilters} />
    </Outer>
  )
}

FilterBar.propTypes = {
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

export default FilterBar
