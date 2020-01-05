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
import ReviewCarousel from "../../components/ReviewCarousel/ReviewCarousel"
import CardDeck from "../../components/CardDeck/CardDeck"
import CardDeckItem from "../../components/CardDeckItem/CardDeckItem"
import WorkCardsList from "../../components/WorkCardsList"

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
        <h3>
          Для людей, которые создают звук, мы слишком интересуемся маркетингом.
        </h3>
        <p>
          Нам он кажется неким современным видом искусства, очень комплексным и
          истинно прикладным. А мы любим создавать то, что находится на грани
          чистого творчества и функциональности, вот и занялись аудиобрендингом?
        </p>
        <p>
          Потенциал звука для поддержки брендов часто не используют на полную и
          мы хотим это изменить. Ведь правильный аудиобренд помогает выстроить
          нужные ассоциации у потребителя и усиливает его связь с продуктом или
          компанией. Он станет тем, что заставит человека мгновенно узнать ваш
          бренд, даже если он его ещё не увидел.
        </p>
      </ServiceHero>
      <ServiceSection title="Что мы делаем?">
        <p>Мы создаём:</p>

        <ServiceIconList>
          <ServiceIcon title="Имиджевую музыку" icon={GamesIcon} />
          <ServiceIcon
            title="Джинглы и музыкальные логотипы"
            icon={GamesIcon}
          />
          <ServiceIcon title="Aудиорекламу" icon={GamesIcon} />
          <ServiceIcon
            title="Звуковую айдентику для приложения"
            icon={GamesIcon}
          />
          <ServiceIcon
            title="Другие аудиальные точки контакта с клиентом"
            icon={GamesIcon}
          />
        </ServiceIconList>

        <p>
          Каждый аудиобренд — уникален, как и сам бренд. У каждого бизнеса —
          свои потребности и нет универсальной формулы и состава аудиобренда.
          Поэтому для каждого проекта мы создаём персональный набор элементов в
          зависимости от задач, которые нужно решить.
        </p>
      </ServiceSection>
      <ServiceSection title="Наши работы">
        <WorkCardsList works={works} />
      </ServiceSection>
      <ServiceSection title="Как происходит процесс?">
        <p>
          За последние несколько лет мы выработали простую схему для
          сотрудничества. Такую, чтобы вам на каждом этапе было понятно, что
          происходит, и у вас был контроль над процессом. А мы могли в это время
          создать нужное звучание для вашего бренда.
        </p>
        <p>Всего шесть этапов:</p>
        <StyledAccordion>
          <StyledAccordionItem title="Знакомство">
            <p>
              вы пишете нам и получаете в удобной форме бесплатную консультацию,
              а мы узнаём о вашем бренде. Так мы знакомимся друг с другом и
              понимаем, насколько готовы сотрудничать. Для нас важно совпадать с
              клиентом в общем видении и принципах работы.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Подготовка">
            <p>
              на этом этапе мы углубляемся в изучение вашего бренда, вы
              рассказываете нам о ваших маркетинговых мероприятиях, вместе мы
              определяем роль и значение будущего аудиобренда. Параллельно
              вместе с юристами мы готовим договор сотрудничества. Далее
              обсуждаем и согласовываем всё с вами и приступаем к следующему
              этапу.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Запуск">
            <p>
              мы с вами подписываем договор, вы высылаете аванс и мы приступаем
              к скетчам. Это может быть набросок мелодии или несколько звуков –
              зависит от того, какие элементы мы должны разработать.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Продакшн">
            <p>
              этот этап — самый ответственный. Мы отправляем вам демо-материалы
              и получаем от вас фидбек. Здесь от вас понадобится максимальная
              концентрация на процессе, ведь именно от вашего мнения зависит
              дальнейшая судьба всего аудиобренда. Основываясь на фидбеке мы
              дорабатываем нужные элементы и переходим к следующему этапу.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Приём проекта">
            <p>
              после всех согласований мы высылаем вам конечные файлы. Этот
              момент — последний шанс воспользоваться бесплатными правками.
              Когда всё готово, мы с вами подписываем Акт приёма-передачи и вы
              отправляете нам вторую часть оплаты.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Поддержка">
            <p>
              если в будущем у вашего бренда появятся новые точки контакта с
              аудиторией, которым нужно своё звучание, мы обязательно поможем.
              Мы всегда рады длительному сотрудничеству.
            </p>
          </StyledAccordionItem>
        </StyledAccordion>
      </ServiceSection>

      <ServiceSection title="Стоимость">
        <p>
          Стоимость разработки аудиобренда зависит от набора элементов, которые
          вам нужно получить в итоге. Напишите нам и расскажите о вашем бренде и
          его потребностях, а мы подскажем, что стоит делать и сколько это будет
          стоить.
        </p>
      </ServiceSection>
      <ServiceSection title="Наш подход">
        <CardDeck>
          <CardDeckItem variant="rect" textAlign="left">
            Мы считаем своей главной задачей создать уникальное звучание для
            вашего бренда, сделать его максимально информативным. Уместить всю
            суть в звук и правильно его направить, чтобы воздействовать на
            эмоции вашего потребителя так, как это нужно вам.
          </CardDeckItem>
          <CardDeckItem variant="full-waves" textAlign="left">
            Мы продумываем, где и когда ваш бренд будет звучать. Изначально мы
            создаём имиджевый трек или джингл, который определяет то, какими
            будут все остальные элементы аудиобренда. Часто джингл
            трансформируется в самые разные формы, даже в звук уведомлений на
            телефоне.
          </CardDeckItem>
          <CardDeckItem variant="waves" textAlign="left">
            Мы тщательно изучаем ваш бренд, пробираемся в самые глубины вашего
            маркетинг-кита и задаём много вопросов. :) А ещё всегда рады, если у
            вас есть собственная фокус-группа или возможность провести тесты на
            целевой аудитории. Благодаря этому мы можем ещё точнее создавать
            нужное вам звучание.
          </CardDeckItem>
          <CardDeckItem variant="rect-revers" textAlign="center">
            Но вам нужно сразу быть готовыми к тому, что нам потребуется
            определённая творческая свобода. Потому что музыка и звук — в первую
            очередь искусство, которое не стоит загонять в слишком жёсткие
            рамки. В какой-то момент вам придётся нам довериться, чтобы мы нашли
            голос для вашего бренда.
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
  query AudioBrandingRuPageQuery {
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
    sidebarImage: file(relativePath: { eq: "services/audio-branding.jpg" }) {
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

export default AudioBranding
