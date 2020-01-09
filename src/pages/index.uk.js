import React, { useRef } from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/uk/home"
import Hero from "../components/lendingSections/Hero"
import About from "../components/lendingSections/About"
import Why from "../components/lendingSections/Why"
import Services from "../components/lendingSections/Services"
import ChosenWorks from "../components/lendingSections/ChosenWorks"
import Contacts from "../components/lendingSections/Contacts"
import SectionWithText from "../components/SectionWithText"

import icon1 from "../images/vp-icons/icon-1.svg"
import icon2 from "../images/vp-icons/icon-2.svg"
import icon3 from "../images/vp-icons/icon-3.svg"
import icon4 from "../images/vp-icons/icon-4.svg"
import icon5 from "../images/vp-icons/icon-5.svg"
import icon6 from "../images/vp-icons/icon-6.svg"

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)

const Home = ({ data, location }) => {
  const portfolioRef = useRef(null)
  const executeScroll = () => scrollToRef(portfolioRef)

  const works = data.works.nodes

  return (
    <Layout location={location}>
      <Hero onPortfolioClick={executeScroll} />
      <About
        title="VP Production"
        text="Ми - команда людей, які створюють музику, звуки і продюсує дикторський озвучування на межі чистого творчості і функціональності."
      />
      <Why
        title="Чому ми?"
        features={[
          {
            id: 0,
            image: icon1,
            alt: "",
            body:
              "Ми - партнери наших клієнтів. Нам важливий успіх вашого конкретного проекту, а не нескінченна конвеєрна робота.",
          },
          {
            id: 1,
            image: icon2,
            alt: "",
            body:
              "Ми дивимося глибше технічного завдання і задаємо багато запитань, щоб фінальний звук працював на ваш проект.",
          },
          {
            id: 2,
            image: icon3,
            alt: "",
            body:
              "За 4 роки роботи ми зірвали 0 дедлайнів. Це найкраща характеристика для нашої команди і менеджерів.",
          },
          {
            id: 3,
            image: icon4,
            alt: "",
            body:
              "Завдяки договору від Digilaw ви отримаєте контроль над процесом і необхідні права на результат роботи.",
          },
          {
            id: 4,
            image: icon5,
            alt: "",
            body:
              "Наші роботи вже чули мільйони людей і багато хто з них залишилися задоволені. Переконатися в цьому можна тут.",
          },
          {
            id: 5,
            image: icon6,
            alt: "",
            body:
              "Як щодо безкоштовної консультації або крутого темплейта ТЗ? Ми завжди відкриті до спілкування, так що сміливо пишіть.",
          },
        ]}
      />
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
      <ChosenWorks
        id="portfolio"
        portfolioRef={portfolioRef}
        title="Вибрані роботи"
        works={works}
        linkLabel="Портфолiо"
        linkURL="/portfolio"
      />
      <SectionWithText linkLabel="Наші цінності">
        <h3>
          За допомогою аудіо ми надихаємо слухачів по обидва боки медіапроектів
          на новий досвід і розкриття власного творчого потенціалу.
        </h3>
      </SectionWithText>
      <Contacts
        title="Напишіть нам"
        text="Розкажіть нам про свій проект, продукт або ідеї. Запитайте рада або отримаєте повноцінну безкоштовну консультацію. Дізнайтеся ціни, уточніть важливе питання, та що завгодно! Ми будемо раді співпрацювати з вами познайомитися і допомогти."
      />
    </Layout>
  )
}

export const query = graphql`
  query HomePageUkQuery {
    works: allWordpressWpWork(
      limit: 10
      filter: { polylang_current_lang: { eq: "uk" } }
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
