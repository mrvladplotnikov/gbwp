import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { Outer } from "../Container"
import boxOfDotsLink from "../../images/box-of-dots.svg"
import boxOfDotsWhiteLink from "../../images/box-of-dots-white.svg"
import Button from "~components/Button"

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
      <div className="SectionWithText__text">{children}</div>
      {link && (
        <div className="SectionWithText__linkContainer">
          <Button to={link}>{linkLabel}</Button>
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
