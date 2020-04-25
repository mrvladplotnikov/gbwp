import React, { useState } from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import Layout from "../../layouts/ru/default"
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

import mailTo from "../../utils/mailTo"
import ModalContactForm from "../../components/ModalContactForm/ModalContactForm"
import InlineButton from "../../components/InlineButton"

const Box = () => (
  <img className={styles.box} src={boxOfDotsLink} role="presentation" alt="" />
)

const About = ({ data, location }) => {
  const [showFrom, setShowForm] = useState(false)

  const team = data.team.members

  return (
    <Layout location={location} title="О нас">
      <Inner>
        <Headline Tag="h1" className={styles.title}>
          О нас
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
                юношеский рок-бунт, который потом перерос в проект{" "}
                <a href="https://total-empty.bandcamp.com/" target="__blank">
                  Total-Empty
                </a>
                . И хотя Влад получил высшее образование совсем в другой сфере,
                на «серьёзную» и стабильную работу всё же не пошёл. В решающий
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
                Сейчас VP Production — это команда, в которой каждый любит своё
                дело. Будь то создание музыки, звуковой дизайн, голосовое
                озвучивание, проектный менеджмент или маркетинг — мы не можем
                этим не заниматься. Поэтому каждый день мы вдохновляем
                слушателей по обе стороны аудиовизуальных проектов и получаем от
                этого удовольствие.
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
        <h3>Мы в первую очередь помогаем, а не продаём.</h3>
        <h3>
          Мы ведём проекты, когда совпадаем с клиентом в основном видении и
          принципах работы.
        </h3>
        <h3>
          Мы улучшаем всё, что можно улучшить, даже если результат уже принят и
          оплачен.
        </h3>
      </SectionWithText>
      <Services
        className={styles.services}
        title="Наши услуги"
        services={[
          {
            title: "Создание музыки",
            link: "/ru/services/music-composing",
          },
          {
            title: "Аудиобрендинг",
            link: "/ru/services/audio-branding",
          },
          {
            title: "Звуковой дизайн",
            link: "/ru/services/sound-design",
          },
          {
            title: "Голосовое озвучивание",
            link: "/ru/services/voice-casting",
          },
        ]}
      />
      <Why title="И еще" style={{ backgroundColor: "#000" }}>
        <FeatureCard img={icon1}>
          Мы — партнёры наших клиентов. Нам важен успех вашего конкретного
          проекта, а не бесконечная конвейерная работа.
        </FeatureCard>
        <FeatureCard img={icon2}>
          Мы смотрим глубже технического задания и задаём много вопросов, чтобы
          финальный звук работал на вашу аудиторию.
        </FeatureCard>
        <FeatureCard img={icon3}>
          За 4 года работы мы сорвали 0 дедлайнов. Это лучшая характеристика для
          нашей команды и менеджеров.
        </FeatureCard>
        <FeatureCard img={icon4}>
          Благодаря договору от{" "}
          <a href="https://digilaw.pro/" target="__blank" rel="nofollow">
            Digilaw
          </a>{" "}
          вы получите контроль над процессом и необходимые права на результат
          работы.
        </FeatureCard>
        <FeatureCard img={icon5}>
          Наши работы уже слышали миллионы людей и многие из них остались
          довольны. Убедиться в этом можно <Link to="/ru/reviews">тут</Link>.
        </FeatureCard>
        <FeatureCard img={icon6}>
          Как насчёт{" "}
          <a rel="noopener noreferrer" target="_blank" href={mailTo.mail.ru}>
            бесплатной консультации
          </a>{" "}
          или{" "}
          <InlineButton onClick={() => setShowForm(true)}>
            крутого темплейта ТЗ
          </InlineButton>
          ? Мы всегда открыты к общению, так что смело{" "}
          <a rel="noopener noreferrer" target="_blank" href={mailTo.mail.ru}>
            пишите
          </a>
          .
        </FeatureCard>
      </Why>
      <SectionWithText
        linkLabel="Наши ценности"
        link="/ru/our-values"
        style={{ backgroundColor: "#090909" }}
      >
        <h3>
          С помощью аудио мы вдохновляем слушателей по обе стороны медиапроектов
          на новый опыт и раскрытие собственного творческого потенциала.
        </h3>
      </SectionWithText>
      <Contacts>
        Расскажите нам о своём проекте, продукте или идее. Спросите совет или
        получите полноценную{" "}
        <a rel="noopener noreferrer" target="_blank" href={mailTo.mail.ru}>
          бесплатную консультацию
        </a>
        . Узнайте цены, уточните важный вопрос, или, может, вы хотите стать
        частью нашей команды? Да что угодно! Мы будем рады с вами познакомиться
        и помочь.
      </Contacts>
      <ModalContactForm
        title="Темплейт технического задания"
        subTitle="Мы уверены, что правильно составленное ТЗ повышает шансы на успех проекта. Поэтому с радостью делимся тем, что работает для нас!"
        open={showFrom}
        onClose={() => setShowForm(false)}
      />
    </Layout>
  )
}

About.propTypes = {
  location: PropTypes.any.isRequired,
}

export const query = graphql`
  query AboutPageRuQuery {
    team: allWordpressWpTeam(filter: { polylang_current_lang: { eq: "ru" } }) {
      members: nodes {
        id
        name: title
        details: content
        photo: featured_media {
          localFile {
            childImageSharp {
              fluid(
                maxWidth: 570
                srcSetBreakpoints: [445, 900]
                quality: 100
              ) {
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
