import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

import { Outer } from "../Container"
import SocialIcon from "../SocialIcon"

import styles from "./styles.module.css"

import footerLogoIcon from "../../images/footer-logo.svg"

const GET_SOCIAL_LINKS = graphql`
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

const Footer = ({ disableOuterContainer = false }) => {
  const { t } = useTranslation()
  const {
    site: {
      siteMetadata: { socialLinks },
    },
  } = useStaticQuery(GET_SOCIAL_LINKS)

  const OuterContainer = disableOuterContainer ? Fragment : Outer

  return (
    <div className={styles.container}>
      <OuterContainer>
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
                    <SocialIcon name={item.name} title={item.title} />
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
                alt={t("footerLogoAlt")}
                loading="lazy"
                width="76"
                height="70"
              />
            </Link>
          </div>
        </div>
      </OuterContainer>
    </div>
  )
}
export default Footer
