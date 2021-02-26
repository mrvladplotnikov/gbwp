import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { Trans } from "gatsby-plugin-react-i18next"

import { Inner } from "../Container"
import Headline from "../Headline"
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
            {title ? title : <Trans i18nKey="contactTitle" />}
          </Headline>
          <p className="ContactUs__text">
            {children ? children : <Trans i18nKey="contactText" />}
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
