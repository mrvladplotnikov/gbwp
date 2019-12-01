import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import styles from "./styles.module.css"

const CardDeckItem = ({ variant = "rect", textAlign = "left", children }) => {
  return (
    <div
      className={classNames(styles.card, {
        [styles.rect]: variant === "rect",
        [styles.rectRevers]: variant === "rect-revers",
        [styles.waves]: variant === "waves",
        [styles.wavesRevers]: variant === "waves-revers",
        [styles.fullWaves]: variant === "full-waves",
        [styles.circle]: variant === "circle",
      })}
    >
      <div
        className={styles.content}
        style={{
          textAlign,
        }}
      >
        {children}
      </div>
    </div>
  )
}

CardDeckItem.propTypes = {
  variant: PropTypes.oneOf([
    "rect",
    "rect-revers",
    "waves",
    "waves-revers",
    "full-waves",
    "circle",
  ]),
  textAlign: PropTypes.oneOf(["left", "center", "right", "justify"]),
  children: PropTypes.node.isRequired,
}

export default CardDeckItem
