import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./styles.module.css"

const ServiceSection = ({
  className = "",
  title = "",
  titleTag = "h2",
  children,
  noGatters = false,
}) => {
  const Title = titleTag

  return (
    <section
      className={classNames(styles.section, className, {
        [styles.gutters]: !noGatters,
      })}
    >
      <Title
        className={classNames(styles.title, { [styles.gutters]: noGatters })}
      >
        {title}
      </Title>
      <div className={styles.content}>{children}</div>
    </section>
  )
}

ServiceSection.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  titleTag: PropTypes.string,
  children: PropTypes.node.isRequired,
  noGatters: PropTypes.bool,
}

export default ServiceSection
