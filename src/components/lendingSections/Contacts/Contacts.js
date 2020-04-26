import React from "react"
import PropTypes from "prop-types"
import ContactUs from "../../ContactUs/ContactUs"

const Contacts = ({ title, children }) => (
  <section className="Contacts">
    <ContactUs title={title}>{children}</ContactUs>
  </section>
)

Contacts.defaultProps = {
  title: "",
  children: "",
}

Contacts.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Contacts
