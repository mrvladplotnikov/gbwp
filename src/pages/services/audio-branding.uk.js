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

const AudioBranding = ({ data, location }) => {
  const reviews = data.reviews.nodes
  const sidebarImage = data.sidebarImage.childImageSharp.fluid
  const works = data.works.nodes

  return (
    <Layout
      Sidebar={
        <Sidebar
          title="Аудиобрендинг"
          text="В современном мире бренды должны относиться к звуку с той же тщательностью и дисциплиной, что и к графическим стандартам и визуальному построению бренда. Если вы застряли в мире исключительно визуального брендинга, то соревнуетесь вы с одной завязанной за спиной рукой."
          autor="Лоуренс Мински, Коллин Фэйхи"
          image={sidebarImage}
        />
      }
      location={location}
    >
      <ServiceHero>
        <h3>Для людей, які створюють звук, нас занадто цікавить маркетинг.</h3>
        <p>
          Він здається нам таким собі сучасним видом мистецтва, дуже комплексним
          і істинно прикладним. А ми любимо створювати те, що перебуває на межі
          чистої творчості та функціональності, ось і зайнялися аудіобрендингом.
        </p>
        <p>
          Потенціал звуку для підтримки брендів часто не використовують на повну
          й ми хочемо це змінити. Адже правильний аудіобренд допомагає
          вибудувати потрібні асоціації в споживача й підсилює його зв’язок із
          продуктом або компанією. Він стане тим, що змусить людину миттєво
          впізнати ваш бренд, навіть якщо вона його ще не побачила.
        </p>
      </ServiceHero>
      <ServiceSection title="Що ми робимо?">
        <p>Ми створюємо:</p>

        <ServiceIconList>
          <ServiceIcon title="Iміджеву музику" icon={FemaleIcon} />
          <ServiceIcon title="Джингли та музичні логотипи" icon={JingleIcon} />
          <ServiceIcon title="Аудіорекламу" icon={AudioIcon} />
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
          Кожен аудіобренд — унікальний, як і сам бренд. У кожного бізнесу —
          свої потреби й немає універсальної формули та складу аудіобренда. Тому
          для кожного проекту ми створюємо персональний набір елементів залежно
          від завдань, які необхідно вирішити.
        </p>
      </ServiceSection>
      <ServiceSection title="Наші роботи" noGatters>
        <WorkCards works={works} />
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
              ви пишете нам і отримуєте в зручній формі безплатну консультацію,
              а ми дізнаємося про ваш бренд. Так ми знайомимося один з одним і
              розуміємо, наскільки готові до співпраці. Для нас важливо
              збігатися з клієнтом у загальному баченні і принципах роботи.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Підготовка">
            <p>
              на цьому етапі ми заглиблюємося у вивчення вашого бренду, ви
              розповідаєте нам про ваші маркетингові заходи, разом ми визначаємо
              роль та значення майбутнього аудіобренда.
            </p>
            <p>
              Паралельно разом із юристами ми готуємо договір співпраці. Далі
              обговорюємо й погоджуємо все з вами і приступаємо до наступного
              етапу.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Запуск">
            <p>
              ми з вами підписуємо договір, ви висилаєте аванс і ми приступаємо
              до виконання скетчів. Це може бути ескіз мелодії або декілька
              звуків — залежить від того, які елементи ми повинні розробити.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Продакшн">
            <p>
              цей етап — найвідповідальніший. Ми надсилаємо вам демо-матеріали
              та отримуємо від вас фідбек. Тут від вас знадобиться максимальна
              концентрація на процесі, адже саме від вашої думки залежить
              подальша доля всього аудіобренда.
            </p>
            <p>
              Спираючись на фідбек ми допрацьовуємо потрібні елементи й
              переходимо до наступного етапу.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Прийом проекту">
            <p>
              після всіх погоджень ми висилаємо вам кінцеві файли. Цей момент —
              останній шанс скористатися безплатними правками. Коли все готово,
              ми з вами підписуємо Акт прийому-передачі і ви відправляєте нам
              другу частину оплати.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Підтримка">
            <p>
              якщо в майбутньому у вашого бренду з’являться нові точки контакту
              з аудиторією, яким потрібно своє звучання, ми з цим обов’язково
              допоможемо. Ми завжди раді тривалій співпраці.
            </p>
          </StyledAccordionItem>
        </StyledAccordion>
      </ServiceSection>

      <ServiceSection title="Вартість">
        <p>
          Вартість розробки аудіобренду залежить від набору елементів, які вам
          потрібно отримати в результаті. Напишіть нам і розкажіть про ваш бренд
          і його потреби, а ми підкажемо, що варто створити і скільки це буде
          коштувати.
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
            створюємо іміджевий трек або джингл, який визначає те, якими будуть
            усі інші елементи аудіобренда. Часто джингл трансформується в різні
            форми, навіть у звук сповіщень на телефоні.
          </CardDeckItem>
          <CardDeckItem variant="waves" textAlign="left">
            Ми ретельно вивчаємо ваш бренд, пробираємося в самі глибини вашого
            маркетинг-кіта й задаємо багато запитань. :) А ще завжди раді, якщо
            у вас є власна фокус-група або можливість провести тести на цільовій
            аудиторії. Завдяки цьому ми можемо ще точніше створювати потрібне
            вам звучання.
          </CardDeckItem>
          <CardDeckItem variant="rect-revers" textAlign="center">
            Але вам потрібно одразу бути готовими до того, що нам буде потрібно
            певна творча свобода. Тому що музика і звук — це, насамперед,
            мистецтво, яке не варто заганяти в занадто жорсткі рамки. У якийсь
            момент вам доведеться нам довіритися, щоби ми віднайшли голос для
            вашого бренду.
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
  query AudioBrandingUkPageQuery {
    reviews: allWordpressWpClientReview(
      filter: { polylang_current_lang: { eq: "uk" } }
      limit: 5
    ) {
      nodes {
        id
        title
        content
        featured_media {
          localFile {
            childImageSharp {
              fluid(
                maxWidth: 250
                maxHeight: 250
                srcSetBreakpoints: [445, 900]
              ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        meta: acf {
          company
          position
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
