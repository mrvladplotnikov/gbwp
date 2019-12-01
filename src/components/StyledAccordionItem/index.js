import React from "react"
import PropTypes from "prop-types"
import OpenIcon from "../../images/add.inline.svg"
import CloseIcon from "../../images/close.inline.svg"
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion"

import styles from "./styles.module.css"

const StyledAccordionItem = ({ index = 0, title, children }) => {
  return (
    <AccordionItem className={styles.item}>
      <AccordionItemHeading className={styles.heading}>
        <AccordionItemButton className={styles.button}>
          <span className={styles.index}>{index}.</span>
          {title}
          <AccordionItemState>
            {({ expanded }) =>
              expanded ? (
                <CloseIcon className={styles.icon} />
              ) : (
                <OpenIcon className={styles.icon} />
              )
            }
          </AccordionItemState>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel className={styles.content}>
        {children}
      </AccordionItemPanel>
    </AccordionItem>
  )
}

StyledAccordionItem.propTypes = {
  index: PropTypes.number,
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default StyledAccordionItem
