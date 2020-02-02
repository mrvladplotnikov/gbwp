import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/uk/home"
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

const Home = ({ data, location }) => {
  const works = data.works.nodes

  return (
    <Layout location={location}>
      <Hero link="/portfolio" />
      <About
        title="VP Production"
        text="Ми — команда людей, які створюють музику, звуки і продюсують голосове озвучення на межі чистої творчості і функціональності."
        linkLabel="Про нас"
        linkURL="/about"
      />
      <ModalContactForm open={true} onClose={() => console.log("log")} />
      <Why>
        <FeatureCard img={icon1}>
          Ми — партнери наших клієнтів. Нам важливий успіх вашого конкретного
          проекту, а не нескінченна конвеєрна робота.
        </FeatureCard>
        <FeatureCard img={icon2}>
          Ми дивимося глибше технічного завдання й задаємо багато запитань, щоби
          фінальний звук працював на ваш проект.
        </FeatureCard>
        <FeatureCard img={icon3}>
          За 4 роки роботи ми зірвали 0 дедлайнів. Це найкраща характеристика
          для нашої команди й менеджерів.
        </FeatureCard>
        <FeatureCard img={icon4}>
          Завдяки договору від{" "}
          <a href="https://digilaw.pro/" target="__blank" rel="nofollow">
            Digilaw
          </a>{" "}
          ви отримаєте контроль над процесом і необхідні права на результат
          роботи.
        </FeatureCard>
        <FeatureCard img={icon5}>
          Наші роботи вже чули мільйони людей і багато з них залишилися
          задоволеними. Переконатися в цьому можна тут.
        </FeatureCard>
        <FeatureCard img={icon6}>
          Як щодо <a href={mailTo.mail.uk}>безкоштовної консультації</a> або{" "}
          <a href="/">крутого темплейта ТЗ</a>? Ми завжди відкриті до
          спілкування, так що сміливо <a href="/">пишіть</a>.
        </FeatureCard>
      </Why>
      <Services
        title="Наші послуги"
        services={[
          {
            title: "Створення музики",
            link: "/services/music-composing",
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
        title="Вибрані роботи"
        works={works}
        linkLabel="Портфолiо"
        linkURL="/portfolio"
      />
      <SectionWithText linkLabel="Наші цінності">
        <h3>
          Завдяки аудіо ми надихаємо слухачів по обидві сторони аудіовізуальних
          проектів на новий досвід і розкриття власного творчого потенціалу.
        </h3>
      </SectionWithText>
      <Contacts />
    </Layout>
  )
}

export const query = graphql`
  query HomePageUkQuery {
    works: allWordpressWpWork(
      filter: {
        acf: { front_page: { front_page_visibility: { eq: true } } }
        polylang_current_lang: { eq: "uk" }
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
