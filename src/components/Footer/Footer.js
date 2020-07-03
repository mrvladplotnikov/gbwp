import React from "react"
import styles from "./styles.module.css"
import { Outer } from "../Container"
import footerLogoIcon from "../../images/footer-logo.svg"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useStaticQuery, graphql } from "gatsby"
import { injectIntl } from "react-intl"

const Footer = ({ intl }) => {
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
              icon
              title
            }
          }
        }
      }
    `
  )

  return (
    <div className={styles.container}>
      <Outer>
        <div className={styles.innerContainer}>
          <div className={styles.col}>
            <ul className={styles.footerLinks}>
              {socialLinks.map((item, index) => (
                <li key={index}>
                  <a
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    href={item.link}
                  >
                    <FontAwesomeIcon
                      icon={["fab", item.icon]}
                      title={item.title}
                    />
                  </a>
                </li>
              ))}
            </ul>
            <Link className={styles.privacyPolicy} to="/privacy-policy">
              Privacy Policy
            </Link>
          </div>
          <div className={styles.col}>
            <div className={styles.footerTitle}>Change The Record</div>
            <div className={styles.footerRights}>
              all rights reserved © VP Production. {new Date().getFullYear()}
            </div>
          </div>
          <div className={styles.col}>
            <Link to="/">
              <img
                src={footerLogoIcon}
                className={styles.footerLogo}
                alt={intl.formatMessage({ id: "footerLogoAlt" })}
              />
            </Link>
          </div>
        </div>
      </Outer>
    </div>
  )
}
export default injectIntl(Footer)
