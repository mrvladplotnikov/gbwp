import React from "react"
import PropTypes from "prop-types"
import ContactUs from "../../ContactUs/ContactUs"
import styles from "./styles.module.css"

const Contacts = props => {
  return (
    <section className={styles.Contacts}>
      <ContactUs
        email="vpsoundprod@gmail.com"
        facebook="#"
        soundcloud="#"
        twitter="#"
        instagram="#"
        vimeo="#"
        linkedin="#"
      />
    </section>
  )
}

export default Contacts
