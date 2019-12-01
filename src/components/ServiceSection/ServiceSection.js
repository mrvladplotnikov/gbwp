import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./styles.module.css"

const ServiceSection = ({
  className = "",
  title = "",
  titleTag = "h2",
  children,
}) => {
  const Title = titleTag

  return (
    <section className={classNames(styles.section, className)}>
      <Title className={styles.title}>{title}</Title>
      <div className={styles.content}>{children}</div>
    </section>
  )
}

ServiceSection.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  titleTag: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default ServiceSection
