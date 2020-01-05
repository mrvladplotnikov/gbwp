import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SocialLinks = ({ socialLinks = [] }) => {
  if (socialLinks.length === 0) return null

  return (
    <ul className={"NavigationDrawer__soc-links"}>
      {socialLinks.map((item, index) => (
        <li key={index}>
          <a target="_blank" rel="noopener noreferrer" href={item.link}>
            <FontAwesomeIcon icon={["fab", item.icon]} />
          </a>
        </li>
      ))}
    </ul>
  )
}

SocialLinks.propTypes = {
  socialLinks: PropTypes.array,
}

export default SocialLinks
