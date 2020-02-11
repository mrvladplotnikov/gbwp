import React, { useState } from "react"
import PropTypes from "prop-types"
import Modal from "react-modal"
import { useFormik } from "formik"
import { object, string } from "yup"
import FormGroup from "../FormGroup"
import FormButton from "../FormButton"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./styles.module.css"
import { Outer } from "../Container"
import Headline from "../Headline"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { injectIntl, intlShape, FormattedHTMLMessage } from "react-intl"

Modal.setAppElement("#___gatsby")

const renderFormStatusMessage = result => {
  if (result.result === "success")
    return <span className={styles.formMsgSuccess}>Успех</span>

  if (result.msg.includes("already subscribed"))
    return <span className={styles.formMsg}>Уже подписан</span>

  return (
    <span className={styles.formMsgError}>
      Ошибка, попробуйте позже или свяжитесь с нами
    </span>
  )
}

const validationSchema = object({
  firstName: string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: string()
    .email("Invalid email address")
    .required("Required"),
})

const ModalContactForm = ({ open, onClose, intl }) => {
  const [formResult, setFormResult] = useState(null)

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
    },
    onSubmit: async (values, actions) => {
      const result = await addToMailchimp(values.email, {
        FNAME: values.firstName,
        LANG: intl.locale,
      })
      setFormResult(result)
      actions.setSubmitting(false)
      if (result.result === "success") {
        setTimeout(() => {
          onClose()
        }, 1000)
      }
    },
    validationSchema,
  })

  return (
    <Modal
      isOpen={open}
      onRequestClose={onClose}
      contentLabel="Details"
      className={styles.modal}
      closeTimeoutMS={300}
      style={{
        overlay: {
          zIndex: 2001,
          background: "rgba(0, 0, 0, 0.86)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        content: {
          maxHeight: "90vh",
          background: "transparent",
          position: "relative",
          borderRadius: 0,
          border: "none",
          overflowX: "hidden",
          outline: "none",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
      }}
    >
      <Outer className={styles.container}>
        <button
          type="button"
          onClick={onClose}
          className={styles.closeModalButton}
        >
          <FontAwesomeIcon icon={["fas", "times"]} />
        </button>
        <Headline className={styles.title} Tag="h2">
          {intl.formatHTMLMessage({ id: "subscriptionTitle" })}
        </Headline>
        <p className={styles.subTitle}>
          {intl.formatHTMLMessage({ id: "subscriptionSubTitle" })}
        </p>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <div className={styles.formState}>
            {formResult && renderFormStatusMessage(formResult)}
          </div>
          <div className={styles.formGroups}>
            <FormGroup
              name="firstName"
              label={intl.formatMessage({ id: "firstName" })}
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              error={formik.touched.firstName && formik.errors.firstName}
            />
            <FormGroup
              name="email"
              label="Email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.touched.email && formik.errors.email}
            />
          </div>
          <div className={styles.actions}>
            <FormattedHTMLMessage id="subscriptionPrivacy" />
            <FormButton type="submit" loading={formik.isSubmitting}>
              {intl.formatMessage({ id: "submit" })}
            </FormButton>
          </div>
        </form>
      </Outer>
    </Modal>
  )
}

ModalContactForm.defaultProps = {
  open: false,
  onClose: () => {},
}

ModalContactForm.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  intl: intlShape,
}

export default injectIntl(ModalContactForm)
