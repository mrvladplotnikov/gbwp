import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SocialLinks = ({ socialLinks = [] }) => {
  if (socialLinks.length === 0) return null

  return (
    <ul className={styles.socialLinks}>
      {socialLinks.map((item, index) => (
        <li key={index}>
          <a
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            href={item.link}
          >
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
