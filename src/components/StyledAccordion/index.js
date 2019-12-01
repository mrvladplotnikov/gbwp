import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

import { Accordion } from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"
import styles from "./styles.module.css"

const StyledAccordion = ({ className = "", children }) => {
  const elements = React.Children.map(children, (child, i) =>
    React.cloneElement(child, { index: i + 1 })
  )

  return (
    <Accordion
      allowZeroExpanded
      className={classNames(styles.accordion, className)}
    >
      {elements}
    </Accordion>
  )
}

StyledAccordion.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default StyledAccordion
