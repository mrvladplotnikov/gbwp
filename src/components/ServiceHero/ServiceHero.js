import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./styles.module.css"
import boxOfDotsLink from "../../images/box-of-dots.svg"

const SectionBox = ({ className }) => (
  <img
    className={classNames(styles.box, className)}
    src={boxOfDotsLink}
    alt=""
  />
)

const ServiceHero = ({ children }) => (
  <section className={styles.section}>
    <SectionBox className={styles.boxTopLeft} />
    <SectionBox className={styles.boxTopRight} />
    <SectionBox className={styles.boxBottomLeft} />
    <SectionBox className={styles.boxBottomRight} />
    {children}
  </section>
)

ServiceHero.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ServiceHero
