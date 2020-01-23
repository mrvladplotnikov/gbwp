import React from "react"
import styles from "./styles.module.css"
import Layout from "../../layouts/uk/default"
import Headline from "../../components/Headline"
import { Inner } from "../../components/Container"
import classNames from "classnames"
// import rectItem from "../../images/cards-bg-vectors/rect.svg"

const WhoWeAre = ({ location }) => (
  <Layout location={location}>
    <div className={styles.container}>
      <div className={classNames(styles.module, styles.rectImg)}>
        <Inner>
          <Headline Tag="h2" className={styles.largeText}>
            Наши ценности.
          </Headline>
          <Headline Tag="h2" className={styles.largeText}>
            Наши взгляды.
          </Headline>
          <Headline Tag="h2" className={styles.largeText}>
            Наши ценности.
          </Headline>
        </Inner>
      </div>

      <div className={classNames(styles.module, styles.pseudoImg)}>
        <Inner>
          <h5 className={styles.text}>
            Мы верим, что звук — это природный способ коммуникации, а мы лишь
            придаём ему нужную форму и вектор.
          </h5>
        </Inner>
      </div>

      <div className={styles.module}>
        <Inner>
          <h5 className={styles.text}>
            Мы верим, что музыка — один из величайших видов искусства и
            заслуживает уважения.
          </h5>
        </Inner>
      </div>

      <div className={styles.module}>
        <Inner>
          <h5 className={styles.text}>
            Мы верим в силу открытого, искреннего общения.
          </h5>
        </Inner>
      </div>

      <div className={styles.module}>
        <Inner>
          <h5 className={styles.text}>
            Мы ценим людей и человеческие отношения.
          </h5>
        </Inner>
      </div>

      <div className={styles.module}>
        <Inner>
          <h5 className={styles.text}>
            Мы знаем, что каждый из нас способен изменить мир, но только вместе
            мы можем действительно добиться перемен.
          </h5>
        </Inner>
      </div>
    </div>
  </Layout>
)

export default WhoWeAre
