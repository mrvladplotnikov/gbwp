import React from "react"
import styles from "./styles.module.css"
const SocialLinks = () => (
  <ul className={styles.SocialLinks}>
    <li>
      <a className={styles.link} href="/" rel="me" target="_blank">
        facebook
        <span className={styles.arrow}></span>
      </a>
    </li>
    /
    <li>
      <a className={styles.link} href="/" rel="me" target="_blank">
        instagram
        <span className={styles.arrow}></span>
      </a>
    </li>
    /
    <li>
      <a className={styles.link} href="/" rel="me" target="_blank">
        linkedin
        <span className={styles.arrow}></span>
      </a>
    </li>
  </ul>
)

export default SocialLinks
