import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/ru/home"
import Hero from "../components/lendingSections/Hero"
import About from "../components/lendingSections/About"
import Why from "../components/lendingSections/Why"
import Services from "../components/lendingSections/Services"
import ChosenWorks from "../components/lendingSections/ChosenWorks"
import Contacts from "../components/lendingSections/Contacts"
import SectionWithText from "../components/SectionWithText"
import FeatureCard from "../components/FeatureCard"

import icon1 from "../images/vp-icons/icon-1.svg"
import icon2 from "../images/vp-icons/icon-2.svg"
import icon3 from "../images/vp-icons/icon-3.svg"
import icon4 from "../images/vp-icons/icon-4.svg"
import icon5 from "../images/vp-icons/icon-5.svg"
import icon6 from "../images/vp-icons/icon-6.svg"

import mailTo from "../utils/mailTo"
import ModalContactForm from "../components/ModalContactForm/ModalContactForm"
import InlineButton from "../components/InlineButton"

const Home = ({ data, location }) => {
  const [showFrom, setShowForm] = useState(false)

  const works = data.works.nodes

  return (
    <Layout location={location}>
      <Hero link="/ru/portfolio" />
      <About
        title="VP Production"
        text="Мы — команда людей, которые создают музыку, звуки и продюсируют голосовое озвучивание на грани чистого творчества и функциональности."
        linkLabel="О нас"
        linkURL="/ru/about"
      />
      <Why>
        <FeatureCard img={icon1}>
          Мы — партнёры наших клиентов. Нам важен успех вашего конкретного
          проекта, а не бесконечная конвейерная работа.
        </FeatureCard>
        <FeatureCard img={icon2}>
          Мы смотрим глубже технического задания и задаём много вопросов, чтобы
          финальный звук работал на ваш проект.
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
          довольны. Убедиться в этом можно <a href="/">тут</a>.
        </FeatureCard>
        <FeatureCard img={icon6}>
          Как насчёт <a href={mailTo.mail.ru}>бесплатной консультации</a> или{" "}
          <InlineButton onClick={() => setShowForm(true)}>
            крутого темплейта ТЗ
          </InlineButton>
          ? Мы всегда открыты к общению, так что смело <a href="/">пишите</a>.
        </FeatureCard>
      </Why>
      <ModalContactForm
        title="Темплейт технического задания"
        subTitle="Мы уверены, что правильно составленное ТЗ повышает шансы на успех проекта. Поэтому с радостью делимся тем, что работает для нас!"
        open={showFrom}
        onClose={() => setShowForm(false)}
      />
      <Services
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
      <ChosenWorks
        title="Вибрані роботи"
        works={works}
        linkLabel="Портфолио"
        linkURL="/ru/portfolio"
      />
      <SectionWithText linkLabel="Наші цінності">
        <h3>
          С помощью аудио мы вдохновляем слушателей по обе стороны
          аудиовизуальных проектов на новый опыт и раскрытие собственного
          творческого потенциала.
        </h3>
      </SectionWithText>
      <Contacts />
    </Layout>
  )
}

export const query = graphql`
  query HomePageRuQuery {
    works: allWordpressWpWork(
      filter: {
        acf: { front_page: { front_page_visibility: { eq: true } } }
        polylang_current_lang: { eq: "ru" }
      }
      sort: { fields: acf___front_page___front_page_order, order: DESC }
    ) {
      nodes {
        id
        slug
        title
        lang: polylang_current_lang
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default Home
