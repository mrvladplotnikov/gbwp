import React from "react"
import Layout from "../layouts/en/empty"
import StyledLink from "../components/StyledLink"
import { Inner } from "../components/Container"
import styles from "./styles-404.module.css"

const NotFoundPage = ({ location }) => (
  <Layout location={location} title="404: Not found">
    <Inner className={styles.container}>
      <svg
        className={styles.logo}
        width="77"
        height="71"
        viewBox="0 0 77 71"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M77 0.0795705L73.5022 7.38289L73.5018 7.3835L60.65 35.0576V35.0577L57.2777 42.3551H46.2419H46.2051L46.1893 42.3894L36.9336 62.3231L36.9332 62.3242L36.7444 62.751L36.7439 62.7521L32.9169 71L0 0.0411116L7.9146 0.0602803L32.8643 53.6239L32.9169 53.7369L32.9695 53.6239L38.1746 42.461V42.4609L41.5846 35.1244H49.6489H52.6016H52.6384L52.6543 35.0903L65.544 7.41629L65.5839 7.33045L65.4918 7.32985L62.4823 7.31044H62.4819H54.5491L57.9004 0.0409902L65.9077 0.0602803L65.9078 0L65.9077 0.0602803L77 0.0795705Z"
          fill="#BEBEBE"
        />
      </svg>
      <h1 className={styles.notFoundCode}>404</h1>
      <StyledLink to="/">Home</StyledLink>
    </Inner>
  </Layout>
)

export default NotFoundPage
