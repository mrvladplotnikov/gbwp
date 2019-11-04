import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./styles.module.css"
import StyledLink from "../StyledLink"
import { Outer } from "../Container"
import boxOfDotsLink from "../../images/box-of-dots.svg"
import boxOfDotsWhiteLink from "../../images/box-of-dots-white.svg"

const SectionBox = ({ className }) => {
  const [hover, setHover] = useState(false)

  return (
    <img
      className={classNames(styles.box, className)}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      src={hover ? boxOfDotsLink : boxOfDotsWhiteLink}
      alt=""
    />
  )
}

const SectionWithText = ({ link = "", linkLabel = "", children }) => (
  <section className={styles.section}>
    <Outer className={styles.outer}>
      <SectionBox className={styles.boxTopLeft} />
      <SectionBox className={styles.boxTopRight} />
      <SectionBox className={styles.boxBottomLeft} />
      <SectionBox className={styles.boxBottomRight} />
      {children}
      {link && (
        <div className={styles.linkContainer}>
          <StyledLink to={link}>{linkLabel}</StyledLink>
        </div>
      )}
    </Outer>
  </section>
)

SectionWithText.propTypes = {
  link: PropTypes.string,
  linkLabel: PropTypes.string,
}

export default SectionWithText
