import React from "react"
import PropTypes from "prop-types"

const TermItem = ({ className = "", terms = [], name }) => {
  if (!terms) return null

  return (
    <li>
      {`${name}: `}
      <ul className={className}>
        {terms.map(({ name, id }, i) => {
          if (terms.length === i + 1) {
            return <li key={id}>{name}</li>
          }

          return <li key={id}>{`${name}, `}</li>
        })}
      </ul>
    </li>
  )
}

TermItem.propTypes = {
  className: PropTypes.string,
  terms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  name: PropTypes.string.isRequired,
}

export default TermItem
