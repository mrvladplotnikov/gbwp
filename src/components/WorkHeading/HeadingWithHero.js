import React from "react"
import PropTypes from "prop-types"

import styles from "./styles.module.css"

const HeadingWithHero = ({ title }) => (
  <div className={styles.headingHero}>
    <h1
      className={styles.mainTitleHero}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  </div>
)

HeadingWithHero.propTypes = {
  title: PropTypes.string.isRequired,
}

export default HeadingWithHero
