import React from "react"
import { graphql } from "gatsby"
import Layout from "../../layouts/ru/sidebar"
import ServiceHero from "../../components/ServiceHero"
import ContactUs from "../../components/ContactUs"
import Sidebar from "../../components/Sidebar"
import ServiceSection from "../../components/ServiceSection"
import ServiceIconList from "../../components/ServiceIconList"
import ServiceIcon from "../../components/ServiceIcon"
import GamesIcon from "../../images/service-icons/games.svg"
import StyledAccordion from "../../components/StyledAccordion"
import StyledAccordionItem from "../../components/StyledAccordionItem"
import PlanList from "../../components/PlanList"
import PlanCard from "../../components/PlanCard"
import StandartIcon from "../../images/plans/standart.svg"
import ReviewCarousel from "../../components/ReviewCarousel/ReviewCarousel"
import CardDeck from "../../components/CardDeck/CardDeck"
import CardDeckItem from "../../components/CardDeckItem/CardDeckItem"

const MusicCreation = ({ data, location }) => {
  const reviews = data.reviews.nodes

  return (
    <Layout Sidebar={<Sidebar />} location={location}>
      <ServiceHero>
        <h3>Больше всего мы любим музыку за её возможности.</h3>
        <p>
          Это ведь самый сильный вид искусства, если сравнивать их всех по
          эмоциональному воздействию. Знаете, как это бывает, когда одна песня
          меняет ваше настроение?
        </p>
        <p>
          Всего пару нот, правильный ритмический рисунок и вот уже человек готов
          к великим свершениям. А стоит слегка изменить аранжировку – и он
          внезапно предаётся грустным воспоминаниям. Всё это захватывает нас и
          заставляет каждый день делать то, что мы делаем. Слушать, изучать и, в
          конце-концов, создавать музыку.
        </p>
      </ServiceHero>
      <ServiceSection title="Что мы делаем?">
        <p>Мы пишем саундтреки и создаём музыку для:</p>

        <ServiceIconList>
          <ServiceIcon title="Games" icon={GamesIcon} />
          <ServiceIcon title="Games" icon={GamesIcon} />
          <ServiceIcon title="Games" icon={GamesIcon} />
          <ServiceIcon title="Games" icon={GamesIcon} />
          <ServiceIcon title="Games" icon={GamesIcon} />
          <ServiceIcon title="Games" icon={GamesIcon} />
        </ServiceIconList>

        <p>
          Ещё мы создаём музыку для motion-дизайна, но она скорее относится к
          звуковому дизайну, так что о ней можете прочесть{" "}
          <a href="/">вот здесь.</a>
        </p>
        <p>
          Мы не пишем «минусовки» и песни для корпоративов. А вот корпоративные
          гимны — это мы с радостью, подробнее смотрите тут.
        </p>
      </ServiceSection>
      <ServiceSection title="Как происходит процесс?">
        <p>
          За последние несколько лет мы выработали простую схему для
          сотрудничества. Такую, чтобы вам на каждом этапе было понятно, что
          происходит, и у вас был контроль над процессом. А мы могли в это время
          создать именно ту музыку, которая нужна вашему проекту.
        </p>

        <StyledAccordion>
          <StyledAccordionItem title="What harsh truths do you prefer to ignore?">
            <p>
              Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
              occaecat ut occaecat consequat est minim minim esse tempor laborum
              consequat esse adipisicing eu reprehenderit enim.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Is free will real or just an illusion?">
            <p>
              In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
              nostrud velit in irure cillum tempor laboris sed adipisicing eu
              esse duis nulla non.
            </p>
          </StyledAccordionItem>
        </StyledAccordion>
      </ServiceSection>

      <ServiceSection title="Наши предложения">
        <p style={{ marginBottom: 60 }}>
          Кроме понятной схемы сотрудничества мы разработали ещё и понятные
          пакеты по созданию музыки. Мы проанализировали опыт предыдущих
          проектов, отзывы клиентов и поняли, что так вам будет гораздо легче
          выбрать подходящий для вашего проекта вариант.
        </p>

        <PlanList>
          <PlanCard
            title="Standart"
            icon={StandartIcon}
            subTitle="Название скучное, пакет крутой"
            list={[
              "Выполнение — до 7 рабочих дней.",
              "Выполнение — до 7 рабочих дней.",
              "Выполнение — до 7 рабочих дней.",
              "Выполнение — до 7 рабочих дней.",
            ]}
          />
          <PlanCard
            title="Standart"
            icon={StandartIcon}
            subTitle="Название скучное, пакет крутой"
            list={[
              "Выполнение — до 7 рабочих дней.",
              "Выполнение — до 7 рабочих дней.",
              "Выполнение — до 7 рабочих дней.",
              "Выполнение — до 7 рабочих дней.",
            ]}
          />
          <PlanCard
            title="Standart"
            icon={StandartIcon}
            subTitle="Название скучное, пакет крутой"
            list={[
              "Выполнение — до 7 рабочих дней.",
              "Выполнение — до 7 рабочих дней.",
              "Выполнение — до 7 рабочих дней.",
              "Выполнение — до 7 рабочих дней.",
            ]}
          />
          <PlanCard
            title="Standart"
            icon={StandartIcon}
            subTitle="Название скучное, пакет крутой"
            list={[
              "Выполнение — до 7 рабочих дней.",
              "Выполнение — до 7 рабочих дней.",
              "Выполнение — до 7 рабочих дней.",
              "Выполнение — до 7 рабочих дней.",
            ]}
          />
        </PlanList>
      </ServiceSection>
      <ServiceSection title="Наш подход">
        <CardDeck>
          <CardDeckItem variant="waves" textAlign="left">
            Многие люди считают создание музыки чем-то непостижимым и
            таинственным. Некоторые же утверждают, что всё дело — исключительно
            в технике и правильной методологии. Нам кажется, за годы практики мы
            наконец приблизились к пониманию, как всё устроено.
          </CardDeckItem>
          <CardDeckItem variant="waves-revers" textAlign="left">
            Многие люди считают создание музыки чем-то непостижимым и
            таинственным. Некоторые же утверждают, что всё дело — исключительно
            в технике и правильной методологии. Нам кажется, за годы практики мы
            наконец приблизились к пониманию, как всё устроено.
          </CardDeckItem>
          <CardDeckItem variant="waves" textAlign="left">
            Многие люди считают создание музыки чем-то непостижимым и
            таинственным. Некоторые же утверждают, что всё дело — исключительно
            в технике и правильной методологии. Нам кажется, за годы практики мы
            наконец приблизились к пониманию, как всё устроено.
          </CardDeckItem>
          <CardDeckItem variant="full-waves" textAlign="center">
            Мы же нашли баланс. Всё дело — в «планировании» вдохновения.
          </CardDeckItem>
          <CardDeckItem variant="circle" textAlign="center">
            Творчески и надёжно.
          </CardDeckItem>
        </CardDeck>
      </ServiceSection>
      <ServiceSection title="Отзывы клиентов">
        <ReviewCarousel reviews={reviews} />
      </ServiceSection>
      <div className="contact-us-wrapper">
        <ContactUs />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MusicCreationRUPageQuery {
    reviews: allWordpressWpClientReview {
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
    sitePage {
      id
      path
    }
  }
`

export default MusicCreation
