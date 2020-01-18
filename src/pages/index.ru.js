import React from "react"
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

const Home = ({ data, location }) => {
  const works = data.works.nodes

  return (
    <Layout location={location}>
      <Hero link="/ru/portfolio" />
      <About
        title="VP Production"
        text="Ми - команда людей, які створюють музику, звуки і продюсує дикторський озвучування на межі чистого творчості і функціональності."
      />
      <Why>
        <FeatureCard img={icon1}>
          Мы – партнёры наших клиентов. Нам важен успех вашего конкретного
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
          Благодаря договору от Digilaw вы получите контроль над процессом и
          необходимые права на результат работы.
        </FeatureCard>
        <FeatureCard img={icon5}>
          Наши работы уже слышали миллионы людей и многие из них остались
          довольны. Убедиться в этом можно тут.
        </FeatureCard>
        <FeatureCard img={icon6}>
          Как насчёт бесплатной консультации или крутого темплейта ТЗ? Мы всегда
          открыты к общению, так что смело пишите.
        </FeatureCard>
      </Why>
      <Services
        title="Наші послуги"
        services={[
          {
            title: "Створення музики",
            link: "/ru/services/music-сreation",
          },
          {
            title: "Аудіобрендінг",
            link: "/ru/services/audio-branding",
          },
          {
            title: "Звуковий дизайн",
            link: "/ru/services/sound-design",
          },
          {
            title: "Голосове озвучування",
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
          За допомогою аудіо ми надихаємо слухачів по обидва боки медіапроектів
          на новий досвід і розкриття власного творчого потенціалу.
        </h3>
      </SectionWithText>
      <Contacts />
    </Layout>
  )
}

export const query = graphql`
  query HomePageRuQuery {
    works: allWordpressWpWork(
      limit: 10
      filter: { polylang_current_lang: { eq: "ru" } }
    ) {
      nodes {
        id
        slug
        title
        lang: polylang_current_lang
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 249, srcSetBreakpoints: [445, 900], quality: 95) {
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
