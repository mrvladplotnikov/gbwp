import React, { useState } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import _padStart from "lodash/padStart"

import styles from "./styles.module.scss"

import arrowLong from "../../images/arrow-long.svg"
import arrowLongColor from "../../images/arrow-long-color.svg"

const formatNumber = (num = 0) => {
  return _padStart(num, 2, "0")
}

function Controls({ index, total }) {
  const [selectedButton, setSelectedButton] = useState(null)

  const handleButtonSelect = state => setSelectedButton(state)
  const handleButtonDeselect = () => {
    setSelectedButton(null)
  }

  const handlePrevButtonSelect = () => {
    handleButtonSelect("<")
  }
  const handleNextButtonSelect = () => {
    handleButtonSelect(">")
  }

  return (
    <div
      className={classnames(styles.arrows, "glide__arrows")}
      data-glide-el="controls"
    >
      <button
        className={classnames(styles.arrow, styles.arrowLeft)}
        onMouseOver={handlePrevButtonSelect}
        onMouseOut={handleButtonDeselect}
        onFocus={() => {}}
        onBlur={() => {}}
        data-glide-dir="<"
        aria-label="prev"
      >
        <img
          src={selectedButton === "<" ? arrowLongColor : arrowLong}
          width="70"
          height="17"
          aria-hidden
          alt=""
        />
      </button>
      <div className={styles.count}>
        <span className={styles.current}>{formatNumber(index + 1)}</span> /{" "}
        <span className={styles.total}>{formatNumber(total)}</span>
      </div>
      <button
        className={classnames(styles.arrow, styles.arrowRight)}
        onMouseOver={handleNextButtonSelect}
        onMouseOut={handleButtonDeselect}
        onFocus={() => {}}
        onBlur={() => {}}
        data-glide-dir=">"
        aria-label="next"
      >
        <img
          src={selectedButton === ">" ? arrowLongColor : arrowLong}
          width="70"
          height="17"
          aria-hidden
          alt=""
        />
      </button>
    </div>
  )
}

Controls.propTypes = {
  index: PropTypes.number,
  total: PropTypes.number,
}

export default Controls
