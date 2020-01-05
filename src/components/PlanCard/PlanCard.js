import React from "react"
import PropTypes from "prop-types"
import { FormattedMessage } from "react-intl"

const PlanCard = ({
  icon,
  title = "",
  subTitle = "",
  list = [],
  onClick = () => {},
}) => (
  <div className="PlanCard">
    {icon && <img src={icon} alt={title} />}
    <h3 className="PlanCard__title">{title}</h3>
    {subTitle && <h5 className="PlanCard__subTitle">{subTitle}</h5>}
    {list && (
      <ul className="PlanCard__list">
        {list.map((item, i) => (
          <li key={`${item}-${i}`} className="PlanCard__item">
            {item}
          </li>
        ))}
      </ul>
    )}
    <button className="PlanCard__button" type="button" onClick={onClick}>
      <FormattedMessage id="planCardButtonLabel" />
    </button>
  </div>
)

PlanCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
}

export default PlanCard
