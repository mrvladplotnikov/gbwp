import React, { useState } from "react"

import PropTypes from "prop-types"
import { FaTimes } from "react-icons/fa"
import { CSSTransition } from "react-transition-group"

import "./styles.css"

const InfoBadge = ({ children, isOpenDefault = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault)
  const handleClose = () => setIsOpen(false)

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="info-badge"
      unmountOnExit
    >
      <div className="info-badge__container">
        <div className="info-badge__content">
          <button
            type="button"
            onClick={handleClose}
            className="info-badge__closeButton"
          >
            <FaTimes />
          </button>
          {children}
        </div>
      </div>
    </CSSTransition>
  )
}

InfoBadge.propTypes = {
  children: PropTypes.node.isRequired,
  isOpenDefault: PropTypes.bool,
}

export default InfoBadge
