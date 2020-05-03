import React, { useState } from "react"
import { graphql, Link } from "gatsby"
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
import InlineButton from "../components/InlineButton"

const Home = ({ data, location }) => {
  const [showFrom, setShowForm] = useState(false)

  const works = data.works.nodes

  return (
    <Layout
      location={location}
      title="Аудіо агенція"
      description="🎹 Музика 🎶 Звуковий дизайн 🗣 Голосове озвучення для Ігор, Брендів, Відео та інших Медіапроєктів. ✅ Ми створюємо аудіо, яке працює на вашу аудиторію. 𝟬 зірваних дедлайнів. Мільйони слухачів. 🎧"
    >
      <Hero link="/portfolio" />
      <About
        title="VP Production"
        text="Ми — команда, яка створює музику, звуки і продюсує голосове озвучення на межі чистої творчості і функціональності."
        linkLabel="Про нас"
        linkURL="/about"
      />
      <Why>
        <FeatureCard img={icon1}>
          Ми — партнери наших клієнтів. Нам важливий успіх вашого конкретного
          проєкту, а не нескінченна конвеєрна робота.
        </FeatureCard>
        <FeatureCard img={icon2}>
          Ми дивимося глибше технічного завдання й задаємо багато запитань, щоби
          фінальний звук працював на вашу аудиторію.
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
          задоволеними. Переконатися в цьому можна{" "}
          <Link to="/reviews">тут</Link>.
        </FeatureCard>
        <FeatureCard img={icon6}>
          Як щодо{" "}
          <a rel="noopener noreferrer" target="_blank" href={mailTo.mail.uk}>
            безплатної консультації
          </a>{" "}
          або{" "}
          <InlineButton onClick={() => setShowForm(true)}>
            крутого темплейта ТЗ
          </InlineButton>
          ? Ми завжди відкриті до спілкування, так що сміливо{" "}
          <a rel="noopener noreferrer" target="_blank" href={mailTo.mail.uk}>
            пишіть
          </a>
          .
        </FeatureCard>
      </Why>
      <ModalContactForm
        title="Темплейт технічного завдання"
        subTitle="Ми впевнені, що правильно складене ТЗ підвищує шанси на успіх проєкту. Тому з радістю ділимося тим, що працює для нас!"
        open={showFrom}
        onClose={() => setShowForm(false)}
      />
      <Services
        title="Наші послуги"
        services={[
          {
            title: "Створення музики",
            link: "/services/music-composing",
          },
          {
            title: "Аудіобрендинг",
            link: "/services/audio-branding",
          },
          {
            title: "Звуковий дизайн",
            link: "/services/sound-design",
          },
          {
            title: "Голосове озвучення",
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
      <SectionWithText linkLabel="Наші цінності" link="/our-values">
        <h3>
          Завдяки аудіо ми надихаємо слухачів по обидві сторони аудіовізуальних
          проєктів на новий досвід і розкриття власного творчого потенціалу.
        </h3>
      </SectionWithText>
      <Contacts>
        Розкажіть нам про свій проєкт, продукт або ідею. Запитайте пораду або
        отримайте повноцінну{" "}
        <a rel="noopener noreferrer" target="_blank" href={mailTo.mail.uk}>
          безплатну консультацію
        </a>
        . Дізнайтеся вартість, уточніть важливе питання, та що завгодно! Ми
        будемо раді з вами познайомитися й допомогти.
      </Contacts>
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
