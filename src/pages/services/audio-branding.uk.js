import React from "react"
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
import WorkCards from "../../components/WorkCards"

import FemaleIcon from "../../images/service-icons/female.svg"
import JingleIcon from "../../images/service-icons/jingle.svg"
import AudioIcon from "../../images/service-icons/audio.svg"
import PhoneIcon from "../../images/service-icons/phone.svg"
import SoundIcon from "../../images/service-icons/sound.svg"

import mailTo from "../../utils/mailTo"
import StyledLink from "../../components/StyledLink"

const AudioBranding = ({ data, location }) => {
  const reviews = data.reviews.nodes
  const sidebarImage = data.sidebarImage.childImageSharp.fluid
  const works = data.works.nodes

  return (
    <Layout
      Sidebar={
        <Sidebar
          title="Аудіобрендинг"
          text="У сучасному світі бренди повинні ставитися до звуку з тією ж ретельністю й дисципліною, що й до графічних стандартів та візуальної побудови бренду. Якщо ви застрягли у світі виключно візуального брендингу, то змагаєтеся ви з однією зав’язаною за спиною рукою."
          autor="Лоуренс Мінскі, Коллін Фейхі"
          image={sidebarImage}
        />
      }
      ServiceHero={
        <ServiceHero>
          <h3>
            Для людей, які створюють звук, нас занадто цікавить маркетинг.
          </h3>
          <p>
            Він здається нам таким собі сучасним видом мистецтва, дуже
            комплексним і істинно прикладним. А ми любимо створювати те, що
            перебуває на межі чистої творчості та функціональності, ось і
            зайнялися аудіобрендингом.
          </p>
          <p>
            Потенціал звуку для підтримки брендів часто не використовують на
            повну й ми хочемо це змінити. Адже правильний аудіо бренд допомагає
            вибудувати потрібні асоціації в споживача й підсилює його зв’язок із
            продуктом або компанією. Він стане тим, що змусить людину миттєво
            впізнати ваш бренд, навіть якщо вона його ще не побачила.
          </p>
        </ServiceHero>
      }
      location={location}
      title="Аудіобрендинг. Звукова айндентика та створення джинглів"
      description="Звукова ідентичність вашого бренду. Емоційна точка диференціації. Новий спосіб залучення уваги й комунікації з вашою аудиторією. ✔ Процес співпраці. Наші пропозиції та підхід. Відгуки клієнтів."
    >
      <ServiceSection title="Що ми робимо?">
        <p>Ми створюємо:</p>

        <ServiceIconList>
          <ServiceIcon title="Аудіо стратегії брендів" icon={FemaleIcon} />
          <ServiceIcon title="Аудіо логотипи та джингли" icon={JingleIcon} />
          <ServiceIcon title="Аудіорекламу та бренд-музику" icon={AudioIcon} />
          <ServiceIcon
            title="Звукову айдентику для додатків"
            icon={PhoneIcon}
          />
          <ServiceIcon
            title="Iнші аудіальні точки контакту з клієнтом"
            icon={SoundIcon}
          />
        </ServiceIconList>

        <p>
          Кожен аудіо бренд — унікальний, як і сам бренд. У кожного бізнесу —
          свої потреби й немає універсальної формули та складу аудіо бренда.
          Тому для кожного проєкту ми створюємо персональну стратегію та набір
          елементів залежно від завдань, які необхідно вирішити.
        </p>
      </ServiceSection>
      <ServiceSection title="Наші роботи" noGatters>
        <WorkCards
          works={works}
          breakpoints={{
            default: 3,
            1100: 3,
            700: 3,
            500: 2,
          }}
        />
        <iframe
          title="Наші роботи"
          width="100%"
          height="450"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/758338767&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
        <div className="service-works-porfolio-button-container">
          <StyledLink
            state={{
              service: "audio-branding",
            }}
            to="/portfolio"
            className="service-works-porfolio-button"
          >
            Портфолiо
          </StyledLink>
        </div>
      </ServiceSection>
      <ServiceSection title="Як проходить процес?">
        <p>
          За останні кілька років ми розробили просту схему для співпраці. Таку,
          щоби вам на кожному етапі було зрозуміло, що відбувається, й у вас був
          контроль над процесом. А ми могли в цей час віднайти потрібне звучання
          для вашого бренду.
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
              , а ми дізнаємося про ваш бренд. Так ми знайомимося один з одним і
              розуміємо, наскільки готові до співпраці. Для нас важливо
              збігатися з клієнтом у загальному баченні і принципах роботи.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Підготовка">
            <p>
              На цьому етапі ми заглиблюємося у вивчення вашого бренду, ви
              розповідаєте нам про ваші маркетингові заходи, разом ми визначаємо
              роль та значення майбутнього аудіо бренда.
            </p>
            <p>
              Паралельно разом із юристами ми готуємо договір співпраці. Далі
              обговорюємо й погоджуємо все з вами і приступаємо до наступного
              етапу.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Запуск">
            <p>
              Ми з вами підписуємо договір, ви висилаєте аванс і ми приступаємо
              до виконання скетчів. Це може бути ескіз мелодії або декілька
              звуків — залежить від того, які елементи ми повинні розробити.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Продакшн">
            <p>
              Цей етап — найвідповідальніший. Ми надсилаємо вам демо-матеріали
              та отримуємо від вас фідбек. Тут від вас знадобиться максимальна
              концентрація на процесі, адже саме від вашої думки залежить
              подальша доля всього аудіо бренда.
            </p>
            <p>
              Спираючись на фідбек ми допрацьовуємо потрібні елементи й
              переходимо до наступного етапу.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Прийом проєкту">
            <p>
              Після всіх погоджень ми висилаємо вам кінцеві файли. Цей момент —
              останній шанс скористатися безплатними правками.{" "}
            </p>
            <p>
              {" "}
              Коли все готово, ми з вами підписуємо Акт прийому-передачі і ви
              відправляєте нам другу частину оплати.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Підтримка">
            <p>
              Якщо в майбутньому у вашого бренду з’являться нові точки контакту
              з аудиторією, яким потрібно своє звучання, ми з цим обов’язково
              допоможемо. Ми завжди раді тривалій співпраці.
            </p>
          </StyledAccordionItem>
        </StyledAccordion>
      </ServiceSection>

      <ServiceSection title="Вартість">
        <p>
          Вартість розробки аудіо бренду залежить від набору елементів, які вам
          потрібно отримати в результаті.{" "}
          <a href={mailTo.audioBranding.uk}>Напишіть нам</a> і розкажіть про ваш
          бренд і його потреби, а ми підкажемо, що варто створити і скільки це
          буде коштувати.
        </p>
      </ServiceSection>
      <ServiceSection title="Наш підхід">
        <CardDeck>
          <CardDeckItem variant="rect" textAlign="left">
            Ми вважаємо своїм головним завданням створити унікальне звучання для
            вашого бренду, зробити його максимально інформативним. Вмістити всю
            суть у звук і правильно його спрямувати, щоби впливати на емоції
            вашого споживача так, як це потрібно вам.
          </CardDeckItem>
          <CardDeckItem variant="full-waves" textAlign="left">
            Ми продумуємо, де й коли ваш бренд буде звучати. Спочатку ми
            розробляємо аудіо-ДНК — головну музичну тему, у якій відображаються
            ідеологія і відмінні риси бренду. Вона визначає те, якими будуть усі
            інші елементи аудіо бренду: аудіо лого, бренд-треки, джингли,
            сповіщення для додатків тощо.
          </CardDeckItem>
          <CardDeckItem variant="waves" textAlign="left">
            Ми ретельно вивчаємо ваш бренд, пробираємося в самі глибини вашого
            маркетинг-кіта й задаємо багато запитань. :) А ще завжди раді, якщо
            у вас є власна фокус-група або можливість провести тести на цільовій
            аудиторії. Завдяки цьому ми можемо ще точніше створювати потрібне
            вам звучання.
          </CardDeckItem>
          <CardDeckItem variant="rect-revers" textAlign="center">
            Ми віримо у те, що музика і звук — це, насамперед, мистецтво, яке не
            варто заганяти в занадто жорсткі рамки. Але вміємо працювати з ними
            так, аби ви отримали потужну конкурентну перевагу на межі
            функціональності та емоцій.
          </CardDeckItem>
        </CardDeck>
      </ServiceSection>
      <ServiceSection title="Відгуки клієнтів і партнерів">
        <ReviewCarousel reviews={reviews} />
      </ServiceSection>
      <div className="contact-us-wrapper">
        <ContactUs>
          Розкажіть нам про свій проєкт, продукт або ідею. Запитайте пораду або
          отримайте повноцінну{" "}
          <a rel="noopener noreferrer" target="_blank" href={mailTo.mail.uk}>
            безплатну консультацію
          </a>
          . Дізнайтеся вартість, уточніть важливе питання, та що завгодно! Ми
          будемо раді з вами познайомитися й допомогти.
        </ContactUs>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query AudioBrandingUkPageQuery {
    reviews: allWordpressWpClientReview(
      limit: 5
      filter: {
        acf: { audiobrending: { audiobrending_visibility: { eq: true } } }
        polylang_current_lang: { eq: "uk" }
      }
      sort: { fields: acf___audiobrending___audiobrending_order, order: DESC }
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
    sidebarImage: file(relativePath: { eq: "services/audio-branding.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    works: allWordpressWpWork(
      filter: {
        acf: { audiobrending: { audiobrending_visibility: { eq: true } } }
        polylang_current_lang: { eq: "uk" }
      }
      sort: { fields: acf___audiobrending___audiobrending_order, order: DESC }
    ) {
      nodes {
        id
        slug
        title
        lang: polylang_current_lang
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 750, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    sitePage {
      id
      path
    }
  }
`

export default AudioBranding
