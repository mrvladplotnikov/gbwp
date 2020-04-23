import React from "react"
import PropTypes from "prop-types"
import Modal from "react-modal"
import { useFormik } from "formik"
import { object, string } from "yup"
import { wrapComponent } from "react-snackbar-alert"
import FormGroup from "../FormGroup"
import FormButton from "../FormButton"
import { Outer } from "../Container"
import Headline from "../Headline"
import { injectIntl, intlShape, FormattedHTMLMessage } from "react-intl"

Modal.setAppElement("#___gatsby")

const sendMail = async ({
  name = "",
  email = "",
  lang = "",
  url = "",
  type = "",
}) => {
  try {
    const response = await fetch("https://vp-production.com/mail/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
      body: new URLSearchParams({
        name,
        email,
        lang,
        url,
        type,
      }),
    })

    const result = await response.json()

    if (result.status === "Ok") {
      return {
        status: "Ok",
      }
    }

    return {
      status: "Error",
    }
  } catch (error) {
    console.error(error)
    return {
      status: "Error",
    }
  }
}

const ModalContactForm = ({
  open,
  type,
  onClose,
  intl,
  title,
  subTitle,
  customLocation,
  createSnackbar,
}) => {
  const validationSchema = object({
    firstName: string().required(intl.formatMessage({ id: "required" })),
    email: string()
      .email(intl.formatMessage({ id: "invalidemail" }))
      .required(intl.formatMessage({ id: "required" })),
  })

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
    },
    onSubmit: async ({ firstName, email }, actions) => {
      const result = await sendMail({
        type,
        name: firstName,
        email,
        lang: intl.locale,
        url: !customLocation
          ? window.location.href
          : `${window.location.href}/${customLocation}`,
      })

      if (result.status === "Ok") {
        createSnackbar({
          message: intl.formatMessage({ id: "successMailSend" }),
          theme: "success",
        })
      } else {
        createSnackbar({
          message: intl.formatMessage({ id: "errorMailSend" }),
          theme: "error",
        })
      }

      actions.setSubmitting(false)
      actions.resetForm()
      onClose()
    },
    validationSchema,
  })

  const handleClose = () => {
    formik.resetForm()
    onClose()
  }

  return (
    <Modal
      isOpen={open}
      onRequestClose={handleClose}
      contentLabel="Details"
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
          width: "100%",
          right: 0,
          bottom: 0,
        },
      }}
    >
      <Outer className="ModalContactForm__container">
        <Headline className="ModalContactForm__title" Tag="h2">
          {title}
        </Headline>
        <p className="ModalContactForm__subTitle">{subTitle}</p>
        <form className="ModalContactForm__form" onSubmit={formik.handleSubmit}>
          <div className="ModalContactForm__formGroups">
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
          <div className="ModalContactForm__actions">
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
  type: "",
  open: false,
  onClose: () => {},
  title: "",
  subTitle: "",
  customLocation: "",
}

ModalContactForm.propTypes = {
  type: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.node,
  subTitle: PropTypes.node,
  intl: intlShape,
  customLocation: PropTypes.string,
}

export default wrapComponent(injectIntl(ModalContactForm))
