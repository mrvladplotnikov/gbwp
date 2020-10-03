import React from "react"
import classNames from "classnames"
import styles from "./styles.module.css"
import Layout from "../../layouts/uk/default"
import Headline from "../../components/Headline"
import { Inner } from "../../components/Container"

const OurValues = ({ location }) => (
  <Layout
    location={location}
    title="Our values"
    description="Our beliefs. Our manifesto. What defines our approach to creating audio and doing business in general. ✔ It will allow you to get to know us even better."
    noindex
  >
    <div className={styles.container}>
      <div className={classNames(styles.module, styles.rectImg)}>
        <Inner>
          <Headline Tag="h2" className={styles.largeText}>
            Our values.
          </Headline>
          <Headline Tag="h2" className={styles.largeText}>
            Our beliefs.
          </Headline>
          <Headline Tag="h2" className={styles.largeText}>
            Our manifesto.
          </Headline>
        </Inner>
      </div>

      <div className={classNames(styles.module, styles.pseudoImg)}>
        <Inner>
          <h5 className={styles.text}>
            We believe that sound is a natural way of communication, and we only
            give it the shape and vector it needs.
          </h5>
        </Inner>
      </div>

      <div className={styles.module}>
        <Inner>
          <h5 className={styles.text}>
            We believe that music is one of the most significant forms of art
            and deserves respect.
          </h5>
        </Inner>
      </div>

      <div className={styles.module}>
        <Inner>
          <h5 className={styles.text}>
            We believe in the power of open, sincere communication.
          </h5>
        </Inner>
      </div>

      <div className={styles.module}>
        <Inner>
          <h5 className={styles.text}>
            We value people and human relationships.
          </h5>
        </Inner>
      </div>

      <div className={styles.module}>
        <Inner>
          <h5 className={styles.text}>
            We know that each of us is capable of changing the world, but only
            together can we truly make a difference.
          </h5>
        </Inner>
      </div>
    </div>
  </Layout>
)

export default OurValues
