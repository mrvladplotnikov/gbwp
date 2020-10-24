import React from "react"
import PropTypes from "prop-types"
import { Inner } from "../Container"
import Headline from "../Headline"
import { FormattedMessage } from "react-intl"
import { graphql, useStaticQuery } from "gatsby"
import ContactLink from "./ContactLink"

const ContactUs = ({ title, children }) => {
  const {
    site: {
      siteMetadata: { socialLinks, adminEmail },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            adminEmail
            socialLinks {
              name
              link
            }
          }
        }
      }
    `
  )

  return (
    <Inner>
      <div className="ContactUs__container">
        <div className="ContactUs__col">
          <Headline className="ContactUs__title">
            {title ? title : <FormattedMessage id="contactTitle" />}
          </Headline>
          <p className="ContactUs__text">
            {children ? children : <FormattedMessage id="contactText" />}
          </p>
          <a className="ContactUs__email" href={`mailto:${adminEmail}`}>
            {adminEmail}
          </a>
        </div>
        <div className="ContactUs__col">
          <ul className="ContactUs__contactsLinks">
            {socialLinks.map((sc, i) => (
              <li key={i}>
                <ContactLink href={sc.link} label={sc.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Inner>
  )
}

ContactUs.defaultProps = {
  title: "",
  children: "",
}

ContactUs.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default ContactUs
