import React from "react"
import { graphql } from "gatsby"
import Layout from "../../layouts/uk/sidebar"
import ServiceHero from "../../components/ServiceHero"
import ContactUs from "../../components/ContactUs"
import Sidebar from "../../components/Sidebar"
import ServiceSection from "../../components/ServiceSection"
import ServiceIconList from "../../components/ServiceIconList"
import ServiceIcon from "../../components/ServiceIcon"
import GamesIcon from "../../images/service-icons/games.svg"
import StyledAccordion from "../../components/StyledAccordion"
import StyledAccordionItem from "../../components/StyledAccordionItem"
import ReviewCarousel from "../../components/ReviewCarousel/ReviewCarousel"
import CardDeck from "../../components/CardDeck/CardDeck"
import CardDeckItem from "../../components/CardDeckItem/CardDeckItem"
import WorkCards from "../../components/WorkCards"

const SoundDesign = ({ data, location }) => {
  const reviews = data.reviews.nodes
  const sidebarImage = data.sidebarImage.childImageSharp.fluid
  const works = data.works.nodes

  return (
    <Layout
      Sidebar={
        <Sidebar
          title="Звуковий дизайн"
          text="При создании игр, как и при съёмке кино, звук имеет очень
большое значение. 60 или даже 70% ощущений создаётся именно за
счёт звука. При этом звук – это не только музыкальное
сопровождение, но и звуковые эффекты. Их наличие или отсутствие
очень сильно определяет атмосферу игры."
          autor="Хидео Кодзима"
          image={sidebarImage}
        />
      }
      location={location}
    >
      <ServiceHero>
        <h3>
          Якщо музика — це мистецтво, то звук — первісно спосіб передачі
          інформації.
        </h3>
        <p>
          Притому, один із найдавніших. Але це не означає, що музика — тільки
          емоційна, а звук — лише інформативний. Секундний звук теж може бути
          емоційним і точно як і музика безпосередньо впливати на емоції людини.
        </p>
        <p>
          Хочемо ми цього чи ні, але тривожний звук змусить нас насторожитися.
          Саме за подібні речі ми й любимо звуковий дизайн. А ще за те, як він
          перетворює будь-яку картинку, додає в неї життя, допомагає глядачеві
          повірити в те, що відбувається. Магія!
        </p>
      </ServiceHero>
      <ServiceSection title="Що ми робимо?">
        <p>Ми створюємо:</p>

        <ServiceIconList>
          <ServiceIcon
            title="Звукові ефекти для будь-яких медіа-проектів"
            icon={GamesIcon}
          />
          <ServiceIcon
            title="Звукове оформлення для motion-диЗайну"
            icon={GamesIcon}
          />
          <ServiceIcon
            title="Звукове оформлення простору (квест-кімнати, інсталяції та інше)"
            icon={GamesIcon}
          />
        </ServiceIconList>

        <p>
          Ми самостійно синтезуємо, записуємо й обробляємо звуки, щоби вони
          підходили вашому проекту і виконували свою функцію.
        </p>
        <p>
          Ще ми створюємо атмосферні ембієнти й легко перетворюємо музику в один
          з елементів звукового дизайну. Останнє актуально для motion-дизайну,
          коли музика і звуки переплітаються й доповнюють один одного, щоби
          картинка виглядала максимально круто.
        </p>
      </ServiceSection>
      <ServiceSection title="Наші роботи">
        <WorkCards works={works} />
      </ServiceSection>
      <ServiceSection title="Як проходить процес?">
        <p>
          За останні кілька років ми виробили просту схему для співпраці. Таку,
          щоби вам на кожному етапі було зрозуміло, що відбувається, й у вас був
          контроль над процесом. А ми могли в цей час створити потрібне звукове
          оформлення для вашого проекту.
        </p>
        <p>Усього шість етапів:</p>
        <StyledAccordion>
          <StyledAccordionItem title="Знайомство">
            <p>
              ви пишете нам і отримуєте в зручній формі безплатну консультацію,
              а ми дізнаємося про ваш проект. Так ми знайомимося один з одним і
              розуміємо, наскільки готові до співпраці. Для нас важливо
              збігатися з клієнтом у загальному баченні і принципах роботи.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Підготовка">
            <p>
              на цьому етапі ви складаєте технічне завдання, якщо потрібно — ми
              допомагаємо. Чому ми не робимо ТЗ самостійно — читайте тут. Крім
              того, ми підбираємо референс звукової стилістики й разом із
              юристами готуємо договір співпраці. Обговорюємо й погоджуємо все з
              вами й переходимо до наступного етапу.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Запуск">
            <p>
              ми з вами підписуємо договір, ви висилаєте аванс і ми приступаємо
              до виконання скетчів. Зазвичай це 3–4 звуки, які відображають
              загальну стилістику звукового оформлення.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Продакшн">
            <p>
              цей етап — найвідповідальніший. Ми відправляємо вам демо-матеріали
              та отримуємо від вас фідбек. Тут від вас знадобиться максимальна
              концентрація на процесі, адже саме від ваших побажань залежить
              подальша доля всього звукового дизайну проекту.
            </p>
            <p>
              Спираючись на ваші думки і пропозиції ми розробляємо інші звуки та
              надсилаємо їх вам на погодження. У вас буде можливість внести до
              трьох безплатних правок на кожен звук.
            </p>
            <p>
              Для ігрових проектів на цьому етапі ми також імплементуємо звуки в
              проект за допомогою аудіодвижків Wwise і Fmod.
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
              найчастіше цей етап потрібен для ігрових «довгобудів» і
              обговорюється окремо. Скажемо тільки, що ми завжди раді тривалій
              співпраці.
            </p>
          </StyledAccordionItem>
        </StyledAccordion>
        <p>
          У фіналі кожного проекту ми уважно слухаємо, як усе звучить і працює
          разом. Якщо потрібно — ми налаштовуємо гучності, загасання й інші
          аспекти або підказуємо вам, як це краще зробити самостійно.
        </p>
      </ServiceSection>

      <ServiceSection title="Вартість">
        <p>Загальна вартість проекту залежить від об’єму завдань.</p>
        <p>
          Для всіх звукових ефектів і ембієнту в нас є фіксована ціна, яка
          множиться на потрібну для вашого проекту кількість. Імплементація, за
          необхідності, розраховується окремо.
        </p>
        <p>
          Для озвучування motion-дизайн роликів вартість розраховується інакше:
          тут враховується складність картинки і тривалість відео.
        </p>
        <p>
          Напишіть нам, щоби дізнатися точну вартість звукового дизайну для
          вашого конкретного проекту.
        </p>
      </ServiceSection>
      <ServiceSection title="Наш підхід">
        <CardDeck>
          <CardDeckItem variant="rect" textAlign="left">
            Ми вважаємо звуковий дизайн функціональним мистецтвом, простором для
            пошуків і експериментів, і відповідальною частиною будь-якого
            медіа-проекту. Якщо до створення музики ми підходимо «з усією
            душею», то до звукового дизайну — з прагматизмом і фантазією.
          </CardDeckItem>
          <CardDeckItem variant="full-waves" textAlign="left">
            Для нас важливо змусити кожен елемент звучати так, щоб у слухача не
            виникало сумнівів, що це «рідний» звук. Кожен ефект ми створюємо з
            думкою про почуття, які він повинен викликати в людини.
          </CardDeckItem>
          <CardDeckItem variant="waves" textAlign="left">
            Чи буде звук напружувати його? Чи змусить відчути полегшення? Або
            попередить про щось? Ми продумуємо кожну деталь. Особливо те, як
            будуть звучати всі звуки разом. Як вони будуть взаємодіяти один з
            одним і загальним фоном — ембієнтом або музикою.
          </CardDeckItem>
          <CardDeckItem variant="rect-revers" textAlign="center">
            Для ігрових проектів ми імплементуємо звуки за допомогою Wwise і
            Fmod — так і ми, і ви будемо впевнені у фінальному звучанні. Ми
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
              fluid(maxWidth: 249, srcSetBreakpoints: [445, 900]) {
                ...GatsbyImageSharpFluid_withWebp
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
