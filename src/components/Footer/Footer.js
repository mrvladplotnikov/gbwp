import React from "react"
import styles from "./styles.module.css"
import { Outer } from "../Container"
import footerLogoIcon from "../../images/footer-logo.svg"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = ({
  facebook,
  soundcloud,
  twitter,
  instagram,
  vimeo,
  linkedin,
}) => (
  <div className={styles.container}>
    <Outer>
      <div className={styles.innerContainer}>
        <div className={styles.col}>
          <ul className={styles.footerLinks}>
            <li>
              <a
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                href={facebook}
              >
                <FontAwesomeIcon icon={["fab", "facebook-f"]} />
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                href={instagram}
              >
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                href={soundcloud}
              >
                <FontAwesomeIcon icon={["fab", "soundcloud"]} />
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                href={vimeo}
              >
                <FontAwesomeIcon icon={["fab", "vimeo-v"]} />
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                href={twitter}
              >
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                href={linkedin}
              >
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
              </a>
            </li>
          </ul>
          <Link className={styles.privacyPolicy} to="/">
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
              alt="Footer logo"
            />
          </Link>
        </div>
      </div>
    </Outer>
  </div>
)

export default Footer
