import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import StyledLink from "../StyledLink"
import { Outer } from "../Container"
import boxOfDotsLink from "../../images/box-of-dots.svg"
import boxOfDotsWhiteLink from "../../images/box-of-dots-white.svg"

const SectionBox = ({ className }) => {
  const [hover, setHover] = useState(false)

  return (
    <img
      className={classNames("SectionWithText__box", className)}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      src={hover ? boxOfDotsLink : boxOfDotsWhiteLink}
      role="presentation"
      aria-hidden="true"
      alt=""
    />
  )
}

const SectionWithText = ({ link = "", linkLabel = "", children, ...props }) => (
  <section className="SectionWithText" {...props}>
    <Outer className="SectionWithText__outer">
      <SectionBox className="SectionWithText__box--box-TopLeft" />
      <SectionBox className="SectionWithText__box--box-TopRight" />
      <SectionBox className="SectionWithText__box--box-BottomLeft" />
      <SectionBox className="SectionWithText__box--box-BottomRight" />
      {children}
      {link && (
        <div className="SectionWithText__linkContainer">
          <StyledLink to={link}>{linkLabel}</StyledLink>
        </div>
      )}
    </Outer>
  </section>
)

SectionWithText.propTypes = {
  link: PropTypes.string,
  linkLabel: PropTypes.string,
}

export default SectionWithText
