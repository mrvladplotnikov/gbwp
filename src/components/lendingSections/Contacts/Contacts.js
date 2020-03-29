import React from "react"
import PropTypes from "prop-types"
import ContactUs from "../../ContactUs/ContactUs"

const Contacts = ({ title, children }) => (
  <section className="Contacts">
    <ContactUs
      email="connect@vp-production.com"
      title={title}
      content={children}
    />
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
