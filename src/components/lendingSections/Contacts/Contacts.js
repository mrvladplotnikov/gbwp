import React from "react"
import ContactUs from "../../ContactUs/ContactUs"
import styles from "./styles.module.css"

const Contacts = () => (
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

export default Contacts
