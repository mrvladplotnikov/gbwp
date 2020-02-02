import React from "react"
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

Modal.setAppElement("#___gatsby")

const validationSchema = object({
  firstName: string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  email: string()
    .email("Invalid email address")
    .required("Required"),
})

const ModalContactForm = ({ open, onClose }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
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
          Темплейт технического задания
        </Headline>
        <p className={styles.subTitle}>
          Мы уверены, что правильно составленное ТЗ повышает шансы на успех
          проекта. Поэтому с радостью делимся тем, что работает для нас!
        </p>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <div className={styles.formGroups}>
            <FormGroup
              name="firstName"
              label="First name"
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
            <p>
              Отправляя эту форму, вы соглашаетесь с{" "}
              <a href="/">нашей политикой конфиденциальности</a>.
            </p>
            <FormButton type="submit" disabled={formik.isSubmitting}>
              Submit
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
}

export default ModalContactForm
