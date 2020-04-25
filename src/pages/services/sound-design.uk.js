import React from "react"
import { graphql, Link } from "gatsby"
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

import PlayerIcon from "../../images/service-icons/player.svg"
import FileIcon from "../../images/service-icons/file-2.svg"
import RoomIcon from "../../images/service-icons/room.svg"

import mailTo from "../../utils/mailTo"
import StyledLink from "../../components/StyledLink"

const SoundDesign = ({ data, location }) => {
  const reviews = data.reviews.nodes
  const sidebarImage = data.sidebarImage.childImageSharp.fluid
  const works = data.works.nodes

  return (
    <Layout
      Sidebar={
        <Sidebar
          title="Звуковий дизайн"
          text="Під час створення ігор, як і під час зйомок кіно, звук має дуже велике значення. 60 або навіть 70 % відчуттів створюється саме завдяки звуку. Водночас звук — це не тільки музичний супровід, а і звукові ефекти. Їхня наявність або відсутність дуже сильно визначає атмосферу гри."
          autor="Хідео Кодзіма"
          image={sidebarImage}
        />
      }
      ServiceHero={
        <ServiceHero>
          <h3>
            Якщо музика — це мистецтво, то звук — первісно спосіб передачі
            інформації.
          </h3>
          <p>
            Притому, один із найдавніших. Але це не означає, що музика — тільки
            емоційна, а звук — лише інформативний. Секундний звук теж може бути
            емоційним і точно як і музика безпосередньо впливати на емоції
            людини.
          </p>
          <p>
            Хочемо ми цього чи ні, але тривожний звук змусить нас насторожитися.
            Саме за подібні речі ми й любимо звуковий дизайн. А ще за те, як він
            перетворює будь-яку картинку, додає в неї життя, допомагає глядачеві
            повірити в те, що відбувається. Магія!
          </p>
        </ServiceHero>
      }
      location={location}
      title="Звуковий дизайн"
    >
      <ServiceSection title="Що ми робимо?">
        <p>Ми створюємо:</p>
        <ServiceIconList>
          <ServiceIcon
            title="Звукові ефекти для аудіовізуальних проєктів"
            icon={FileIcon}
            style={{ maxWidth: 260 }}
          />
          <ServiceIcon
            title="Звукове оформлення для motion-графіки"
            icon={PlayerIcon}
            style={{ maxWidth: 260 }}
          />
          <ServiceIcon
            title="Звукове оформлення простору (квест-кімнати, інсталяції та інше)"
            icon={RoomIcon}
            style={{ maxWidth: 260 }}
          />
        </ServiceIconList>

        <p>
          Ми самостійно синтезуємо, записуємо й обробляємо звуки, щоби вони
          підходили вашому проєкту і виконували свою функцію.
        </p>
        <p>
          Ще ми створюємо атмосферні ембієнти й легко перетворюємо музику в один
          з елементів звукового дизайну. Останнє актуально для{" "}
          <Link to="/works/audio-for-motion-design">motion-графіки</Link>, коли
          музика і звуки переплітаються й доповнюють один одного, щоби картинка
          виглядала максимально круто.
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
        <div className="service-works-porfolio-button-container">
          <StyledLink
            state={{
              service: "sound-design",
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
          За останні кілька років ми виробили просту схему для співпраці. Таку,
          щоби вам на кожному етапі було зрозуміло, що відбувається, й у вас був
          контроль над процесом. А ми могли в цей час створити потрібне звукове
          оформлення для вашого проєкту.
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
              На цьому етапі ви складаєте технічне завдання, якщо потрібно — ми
              допомагаємо. Чому ми не робимо ТЗ самостійно — читайте{" "}
              <Link to="/faq">тут</Link>.
            </p>
            <p>
              {" "}
              Крім того, ми підбираємо референс звукової стилістики й разом із
              юристами готуємо договір співпраці. Обговорюємо й погоджуємо все з
              вами й переходимо до наступного етапу.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Запуск">
            <p>
              Ми з вами підписуємо договір, ви висилаєте аванс і ми приступаємо
              до виконання скетчів. Зазвичай це 3–4 звуки, які відображають
              загальну стилістику звукового оформлення.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Продакшн">
            <p>
              Цей етап — найвідповідальніший. Ми відправляємо вам демо-матеріали
              та отримуємо від вас фідбек. Тут від вас знадобиться максимальна
              концентрація на процесі, адже саме від ваших побажань залежить
              подальша доля всього звукового дизайну проєкту.
            </p>
            <p>
              Спираючись на ваші думки і пропозиції ми розробляємо інші звуки та
              надсилаємо їх вам на погодження. У вас буде можливість внести до
              трьох безплатних правок на кожен звук.
            </p>
            <p>
              Для ігрових проєктів на цьому етапі ми також імплементуємо звуки в
              проєкт за допомогою аудіорушіїв Wwise і Fmod.
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
              Найчастіше цей етап потрібен для ігрових «довгобудів» і
              обговорюється окремо. Скажемо тільки, що ми завжди раді тривалій
              співпраці.
            </p>
          </StyledAccordionItem>
        </StyledAccordion>
        <p>
          У фіналі кожного проєкту ми уважно слухаємо, як усе звучить і працює
          разом. Якщо потрібно — ми налаштовуємо гучності, загасання й інші
          аспекти або підказуємо вам, як це краще зробити самостійно.
        </p>
      </ServiceSection>

      <ServiceSection title="Вартість">
        <p>Загальна вартість проєкту залежить від об’єму завдань.</p>
        <p>
          Для всіх звукових ефектів і ембієнту в нас є фіксована ціна, яка
          множиться на потрібну для вашого проєкту кількість. Імплементація, за
          необхідності, розраховується окремо.
        </p>
        <p>
          Для озвучування роликів із motion-графікою вартість розраховується
          інакше: тут враховується складність картинки і тривалість відео.
        </p>
        <p>
          <a href={mailTo.soundDesign.uk}>Напишіть нам</a>, щоби дізнатися точну
          вартість звукового дизайну для вашого конкретного проєкту.
        </p>
      </ServiceSection>
      <ServiceSection title="Наш підхід">
        <CardDeck>
          <CardDeckItem variant="rect" textAlign="left">
            Ми вважаємо звуковий дизайн функціональним мистецтвом, простором для
            пошуків і експериментів, і відповідальною частиною будь-якого
            медіа-проєкту. Якщо до створення музики ми підходимо «з усією
            душею», то до звукового дизайну — з прагматизмом і фантазією.
          </CardDeckItem>
          <CardDeckItem variant="full-waves" textAlign="left">
            Для нас важливо змусити кожен елемент звучати так, щоб у слухача не
            виникало сумнівів, що це «рідний» звук. Кожен ефект ми створюємо з
            думкою про почуття, які він повинен викликати в людини.
          </CardDeckItem>
          <CardDeckItem variant="waves" textAlign="left">
            Чи буде звук напружувати? Чи змусить відчути полегшення? Або
            попередить про щось? Ми продумуємо кожну деталь. Особливо те, як
            будуть звучати всі звуки разом. Як вони будуть взаємодіяти один з
            одним і загальним фоном — ембієнтом або музикою.
          </CardDeckItem>
          <CardDeckItem variant="rect-revers" textAlign="center">
            Для ігрових проєктів ми імплементуємо звуки за допомогою Wwise і
            Fmod — так ми разом з вами будемо впевнені у фінальному звучанні. Ми
            налаштовуємо гучності, кількість одночасних відтворень,
            рандомізацію, варіативність ассетів і інші важливі моменти.
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
  query SoundDesignUKPageQuery {
    reviews: allWordpressWpClientReview(
      limit: 5
      filter: {
        acf: { sound_design: { sound_design_visibility: { eq: true } } }
        polylang_current_lang: { eq: "uk" }
      }
      sort: { fields: acf___sound_design___sound_design_order, order: DESC }
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
    works: allWordpressWpWork(
      filter: {
        acf: { sound_design: { sound_design_visibility: { eq: true } } }
        polylang_current_lang: { eq: "uk" }
      }
      sort: { fields: acf___sound_design___sound_design_order, order: DESC }
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
    sidebarImage: file(relativePath: { eq: "services/sound-design.jpg" }) {
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

export default SoundDesign
