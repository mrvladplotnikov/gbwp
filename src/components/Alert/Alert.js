import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import styles from "./styles.module.scss"

const Alert = ({
  className = "",
  children,
  onClose,
  buttonLabel = "",
  onButtonClick,
  ...props
}) => {
  return (
    <div className={classnames(styles.Alert, className)} {...props}>
      <CokkieImage />
      <div className={styles.content}>{children}</div>

      {onClose && (
        <button
          onClick={onClose}
          className={styles.closeIcon}
          type="butotn"
          aria-label="Close"
        >
          <CloseIcon />
        </button>
      )}
      {onButtonClick && (
        <button onClick={onButtonClick} type="butotn" className={styles.button}>
          {buttonLabel}
        </button>
      )}
    </div>
  )
}

Alert.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  buttonLabel: PropTypes.string,
  onButtonClick: PropTypes.func,
}

const CloseIcon = () => (
  <svg
    width="23"
    height="23"
    viewBox="0 0 23 23"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="30.5171"
      height="1.50084"
      transform="matrix(0.705212 0.708997 -0.705212 0.708997 1.47949 0.299438)"
    />
    <rect
      width="30.5171"
      height="1.50084"
      transform="matrix(0.705212 -0.708997 0.705212 0.708997 0 21.6365)"
    />
  </svg>
)

const CokkieImage = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 81 81"
    width="81"
    height="81"
    className={styles.cokkieImage}
  >
    <defs />
    <path
      fill="#fff"
      d="M40.5 81A40.3 40.3 0 010 40c0-.8.3-1.5.8-2.1.5-.6 1.1-1 1.8-1.1 3-.8 5.5-2.8 7-5.6a3.4 3.4 0 014.1-1.6 10.7 10.7 0 0014.6-10V19l-.2-.5a3.4 3.4 0 013.3-3.8c4.8-.1 9-3.5 10-8.2a6.9 6.9 0 018.3-5A40.1 40.1 0 0181 40.7 40.4 40.4 0 0140.5 81zM6.8 42.5a33.6 33.6 0 0033.7 31.8c18.6 0 33.8-15.1 33.8-33.6 0-15.6-10.8-29-26-32.6H48a17.4 17.4 0 01-13 13 17.5 17.5 0 01-21 15.7 17.6 17.6 0 01-7.2 5.7z"
    />
    <path
      fill="#fff"
      d="M49 33.8a5 5 0 100-10.2 5 5 0 000 10.2zM25.3 54a5 5 0 100-10.1 5 5 0 000 10.1zM52.3 60.8a5 5 0 100-10.2 5 5 0 000 10.2zM40.5 43.9a3.4 3.4 0 100-6.8 3.4 3.4 0 000 6.8zM33.8 64.1a3.4 3.4 0 100-6.7 3.4 3.4 0 000 6.7zM30.4 6.8a3.4 3.4 0 100-6.8 3.4 3.4 0 000 6.8zM15.2 23.6a5 5 0 100-10.1 5 5 0 000 10.1zM60.8 43.9a3.4 3.4 0 100-6.8 3.4 3.4 0 000 6.8z"
    />
  </svg>
)

export default Alert
