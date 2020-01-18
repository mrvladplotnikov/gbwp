import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/en/home"
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
      <Hero link="/en/portfolio" />
      <About
        title="VP Production"
        text="Ми - команда людей, які створюють музику, звуки і продюсує дикторський озвучування на межі чистого творчості і функціональності."
      />
      <Why>
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
      <Services
        title="Наші послуги"
        services={[
          {
            title: "Створення музики",
            link: "/en/services/music-сreation",
          },
          {
            title: "Аудіобрендінг",
            link: "/en/services/audio-branding",
          },
          {
            title: "Звуковий дизайн",
            link: "/en/services/sound-design",
          },
          {
            title: "Голосове озвучування",
            link: "/en/services/voice-casting",
          },
        ]}
      />
      <ChosenWorks
        title="Вибрані роботи"
        works={works}
        linkLabel="Portfolio"
        linkURL="/en/portfolio"
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
  query HomePageEnQuery {
    works: allWordpressWpWork(
      limit: 10
      filter: { polylang_current_lang: { eq: "en" } }
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
