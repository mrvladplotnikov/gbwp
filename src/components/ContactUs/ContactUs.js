import React from "react"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import { Inner } from "../Container"
import Headline from "../Headline"

const ContactUs = ({
  email,
  facebook,
  soundcloud,
  twitter,
  instagram,
  vimeo,
  linkedin,
}) => {
  return (
    <Inner>
      <div className={styles.container}>
        <div className={styles.col}>
          <Headline className={styles.title}>Напишите нам</Headline>
          <p className={styles.text}>
            Расскажите нам о своём проекте, продукте или идее. Спросите совет
            или получите полноценную бесплатную консультацию. Узнайте цены,
            уточните важный вопрос, да что угодно! Мы будем рады с вами
            познакомиться и помочь.
          </p>
          <a className={styles.email} href={`mailto:${email}`}>
            {email}
          </a>
        </div>
        <div className={styles.col}>
          <ul className={styles.socialLinks}>
            <li>
              <a
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                href={facebook}
              >
                facebook
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                href={soundcloud}
              >
                soundcloud
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                href={twitter}
              >
                twitter
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                href={instagram}
              >
                instagram
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                href={vimeo}
              >
                vimeo
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                href={linkedin}
              >
                linkedin
              </a>
            </li>
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
