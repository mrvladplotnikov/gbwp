import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../../layouts/uk/sidebar"
import ServiceHero from "../../components/ServiceHero"
import ContactUs from "../../components/ContactUs"
import Sidebar from "../../components/Sidebar"
import ServiceSection from "../../components/ServiceSection"
import ServiceIconList from "../../components/ServiceIconList"
import ServiceIcon from "../../components/ServiceIcon"
import StyledAccordion from "../../components/StyledAccordion"
import StyledAccordionItem from "../../components/StyledAccordionItem"
import ReviewCarousel from "../../components/ReviewCarousel/ReviewCarousel"
import CardDeck from "../../components/CardDeck/CardDeck"
import CardDeckItem from "../../components/CardDeckItem/CardDeckItem"
import PlanList from "../../components/PlanList"
import PlanCard from "../../components/PlanCard"

import HouseIcon from "../../images/plans/house.svg"
import PlanetIcon from "../../images/plans/planet.svg"

import MaleIcon from "../../images/service-icons/male.svg"
import LaptopIcon from "../../images/service-icons/laptop.svg"
import FileIcon from "../../images/service-icons/file.svg"

import mailTo from "../../utils/mailTo"
import ModalContactForm from "../../components/ModalContactForm/ModalContactForm"

const VoiceCasting = ({ data, location }) => {
  const [showForm, setShowForm] = useState(false)
  const [formTitle, setFromTitle] = useState("")
  const [formSubTitle, setFromSubTitle] = useState("")
  const [formKey, setFromKey] = useState("")

  const handleFormShow = (title = "", subTitle = "", key = "") => {
    setFromTitle(title)
    setFromSubTitle(subTitle)
    setFromKey(key)
    setShowForm(true)
  }

  const handleFormClose = () => {
    setShowForm(false)

    setTimeout(() => {
      setFromTitle("")
      setFromSubTitle("")
      setFromKey("")
    }, 500)
  }

  const reviews = data.reviews.nodes
  const sidebarImage = data.sidebarImage.childImageSharp.fluid
  return (
    <Layout
      Sidebar={
        <Sidebar
          title="Голосове озвучення"
          text="Очима не побачиш те, що може намалювати нам мова."
          autor="Китайське прислів’я"
          image={sidebarImage}
        />
      }
      ServiceHero={
        <ServiceHero>
          <h3>
            Нам подобається думати про людський голос як про найдосконаліший
            музичний інструмент.
          </h3>
          <p>
            Ми не знаємо іншого інструменту, який здатний так точно розкрити
            посил автора, передати весь спектр емоцій і невловимі нюанси
            настрою. І якщо вокал — це один зі значущих елементів музики, то
            голосове озвучення — це самостійний вид мистецтва.
          </p>
          <p>
            Правильне голосове озвучення або озвучування — це не просто начитка
            потрібного тексту добре поставленим голосом. Це, імовірніше, про
            управління увагою слухача, розкриття персонажів і створення
            атмосфери. Це те, що змушує людину слухати і вірити почутому.
          </p>
        </ServiceHero>
      }
      location={location}
      title="Голосове озвучення"
    >
      <ServiceSection title="Що ми робимо?">
        <p>
          Якщо говорити коротко — ми продюсуємо голосове озвучення, а конкретно
          займаємося:
        </p>
        <ServiceIconList align="space-evenly">
          <ServiceIcon
            title="Кастингом акторів голосового озвучення"
            icon={MaleIcon}
            style={{ maxWidth: 200 }}
          />
          <ServiceIcon
            title="Організацією процесу запису і веденням проєкту"
            icon={LaptopIcon}
            style={{ maxWidth: 200 }}
          />
          <ServiceIcon
            title="Обробкою аудіо файлів"
            icon={FileIcon}
            style={{ maxWidth: 200 }}
          />
        </ServiceIconList>
      </ServiceSection>
      <ServiceSection title="База голосів">
        <p>
          За роки роботи ми сформували чималу базу акторів голосового озвучення.
          Кожен із них — носій найрізноманітніших мов і акцентів, тембрів і
          інтонацій. У цьому ви можете переконатися самі, повний плейлист із
          прикладами голосів акторів — нижче.
        </p>
        <iframe
          title="Приклад голосового озвучення"
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/303617614%3Fsecret_token%3Ds-5OnLL&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </ServiceSection>
      <ServiceSection title="Як проходить процес?">
        <p>
          За останні кілька років ми виробили просту схему для співпраці. Таку,
          щоби вам на кожному етапі було зрозуміло, що відбувається, й у вас був
          контроль над процесом. А ми могли в цей час надати необхідне голосове
          озвучення для вашого проєкту.
        </p>
        <p>Усього шість етапів:</p>
        <StyledAccordion>
          <StyledAccordionItem title="Знайомство">
            <p>
              Ви пишете нам і отримуєте в зручній формі{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={mailTo.mail.uk}
              >
                безплатну консультацію
              </a>
              , а ми дізнаємося про ваш проєкт. Так ми знайомимося один з одним
              і розуміємо, наскільки готові до співпраці. Для нас важливо
              збігатися з клієнтом у загальному баченні і принципах роботи.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Підготовка">
            <p>
              На цьому етапі ви складаєте технічне завдання у формі сценарію з
              описом голосів і необхідними поясненнями для акторів.
            </p>
            <p>
              Ми вивчаємо документ, підбираємо відповідних виконавців і
              демонструємо їх вам. За необхідності — записуємо пробні фрази,
              щоби вам було простіше визначитися з актором.
            </p>
            <p>
              Паралельно разом із юристами ми готуємо договір співпраці.
              Обговорюємо й погоджуємо все з вами й переходимо до наступного
              етапу.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Запуск">
            <p>
              Ми з вами підписуємо договір, ви висилаєте повну передоплату за
              проєкт, а ми зі свого боку підписуємо договір з актором і
              передаємо йому сценарій.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Продакшн">
            <p>
              Актор озвучення відправляє нам готовий запис, ми перевіряємо його
              на відповідність вимогам і, якщо все добре, надсилаємо вам. Якщо
              вам здасться, що виконавець не досить коректно передав якісь
              інтонації або загальний посил, ви зможете безкоштовно внести до
              двох правок на кожен рядок сценарію.
            </p>
            <p>
              Після того, як вас влаштує робота актора, ми займемося стандартною
              обробкою аудіофайлу. На цьому ж етапі ми можемо додатково обробити
              записаний голос, додати потрібних ефектів.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Прийом проєкту">
            <p>
              Після всіх погоджень ми висилаємо вам кінцеві файли. Цей момент —
              останній шанс скористатися безплатними правками.
            </p>
            <p>Коли все готово, ми з вами підписуємо Акт прийому-передачі.</p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Підтримка">
            <p>
              Найчастіше цей етап потрібен для ігрових «довгобудів» або
              випадків, коли обраний актор озвучує персонажів для подальших
              релізів.
            </p>
          </StyledAccordionItem>
        </StyledAccordion>
      </ServiceSection>

      <ServiceSection title="Вартість">
        <p style={{ marginBottom: 60 }}>
          Вартість проєкту залежить від вибору актора озвучення, базова обробка
          голосу включена у вартість, специфічна обробка обговорюється окремо.
        </p>
        <PlanList>
          <PlanCard
            title="Локальні актори озвучення"
            icon={HouseIcon}
            subTitle="Доступні мови"
            list={["українська", "російська", "англійська"]}
            onClick={() =>
              handleFormShow(
                "Дізнатися вартість",
                "Будь ласка, залиште нам свій email і ми з радістю надішлемо вам наші пропозиції голосового озвучення.",
                "local-voice-casting"
              )
            }
          />
          <PlanCard
            title="Іноземні актори озвучення"
            icon={PlanetIcon}
            subTitle="Доступні мови"
            list={[
              "англійська",
              "німецька",
              "французька",
              "іспанська",
              "китайська",
            ]}
            onClick={() =>
              handleFormShow(
                "Дізнатися вартість",
                "Будь ласка, залиште нам свій email і ми з радістю надішлемо вам наші пропозиції голосового озвучення.",
                "foreign-voice-casting"
              )
            }
          />
        </PlanList>
        <p>
          Якщо в списку доступних мов ви не знайшли потрібну вам — обов’язково{" "}
          <a rel="noopener noreferrer" target="_blank" href={mailTo.mail.uk}>
            напишіть нам
          </a>{" "}
          і ми підберемо потрібного актора.
        </p>
      </ServiceSection>
      <ModalContactForm
        title={formTitle}
        type="package-request"
        subTitle={formSubTitle}
        customLocation={formKey}
        open={showForm}
        onClose={handleFormClose}
      />
      <ServiceSection title="Наш підхід">
        <CardDeck>
          <CardDeckItem variant="rect" textAlign="left">
            У нашому розумінні ідеальна робота над голосовим озвученням проєкту
            виглядає так: ви передаєте нам сценарій і натомітсь отримуєте
            повністю готовий файл з усіма правами на нього.
          </CardDeckItem>
          <CardDeckItem variant="full-waves" textAlign="left">
            Ми беремо на себе весь «головний біль». У лапках — тому що роботи
            дійсно чимало, але нам вона подобається.
          </CardDeckItem>
          <CardDeckItem variant="waves" textAlign="left">
            Ми підбираємо потрібний вашому проєкту голос, організовуємо процес,
            ведемо проєкт і уважно контролюємо якість результату. Ми обробляємо
            аудіофайли і стежимо, щоб усе звучало, як потрібно. Крім того, усі
            юридичні аспекти ми теж беремо на себе й передаємо вам ексклюзивні
            права інтелектуальної власності на весь готовий матеріал.
          </CardDeckItem>
        </CardDeck>
      </ServiceSection>
      <ServiceSection title="Відгуки клієнтів">
        <ReviewCarousel reviews={reviews} />
      </ServiceSection>
      <div className="contact-us-wrapper">
        <ContactUs />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query VoiceCastingUkPageQuery {
    reviews: allWordpressWpClientReview(
      limit: 5
      filter: {
        acf: { vice_over: { vice_over_visibility: { eq: true } } }
        polylang_current_lang: { eq: "uk" }
      }
      sort: { fields: acf___vice_over___vice_over_order, order: DESC }
    ) {
      nodes {
        id
        title
        content
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 250, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        meta: acf {
          company
          position
          link: s_link
        }
      }
    }
    sidebarImage: file(relativePath: { eq: "services/voice-casting.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sitePage {
      id
      path
    }
  }
`

export default VoiceCasting
