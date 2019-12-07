import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import { FormattedMessage } from "react-intl"

const PlanCard = ({
  icon,
  title = "",
  subTitle = "",
  list = [],
  onClick = () => {},
}) => (
  <div className={styles.card}>
    {icon && <img src={icon} alt={title} />}
    <h3 className={styles.title}>{title}</h3>
    {subTitle && <h5 className={styles.subTitle}>{subTitle}</h5>}
    {list && (
      <ul className={styles.list}>
        {list.map((item, i) => (
          <li key={`${item}-${i}`} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    )}
    <button className={styles.button} type="button" onClick={onClick}>
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
