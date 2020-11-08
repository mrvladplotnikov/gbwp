import React from "react"
import PropTypes from "prop-types"
import {
  FaFacebookF,
  FaInstagram,
  FaSoundcloud,
  FaVimeoV,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa"

const SocialIcon = ({ name = "", ...props }) => {
  switch (name) {
    case "facebook":
      return <FaFacebookF {...props} />
    case "instagram":
      return <FaInstagram {...props} />
    case "soundcloud":
      return <FaSoundcloud {...props} />
    case "vimeo":
      return <FaVimeoV {...props} />
    case "twitter":
      return <FaTwitter {...props} />
    case "linkedin":
      return <FaLinkedinIn {...props} />
    default:
      return null
  }
}

SocialIcon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default SocialIcon
