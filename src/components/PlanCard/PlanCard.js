import React from "react"
import PropTypes from "prop-types"
import { FormattedMessage } from "react-intl"
import Button from "~components/Button"

const PlanCard = ({
  icon,
  title = "",
  subTitle = "",
  alt = "",
  list = [],
  onClick = () => {},
}) => {
  const imageAlt = alt || title

  return (
    <div className="PlanCard">
      {icon && <img src={icon} alt={imageAlt} />}
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
      <Button
        fullWidth
        className="PlanCard__button"
        showArrow={false}
        onClick={onClick}
      >
        <FormattedMessage id="planCardButtonLabel" />
      </Button>
    </div>
  )
}

PlanCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  alt: PropTypes.string,
  onClick: PropTypes.func,
}

export default PlanCard
