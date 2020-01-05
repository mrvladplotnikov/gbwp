import React from "react"
import PropTypes from "prop-types"
import NestedItem from "./NestedItem"
import Item from "./Item"

const List = ({ navMenu = [], locale = "uk" }) => (
  <ul className="NavigationDrawer__list">
    {navMenu.map((item, index) => {
      return item.child ? (
        <NestedItem
          key={index}
          label={item.label[locale]}
          child={item.child}
          locale={locale}
        />
      ) : (
        <Item key={index} label={item.label[locale]} link={item.link[locale]} />
      )
    })}
  </ul>
)

List.propTypes = {
  navMenu: PropTypes.array,
  locale: PropTypes.string,
}

export default List
