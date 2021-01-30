import React, { useState, useEffect, Fragment } from "react"
import { injectIntl, FormattedHTMLMessage } from "react-intl"

import Alert from "~components/Alert"

const get = key => {
  let item

  try {
    item = JSON.parse(localStorage.getItem(key))
  } catch (error) {}

  return item
}

const set = (key, value) => {
  try {
    localStorage.setItem(key, value)
  } catch (error) {}
}

const KEY = "cookies_alert"

const AlertProvider = props => {
  const { children, intl } = props

  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    const cookiesAlert = get(KEY)
    if (cookiesAlert === 1) {
      setShowAlert(false)
    } else {
      setShowAlert(true)
    }
  }, [])

  const handleClose = () => {
    setShowAlert(false)
    set(KEY, 1)
  }

  return (
    <Fragment>
      {showAlert && (
        <Alert
          onClose={handleClose}
          onButtonClick={handleClose}
          buttonLabel={intl.formatMessage({ id: "alertButtonLabel" })}
        >
          <h4>
            <FormattedHTMLMessage id="alertTitle" />
          </h4>
          <p>
            <FormattedHTMLMessage id="alertBody" />
          </p>
        </Alert>
      )}
      {children}
    </Fragment>
  )
}

export default injectIntl(AlertProvider)
