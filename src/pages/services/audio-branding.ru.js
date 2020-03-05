import React from "react"
import { graphql } from "gatsby"
import Layout from "../../layouts/ru/sidebar"
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
      ServiceHero={
        <ServiceHero>
          <h3>
            Для людей, которые создают звук, мы слишком интересуемся
            маркетингом.
          </h3>
          <p>
            Нам он кажется неким современным видом искусства, очень комплексным
            и истинно прикладным. А мы любим создавать то, что находится на
            грани чистого творчества и функциональности, вот и занялись
            аудиобрендингом?
          </p>
          <p>
            Потенциал звука для поддержки брендов часто не используют на полную
            и мы хотим это изменить. Ведь правильный аудио бренд помогает
            выстроить нужные ассоциации у потребителя и усиливает его связь с
            продуктом или компанией. Он станет тем, что заставит человека
            мгновенно узнать ваш бренд, даже если он его ещё не увидел.
          </p>
        </ServiceHero>
      }
      location={location}
      title="Аудиобрендинг"
    >
      <ServiceSection title="Что мы делаем?">
        <p>Мы создаём:</p>
        <ServiceIconList>
          <ServiceIcon title="Аудио стратегии брендов" icon={FemaleIcon} />
          <ServiceIcon title="Аудио логотипы и джинглы" icon={JingleIcon} />
          <ServiceIcon title="Аудиорекламу и бренд-музыку" icon={AudioIcon} />
          <ServiceIcon
            title="Звуковую айдентику для приложения"
            icon={PhoneIcon}
          />
          <ServiceIcon
            title="Другие аудиальные точки контакта с клиентом"
            icon={SoundIcon}
          />
        </ServiceIconList>

        <p>
          Каждый аудио бренд — уникален, как и сам бренд. У каждого бизнеса —
          свои потребности и нет универсальной формулы и состава аудио бренда.
          Поэтому для каждого проекта мы создаём персональную стратегию и набор
          элементов в зависимости от задач, которые нужно решить.
        </p>
      </ServiceSection>
      <ServiceSection title="Наши работы" noGatters>
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
          title="Наши работы"
          width="100%"
          height="450"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/758338767&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
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
              вы пишете нам и получаете в удобной форме{" "}
              <a href={mailTo.mail.ru}>бесплатную консультацию</a>, а мы узнаём
              о вашем бренде. Так мы знакомимся друг с другом и понимаем,
              насколько готовы сотрудничать. Для нас важно совпадать с клиентом
              в общем видении и принципах работы.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Подготовка">
            <p>
              на этом этапе мы углубляемся в изучение вашего бренда, вы
              рассказываете нам о ваших маркетинговых мероприятиях, вместе мы
              определяем роль и значение будущего аудио бренда. Параллельно
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
              дальнейшая судьба всего аудио бренда. Основываясь на фидбеке мы
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
          Стоимость разработки аудио бренда зависит от набора элементов, которые
          вам нужно получить в итоге.{" "}
          <a href={mailTo.audioBranding.ru}>Напишите нам</a> и расскажите о
          вашем бренде и его потребностях, а мы подскажем, что стоит делать и
          сколько это будет стоить.
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
            Мы продумываем, где и когда ваш бренд будет звучать. Сначала мы
            разрабатываем аудио-ДНК — главную музыкальную тему, в которой
            отражаются идеология и отличительные особенности бренда. Она
            определяет то, какими будут все другие элементы аудио бренда: аудио
            логотип, бренд-треки, джинглы, оповещения для приложений и тому
            подобное.
          </CardDeckItem>
          <CardDeckItem variant="waves" textAlign="left">
            Мы тщательно изучаем ваш бренд, пробираемся в самые глубины вашего
            маркетинг-кита и задаём много вопросов. :) А ещё всегда рады, если у
            вас есть собственная фокус-группа или возможность провести тесты на
            целевой аудитории. Благодаря этому мы можем ещё точнее создавать
            нужное вам звучание.
          </CardDeckItem>
          <CardDeckItem variant="rect-revers" textAlign="center">
            Мы верим в то, что музыка и звук — это прежде всего искусство,
            которое не стоит загонять в слишком жёсткие рамки. Но мы умеем
            работать с ними так, чтобы вы получили мощное конкурентное
            преимущество на грани функциональности и эмоций.
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
    reviews: allWordpressWpClientReview(
      limit: 5
      filter: {
        acf: { audiobrending: { audiobrending_visibility: { eq: true } } }
        polylang_current_lang: { eq: "ru" }
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
    works: allWordpressWpWork(
      filter: {
        acf: { audiobrending: { audiobrending_visibility: { eq: true } } }
        polylang_current_lang: { eq: "ru" }
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
