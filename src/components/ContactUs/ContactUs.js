import React from "react"
import PropTypes from "prop-types"
import { Inner } from "../Container"
import Headline from "../Headline"
import { FormattedMessage } from "react-intl"
import { graphql, useStaticQuery } from "gatsby"

const ContactUs = ({ title, content, email }) => {
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
            {title ? title : <FormattedMessage id="contactTitle" />}
          </Headline>
          <p className="ContactUs__text">
            {content ? content : <FormattedMessage id="contactText" />}
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
                  {sc.name}{" "}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.752 0.810547L19.9414 10L10.752 19.1895L9.87305 18.3105L17.5586 10.625H0V9.375H17.5586L9.87305 1.68945L10.752 0.810547Z"
                      fill="white"
                    />
                  </svg>
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
  title: "",
  content: "",
  email: "",
}

ContactUs.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
  email: PropTypes.string,
}

export default ContactUs
