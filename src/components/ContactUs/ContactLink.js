import React, { useState } from "react"

import gradientArrowR from "../../images/arrow-color-right.svg"
import arrowR from "../../images/arrow-right.svg"

const ContactLink = ({ href = "", label = "" }) => {
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => setIsHover(true)

  const handleMouseLeave = () => setIsHover(false)

  return (
    <a
      className="ContactUs__link"
      target="_blank"
      rel="noopener noreferrer nofollow"
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}{" "}
      <img
        src={!isHover ? arrowR : gradientArrowR}
        width="22"
        height="22"
        alt=""
        aria-hidden
      />
    </a>
  )
}

export default ContactLink
