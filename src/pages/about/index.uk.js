import React, { useState } from "react"
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

import mailTo from "../../utils/mailTo"
import InlineButton from "../../components/InlineButton"
import ModalContactForm from "../../components/ModalContactForm/ModalContactForm"

const Box = () => (
  <img className={styles.box} src={boxOfDotsLink} role="presentation" alt="" />
)

const About = ({ data, location }) => {
  const [showFrom, setShowForm] = useState(false)

  const team = data.team.members

  return (
    <Layout location={location} title="Про нас">
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
            Усе почалося з…
          </Headline>
          <Inner className={styles.aboutContainer}>
            <div className={styles.aboutCol}>
              <p>
                Влада Плотнікова та його бажання перетворити улюблене заняття на
                роботу.
              </p>
              <p>
                Він завжди був музикантом: перший концерт на вінику в 3 роки,
                музична школа замість футболу, нескінченні уроки сольфеджіо
                (обов’язково в суботу вранці, коли нормальні діти сплять) і
                юнацький рок-бунт, який потім переріс у проєкт{" "}
                <a href="https://total-empty.bandcamp.com/" target="__blank">
                  Total-Empty
                </a>
                . І хоча Влад здобув вищу освіту зовсім в іншій сфері, на
                «серйозну» і стабільну роботу все ж не пішов. У вирішальний
                момент він вибрав музику.
              </p>
              <p>
                Спочатку компанія VP Production була однією людиною. Влад
                створював музику і звукові ефекти, зводив, робив мастеринг,
                імплементував звук, спілкувався з клієнтами й розбирався в
                податкових деклараціях. Звичайно, що вже за короткий час стало
                очевидним — дійсно круті речі виходять тільки разом із крутими
                людьми. Так і почався шлях нашої компанії.
              </p>
              <p>
                Зараз VP Production — це команда, в якій кожен любить свою
                справу. І зовсім неважливо, про що йде мова: створення музики,
                звуковий дизайн, голосове озвучення, проєктний менеджмент або
                маркетинг — ми не можемо цим не займатися. Тому кожен день ми
                надихаємо слухачів по обидві сторони аудіовізуальних проєктів і
                отримуємо від цього задоволення.
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
        <h3>Ми насамперед допомагаємо, а не продаємо.</h3>
        <h3>
          Ми ведемо проєкти, коли збігаємося з клієнтом в основному баченні і
          принципах роботи.
        </h3>
        <h3>
          Ми покращуємо все, що можна поліпшити, навіть якщо результат вже
          прийнятий і оплачений.
        </h3>
      </SectionWithText>
      <Services
        title="Наші послуги"
        className={styles.services}
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
      <Why title="І ще" style={{ backgroundColor: "#000" }}>
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
          задоволеними. Переконатися в цьому можна тут.
        </FeatureCard>
        <FeatureCard img={icon6}>
          Як щодо{" "}
          <a target="_blank" href={mailTo.mail.uk}>
            безплатної консультації
          </a>{" "}
          або{" "}
          <InlineButton onClick={() => setShowForm(true)}>
            крутого темплейта ТЗ
          </InlineButton>
          ? Ми завжди відкриті до спілкування, так що сміливо{" "}
          <a href="/">пишіть</a>.
        </FeatureCard>
      </Why>
      <SectionWithText
        linkLabel="Наші цінності"
        link="/our-values"
        style={{ backgroundColor: "#090909" }}
      >
        <h3>
          Завдяки аудіо ми надихаємо слухачів по обидві сторони аудіовізуальних
          проєктів на новий досвід і розкриття власного творчого потенціалу.
        </h3>
      </SectionWithText>
      <Contacts>
        Розкажіть нам про свій проєкт, продукт або ідею. Запитайте пораду або
        отримайте повноцінну{" "}
        <a target="_blank" href={mailTo.mail.uk}>
          безплатну консультацію
        </a>
        . Дізнайтеся вартість, уточніть важливе питання, чи, може, ви хочете
        стати частиною нашої команди? Та що завгодно! Ми будемо раді з вами
        познайомитися й допомогти.
      </Contacts>
      <ModalContactForm
        title="Темплейт технічного завдання"
        subTitle="Ми впевнені, що правильно складене ТЗ підвищує шанси на успіх проєкту. Тому з радістю ділимося тим, що працює для нас!"
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
  query AboutPageUkQuery {
    team: allWordpressWpTeam(filter: { polylang_current_lang: { eq: "uk" } }) {
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
