import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import { Inner } from "../Container"
import Headline from "../Headline"
import { FormattedMessage } from "react-intl"
import { graphql, useStaticQuery } from "gatsby"

const ContactUs = ({
  email,
  facebook,
  soundcloud,
  twitter,
  instagram,
  vimeo,
  linkedin,
}) => {
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
      <div className={styles.container}>
        <div className={styles.col}>
          <Headline className={styles.title}>
            <FormattedMessage id="contactTitle" />
          </Headline>
          <p className={styles.text}>
            <FormattedMessage id="contactText" />
          </p>
          <a className={styles.email} href={`mailto:${email}`}>
            {email}
          </a>
        </div>
        <div className={styles.col}>
          <ul className={styles.socialLinks}>
            {socialLinks.map((sc, i) => (
              <li key={i}>
                <a
                  className={styles.link}
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
  facebook: "",
  soundcloud: "",
  twitter: "",
  instagram: "",
  vimeo: "",
  linkedin: "",
}

ContactUs.propTypes = {
  email: PropTypes.string,
  facebook: PropTypes.string,
  soundcloud: PropTypes.string,
  twitter: PropTypes.string,
  instagram: PropTypes.string,
  vimeo: PropTypes.string,
  linkedin: PropTypes.string,
}

export default ContactUs
