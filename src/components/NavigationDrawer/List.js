import React from "react"
import PropTypes from "prop-types"
import { useI18next } from "gatsby-plugin-react-i18next"

import NestedItem from "./NestedItem"
import Item from "./Item"

const List = ({ navMenu = [] }) => {
  const { language } = useI18next()

  return (
    <ul className="NavigationDrawer__list">
      {navMenu.map((item, index) => {
        return item.child ? (
          <NestedItem
            key={index}
            label={item.label[language]}
            child={item.child}
            locale={language}
          />
        ) : (
          <Item
            key={index}
            label={item.label[language]}
            link={item.link[language]}
          />
        )
      })}
    </ul>
  )
}

List.propTypes = {
  navMenu: PropTypes.array,
}

export default List
