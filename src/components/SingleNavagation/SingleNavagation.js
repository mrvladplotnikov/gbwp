import React, { useState } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Inner } from "../../components/Container"
import styles from "./styles.module.css"
import ArrowLeftIcon from "../../images/arrow-left.svg"
import ArrowLeftColorIcon from "../../images/arrow-color-left.svg"
import ArrowRightIcon from "../../images/arrow-right.svg"
import ArrowRightColorIcon from "../../images/arrow-color-right.svg"

const WorkTemplate = ({ prev = "", next = "", list = "", prefix = "" }) => {
  const [prevHovered, setPrevHovered] = useState(false)
  const [nextHovered, setNextHovered] = useState(false)

  const handlePrevMouseEnter = () => setPrevHovered(prev !== "")
  const handlePrevMouseLeave = () => setPrevHovered(false)
  const handleNextMouseEnter = () => setNextHovered(next !== "")
  const handleNextMouseLeave = () => setNextHovered(false)

  const nextPostLink = prefix ? `/${prefix}/${next}` : `/${next}`
  const prevPostLink = prefix ? `/${prefix}/${prev}` : `/${prev}`
  const listPostLink = prefix ? `/${prefix}/${list}` : `/${list}`

  return (
    <div className={styles.navigation}>
      <Inner>
        <div className={styles.container}>
          <div className={styles.topLine}>
            <Link
              className={classNames(styles.prev, { [styles.disabled]: !prev })}
              to={prevPostLink}
              onMouseEnter={handlePrevMouseEnter}
              onMouseLeave={handlePrevMouseLeave}
            >
              <img
                className={styles.icon}
                src={prevHovered ? ArrowLeftColorIcon : ArrowLeftIcon}
                alt=""
              />
              <span className={styles.label}>Предыдущая работа</span>
            </Link>
            <Link
              className={classNames(styles.list, styles.desktop, {
                [styles.disabled]: !list,
              })}
              to={listPostLink}
            >
              Вернуться в портфолио
            </Link>
            <Link
              className={classNames(styles.next, { [styles.disabled]: !next })}
              to={nextPostLink}
              onMouseEnter={handleNextMouseEnter}
              onMouseLeave={handleNextMouseLeave}
            >
              <img
                className={styles.icon}
                src={nextHovered ? ArrowRightColorIcon : ArrowRightIcon}
                alt=""
              />
              <span className={styles.label}>Сдедующая работа</span>
            </Link>
          </div>
          <Link
            className={classNames(styles.list, styles.mobile, {
              [styles.disabled]: !list,
            })}
            to={listPostLink}
          >
            Вернуться в портфолио
          </Link>
        </div>
      </Inner>
    </div>
  )
}

WorkTemplate.propTypes = {
  prev: PropTypes.string,
  next: PropTypes.string,
  list: PropTypes.string,
  prefix: PropTypes.string,
}

export default WorkTemplate