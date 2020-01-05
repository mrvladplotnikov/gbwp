import React from "react"
import PropTypes from "prop-types"
import { Inner } from "../Container"
import Headline from "../Headline"
import { FormattedMessage } from "react-intl"
import { graphql, useStaticQuery } from "gatsby"

const ContactUs = ({ email }) => {
  const {
    site: {
      siteMetadata: { socialLinks },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
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
            <FormattedMessage id="contactTitle" />
          </Headline>
          <p className="ContactUs__text">
            <FormattedMessage id="contactText" />
          </p>
          <a className="ContactUs__email" href={`mailto:${email}`}>
            {email}
          </a>
        </div>
        <div className="ContactUs__col">
          <ul className="ContactUs__socialLinks">
            {socialLinks.map((sc, i) => (
              <li key={i}>
                <a
                  className="ContactUs__link"
                  target="_blank"
                  rel="me noopener noreferrer"
                  href={sc.link}
                >
                  {sc.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Inner>
  )
}

ContactUs.defaultProps = {
  email: "",
}

ContactUs.propTypes = {
  email: PropTypes.string,
}

export default ContactUs
