import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../../layouts/uk/default"
import { Outer, Inner } from "../../components/Container"
import Headline from "../../components/Headline"
import boxOfDotsLink from "../../images/icon-box.svg"
import styles from "./styles.module.css"
import Contacts from "../../components/lendingSections/Contacts"
import SectionWithText from "../../components/SectionWithText"
import Why from "../../components/lendingSections/Why"
import FeatureCard from "../../components/FeatureCard"
import Services from "../../components/lendingSections/Services"

import icon1 from "../../images/vp-icons/icon-1.svg"
import icon2 from "../../images/vp-icons/icon-2.svg"
import icon3 from "../../images/vp-icons/icon-3.svg"
import icon4 from "../../images/vp-icons/icon-4.svg"
import icon5 from "../../images/vp-icons/icon-5.svg"
import icon6 from "../../images/vp-icons/icon-6.svg"

import logoWithSlogan from "../../images/logo-with-slogan.svg"
import TeamCarousel from "../../components/TeamCarousel"

const Box = () => (
  <img className={styles.box} src={boxOfDotsLink} role="presentation" alt="" />
)

const About = ({ data, location }) => {
  const team = data.team.members

  return (
    <Layout location={location}>
      <Inner>
        <Headline Tag="h1" className={styles.title}>
          Про нас
        </Headline>
        <Box />
        <Box />
      </Inner>
      <section className={styles.aboutSection}>
        <Outer>
          <Headline className={styles.aboutTitle} Tag="h2">
            Всё началось с…
          </Headline>
          <Inner className={styles.aboutContainer}>
            <div className={styles.aboutCol}>
              <p>
                Влада Плотникова и его желания превратить любимое занятие в
                работу.
              </p>
              <p>
                Он всегда был музыкантом: первый концерт на венике в 3 года,
                музыкальная школа вместо футбола, бесконечные уроки сольфеджио
                (обязательно в субботу утром, когда нормальные дети спят) и
                юношеский рок-бунт, который потом перерос в проект Total-Empty.
                И хотя Влад получил высшее образование совсем в другой сфере, на
                «серьёзную» и стабильную работу всё же не пошёл. В решающий
                момент он выбрал музыку.
              </p>
              <p>
                Изначально компания VP Production была одним человеком, который
                создавал музыку и звуковые эффекты, сводил, мастерил,
                имплементировал звук, общался с клиентами и разбирался в
                налоговых декларациях. Естественно, что спустя короткое время
                стало очевидно — действительно крутые вещи выходят только вместе
                с крутыми людьми. Так и начался путь нашей компании.
              </p>
              <p>
                Сейчас VP Production — это команда людей, где каждый любит своё
                дело. Будь то создание музыки, звуковой дизайн, голосовое
                озвучивание, проектный менеджмент или маркетинг — мы не можем
                этим не заниматься. Поэтому каждый день мы вдохновляем
                слушателей по обе стороны медиапроектов и получаем от этого
                удовольствие.
              </p>
            </div>
            <div className={styles.aboutCol}>
              <img
                className={styles.aboutImage}
                src={logoWithSlogan}
                alt="VP Production"
              />
            </div>
          </Inner>
        </Outer>
      </section>
      <section className={styles.ourTeamSection}>
        <Outer>
          <Headline Tag="h2">Наша команда</Headline>
        </Outer>
        <Inner>
          <TeamCarousel team={team} />
        </Inner>
      </section>
      <SectionWithText style={{ backgroundColor: "#090909" }}>
        <h3>Ми в першу чергу допомагаємо, а не продаємо.</h3>
        <h3>
          Ми ведемо проекти, коли збігаємося з клієнтом в основному баченні і
          принципах роботи.
        </h3>
        <h3>
          Ми покращуємо все, що можна поліпшити, навіть якщо результат вже
          прийнятий і оплачений.
        </h3>
      </SectionWithText>
      <Services
        title="Наші послуги"
        services={[
          {
            title: "Створення музики",
            link: "/services/music-сreation",
          },
          {
            title: "Аудіобрендінг",
            link: "/services/audio-branding",
          },
          {
            title: "Звуковий дизайн",
            link: "/services/sound-design",
          },
          {
            title: "Голосове озвучування",
            link: "/services/voice-casting",
          },
        ]}
      />
      <Why title="І ще" style={{ backgroundColor: "#000" }}>
        <FeatureCard img={icon1}>
          Ми - партнери наших клієнтів. Нам важливий успіх вашого конкретного
          проекту, а не нескінченна конвеєрна робота.
        </FeatureCard>
        <FeatureCard img={icon2}>
          Ми дивимося глибше технічного завдання і задаємо багато запитань, щоб
          фінальний звук працював на ваш проект.
        </FeatureCard>
        <FeatureCard img={icon3}>
          За 4 роки роботи ми зірвали 0 дедлайнів. Це найкраща характеристика
          для нашої команди і менеджерів.
        </FeatureCard>
        <FeatureCard img={icon4}>
          Завдяки договору від Digilaw ви отримаєте контроль над процесом і
          необхідні права на результат роботи.
        </FeatureCard>
        <FeatureCard img={icon5}>
          Наші роботи вже чули мільйони людей і багато хто з них залишилися
          задоволені. Переконатися в цьому можна тут.
        </FeatureCard>
        <FeatureCard img={icon6}>
          Як щодо безкоштовної консультації або крутого темплейта ТЗ? Ми завжди
          відкриті до спілкування, так що сміливо пишіть.
        </FeatureCard>
      </Why>
      <SectionWithText
        linkLabel="Наші цінності"
        style={{ backgroundColor: "#090909" }}
      >
        <h3>
          За допомогою аудіо ми надихаємо слухачів по обидва боки медіапроектів
          на новий досвід і розкриття власного творчого потенціалу.
        </h3>
      </SectionWithText>
      <Contacts />
    </Layout>
  )
}

About.propTypes = {
  location: PropTypes.any.isRequired,
}

export const query = graphql`
  query AboutPageUkQuery {
    team: allWordpressWpTeam(limit: 5) {
      members: nodes {
        id
        name: title
        details: content
        photo: featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 570, srcSetBreakpoints: [445, 900]) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        meta: acf {
          position
        }
      }
    }
  }
`

export default About
