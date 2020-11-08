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
import { FaTimes } from "react-icons/fa"
import axios from "axios"
import ReCAPTCHA from "react-google-recaptcha"

Modal.setAppElement("#___gatsby")

const sendMail = async ({
  name = "",
  email = "",
  lang = "",
  url = "",
  type = "",
}) => {
  try {
    const response = await axios(process.env.MAILER_ENDPOINT, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      data: {
        name,
        email,
        lang,
        url,
        type,
      },
    })

    if (response.status === 200) {
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
      captcha: "",
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

  const handleCaptchaChange = value => {
    formik.setFieldValue("captcha", value)
  }

  return (
    <Modal
      isOpen={open}
      contentLabel="Details"
      closeTimeoutMS={300}
      style={{
        overlay: {
          zIndex: 2001,
          background: "rgba(0, 0, 0, 0.94)",
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
        <button
          type="button"
          onClick={handleClose}
          className="ModalContactForm__closeButton"
        >
          <FaTimes />
        </button>
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

          <div className="ModalContactForm__captcha">
            <ReCAPTCHA
              sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
              onChange={handleCaptchaChange}
              theme="dark"
              hl={intl.locale}
            />
          </div>

          <div className="ModalContactForm__actions">
            <FormattedHTMLMessage id="subscriptionPrivacy" />
            <FormButton
              disabled={!formik.values.captcha}
              type="submit"
              loading={formik.isSubmitting}
            >
              {intl.formatMessage({ id: "submit" })}
            </FormButton>
          </div>
        </form>
      </Outer>
    </Modal>
  )
}

ModalContactForm.defaultProps = {
  type: "reference",
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
