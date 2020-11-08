import React from "react"
import PropTypes from "prop-types"

import SocialIcon from "../SocialIcon"

const SocialLinks = ({ socialLinks = [] }) => {
  if (socialLinks.length === 0) return null

  return (
    <ul className={"NavigationDrawer__soc-links"}>
      {socialLinks.map((item, index) => (
        <li key={index}>
          <a
            target="_blank"
            rel="noopener noreferrer nofollow"
            href={item.link}
          >
            <SocialIcon name={item.name} title={item.title} />
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
