import React, { useState } from "react"
import { graphql, Link } from "gatsby"
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
  const [showFrom, setShowForm] = useState(location.search === "?contact-form")

  const works = data.works.nodes
  const contactEmail = data.site.siteMetadata.adminEmail

  return (
    <Layout
      location={location}
      title="Аудиоагенство"
      description="• Музыка • Звуковой дизайн • Голосовое озвучивание для игр, брендов, видео и других медиапроектов. ✔ Мы создаём аудио, которое работает на вашу аудиторию. 0 сорванных дедлайнов. Миллионы слушателей."
    >
      <Hero link="/ru/portfolio" />
      <About
        title="VP Production"
        text="Мы — команда, которая создаёт музыку, звуки и продюсирует голосовое озвучивание на грани чистого творчества и функциональности."
        linkLabel="О нас"
        linkURL="/ru/about"
        alt="Студия саунд дизайна"
      />
      <Why>
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
          <a
            rel="nofollow noopener noreferrer"
            target="_blank"
            href={mailTo.mail.ru}
          >
            бесплатной консультации
          </a>{" "}
          или{" "}
          <InlineButton onClick={() => setShowForm(true)}>
            крутого темплейта ТЗ
          </InlineButton>
          ? Мы всегда открыты к общению, так что смело{" "}
          <a
            rel="nofollow noopener noreferrer"
            target="_blank"
            href={`mailto:${contactEmail}`}
          >
            пишите
          </a>
          .
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
            alt: "Создание музыки",
          },
          {
            title: "Аудиобрендинг",
            link: "/ru/services/audio-branding",
            alt: "Аудиобрендинг",
          },
          {
            title: "Звуковой дизайн",
            link: "/ru/services/sound-design",
            alt: "Саунд дизайн",
          },
          {
            title: "Голосовое озвучивание",
            link: "/ru/services/voice-casting",
            alt: "Озвучка",
          },
        ]}
      />
      <ChosenWorks
        title="Избранные работы"
        works={works}
        linkLabel="Портфолио"
        linkURL="/ru/portfolio"
      />
      <SectionWithText linkLabel="Наши ценности" link="/ru/our-values">
        <h3>
          С помощью аудио мы вдохновляем слушателей по обе стороны
          аудиовизуальных проектов на новый опыт и раскрытие собственного
          творческого потенциала.
        </h3>
      </SectionWithText>
      <Contacts>
        Расскажите нам о своём проекте, продукте или идее. Спросите совет или
        получите полноценную{" "}
        <a
          rel="nofollow noopener noreferrer"
          target="_blank"
          href={mailTo.mail.ru}
        >
          бесплатную консультацию
        </a>
        . Узнайте цены, уточните важный вопрос, да что угодно! Мы будем рады с
        вами познакомиться и помочь.
      </Contacts>
    </Layout>
  )
}

export const query = graphql`
  query HomePageRuQuery {
    site {
      siteMetadata {
        adminEmail
      }
    }
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
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`

export default Home
