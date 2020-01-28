import React from "react"
import classNames from "classnames"
import styles from "./styles.module.css"
import Layout from "../../layouts/uk/default"
import Headline from "../../components/Headline"
import { Inner } from "../../components/Container"

const OurValues = ({ location }) => (
  <Layout location={location}>
    <div className={styles.container}>
      <div className={classNames(styles.module, styles.rectImg)}>
        <Inner>
          <Headline Tag="h2" className={styles.largeText}>
            Наші цінності.
          </Headline>
          <Headline Tag="h2" className={styles.largeText}>
            Наші погляди.
          </Headline>
          <Headline Tag="h2" className={styles.largeText}>
            Наш маніфест.
          </Headline>
        </Inner>
      </div>

      <div className={classNames(styles.module, styles.pseudoImg)}>
        <Inner>
          <h5 className={styles.text}>
            Ми віримо, що звук — це природний спосіб комунікації, а ми лише
            надаємо йому потрібну форму і вектор.
          </h5>
        </Inner>
      </div>

      <div className={styles.module}>
        <Inner>
          <h5 className={styles.text}>
            Ми віримо, що музика — один із найвеличніших видів мистецтва й
            заслуговує на повагу.
          </h5>
        </Inner>
      </div>

      <div className={styles.module}>
        <Inner>
          <h5 className={styles.text}>
            Ми віримо в силу відкритого, щирого спілкування.
          </h5>
        </Inner>
      </div>

      <div className={styles.module}>
        <Inner>
          <h5 className={styles.text}>Ми цінуємо людей і людські стосунки.</h5>
        </Inner>
      </div>

      <div className={styles.module}>
        <Inner>
          <h5 className={styles.text}>
            Ми знаємо, що кожен із нас спроможний змінити світ, але тільки разом
            ми можемо дійсно домогтися змін.
          </h5>
        </Inner>
      </div>
    </div>
  </Layout>
)

export default OurValues
