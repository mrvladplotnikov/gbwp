import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const NavItem = ({ label = "", link = "" }) => (
  <li>
    <Link to={link}>{label}</Link>
  </li>
)

NavItem.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
}

export default NavItem
