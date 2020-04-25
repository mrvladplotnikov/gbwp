import React, { Fragment } from "react"
import styles from "./styles.module.css"
import { graphql, useStaticQuery } from "gatsby"

const SocialLinks = () => {
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
              showOnHome
              name
              link
            }
          }
        }
      }
    `
  )

  const links = socialLinks.filter(sc => sc.showOnHome === true)

  return (
    <ul className={styles.SocialLinks}>
      {links.map((sc, i) => (
        <Fragment key={i}>
          <li>
            <a
              className={styles.link}
              href={sc.link}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {sc.name}
              <span className={styles.arrow}></span>
            </a>
          </li>
          {i !== links.length - 1 ? "/" : ""}
        </Fragment>
      ))}
    </ul>
  )
}
export default SocialLinks
