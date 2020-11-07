import React from "react"
import { graphql, Link } from "gatsby"
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

import PlayerIcon from "../../images/service-icons/player.svg"
import FileIcon from "../../images/service-icons/file-2.svg"
import RoomIcon from "../../images/service-icons/room.svg"

import mailTo from "../../utils/mailTo"
import Button from "~components/Button"

const SoundDesign = ({ data, location }) => {
  const reviews = data.reviews.nodes
  const sidebarImage = data.sidebarImage.childImageSharp.fluid
  const works = data.works.nodes

  return (
    <Layout
      Sidebar={
        <Sidebar
          title="Звуковой дизайн"
          text="При создании игр, как и при съёмке кино, звук имеет очень большое значение. 60 или даже 70% ощущений создаётся именно за счёт звука. При этом звук – это не только музыкальное сопровождение, но и звуковые эффекты. Их наличие или отсутствие очень сильно определяет атмосферу игры."
          autor="Хидео Кодзима"
          image={sidebarImage}
        />
      }
      ServiceHero={
        <ServiceHero>
          <h3>
            Если музыка — это искусство, то звук — изначально способ передачи
            информации.
          </h3>
          <p>
            Притом, один из самых древних. Но это не значит, что музыка — только
            эмоциональна, а звук — только информативен. Секундный звук тоже
            может быть эмоционален и точно как и музыка напрямую воздействовать
            на эмоции человека.
          </p>
          <p>
            Хотим мы этого или нет, но тревожный звук заставит нас
            насторожиться. Именно за подобные вещи мы и обожаем звуковой дизайн.
            А ещё за то, как он преображает любую картинку, добавляет в неё
            жизни, помогает зрителю поверить в происходящее. Магия!
          </p>
        </ServiceHero>
      }
      location={location}
      title="Саунд дизайн для игр, видео и приложений | VP Production"
      description="Функциональный звуковой дизайн. Информативность и правильные эмоции для аудитории. Имплементация Wwise / Fmod в Unity и Unreal Engine. ✔ Процесс сотрудничества. Наши предложения и подход. Отзывы клиентов."
    >
      <ServiceSection title="Что мы делаем?">
        <p>Мы создаём:</p>
        <ServiceIconList>
          <ServiceIcon
            title="Звуковые эффекты для аудиовизуальных проектов"
            icon={FileIcon}
            style={{ maxWidth: 260 }}
          />
          <ServiceIcon
            title="Звуковое оформление для motion-графики"
            icon={PlayerIcon}
            style={{ maxWidth: 260 }}
          />
          <ServiceIcon
            title="Звуковое оформление пространства (квест-комнаты, инсталляции и прочее)"
            icon={RoomIcon}
            style={{ maxWidth: 260 }}
          />
        </ServiceIconList>
        <p>
          Мы самостоятельно синтезируем, записываем и обрабатываем звуки, чтобы
          они подходили вашему проекту и выполняли свою функцию.
        </p>
        <p>
          Ещё мы создаём атмосферные эмбиенты и легко превращаем музыку в один
          из элементов звукового дизайна. Последнее актуально для{" "}
          <Link to="/ru/works/audio-for-motion-design">motion-графики</Link>,
          когда музыка и звуки переплетаются и дополняют друг друга, чтобы
          картинка выглядела максимально круто.
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
        <div className="service-works-porfolio-button-container">
          <Button
            state={{
              service: "sound-design",
            }}
            to="/ru/portfolio?service=sound-design-2"
            className="service-works-porfolio-button"
          >
            Портфолио
          </Button>
        </div>
      </ServiceSection>
      <ServiceSection title="Как проходит процесс?">
        <p>
          За последние несколько лет мы выработали простую схему для
          сотрудничества. Такую, чтобы вам на каждом этапе было понятно, что
          происходит, и у вас был контроль над процессом. А мы могли в это время
          создать нужное звуковое оформление для вашего проекта.
        </p>
        <p>Всего шесть этапов:</p>
        <StyledAccordion>
          <StyledAccordionItem title="Знакомство">
            <p>
              Вы пишете нам и получаете в удобной форме{" "}
              <a
                rel="nofollow noopener noreferrer"
                target="_blank"
                href={mailTo.mail.ru}
              >
                бесплатную консультацию
              </a>
              , а мы узнаём о вашем проекте. Так мы знакомимся друг с другом и
              понимаем, насколько готовы сотрудничать. Для нас важно совпадать с
              клиентом в общем видении и принципах работы.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Подготовка">
            <p>
              На этом этапе вы составляете техническое задание, если нужно — мы
              помогаем. Почему мы не делаем ТЗ сами — читайте{" "}
              <Link to="/ru/faq">тут</Link>.
            </p>
            <p>
              {" "}
              Кроме того, мы подбираем референсы звуковой стилистики и вместе с
              юристами готовим договор сотрудничества. Далее мы обсуждаем и
              согласовываем всё с вами и приступаем к следующему этапу.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Запуск">
            <p>
              Иы с вами подписываем договор, вы высылаете аванс и мы приступаем
              к скетчам. Обычно это 3–4 звука, которые отражают общую стилистику
              звукового оформления.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Продакшн">
            <p>
              Этот этап — самый ответственный. Мы отправляем вам демо-материалы
              и получаем от вас фидбек. Здесь от вас понадобится максимальная
              концентрация на процессе, ведь именно от ваших пожеланий зависит
              дальнейшая судьба всего звукового дизайна проекта.
            </p>
            <p>
              Следуя вашим мыслям и предложениям мы разрабатываем остальные
              звуки и отправляем вам на согласование. У вас будет возможность
              внести до трёх бесплатных правок на каждый звук.
            </p>
            <p>
              Для игровых проектов на этом этапе мы также имплементируем звуки в
              проект с помощью аудиодвижков Wwise и Fmod.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Приём проекта">
            <p>
              После всех согласований мы высылаем вам конечные файлы. Этот
              момент — последний шанс воспользоваться бесплатными правками.
            </p>
            <p>
              {" "}
              Когда всё готово, мы с вами подписываем Акт приёма-передачи и вы
              отправляете нам вторую часть оплаты.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Поддержка">
            <p>
              Чаще всего этот этап нужен для игровых «долгостроев» и
              оговаривается отдельно. Скажем только, что мы всегда рады
              длительному сотрудничеству.
            </p>
          </StyledAccordionItem>
        </StyledAccordion>

        <p>
          В финале каждого проекта мы внимательно слушаем, как всё звучит и
          работает вместе. Если нужно — мы настраиваем громкости, затухания и
          прочие аспекты или подсказываем вам, как это лучше сделать
          самостоятельно.
        </p>
      </ServiceSection>

      <ServiceSection title="Стоимость">
        <p>Общая стоимость проекта зависит от объёма задач.</p>
        <p>
          Для всех звуковых эффектов и эмбиентов у нас есть фиксированная цена,
          которая умножается на нужное для вашего проекта количество.
          Имплементация, при необходимости, учитывается отдельно.
        </p>
        <p>
          Для озвучивания роликов с motion-графикой стоимость рассчитывается
          иначе: здесь учитывается сложность картинки и длительность видео.
        </p>
        <p>
          <a href={mailTo.soundDesign.ru}>Напишите нам</a>, чтобы узнать точную
          стоимость звукового дизайна для вашего конкретного проекта.
        </p>
      </ServiceSection>
      <ServiceSection title="Наш подход">
        <CardDeck>
          <CardDeckItem variant="rect" textAlign="left">
            Мы считаем звуковой дизайн функциональным искусством, пространством
            для поисков и экспериментов, и ответственной частью любого
            медиа-проекта. Если к созданию музыки мы подходим «со всей душой»,
            то к звуковому дизайну — с прагматизмом и фантазией.
          </CardDeckItem>
          <CardDeckItem variant="full-waves" textAlign="left">
            Для нас важно заставить каждый элемент звучать так, чтобы у
            слушателя не возникало сомнений, что это «родной» звук. Каждый
            эффект мы создаём с мыслью о чувствах, которые он должен вызывать у
            человека.
          </CardDeckItem>
          <CardDeckItem variant="waves" textAlign="left">
            Будет ли звук напрягать его? Заставит ли почувствовать облегчение?
            Или предупредит о чём-то? Мы продумываем каждую деталь. Особенно то,
            как будут звучать все звуки вместе. Как они будут взаимодействовать
            друг с другом и общим фоном — эмбиентом или музыкой.
          </CardDeckItem>
          <CardDeckItem variant="rect-revers" textAlign="center">
            Для игровых проектов мы имплементируем звуки с помощью Wwise и Fmod
            — так мы вместе с вами будем уверены в финальном звучании. Мы
            настраиваем громкости, количество одновременных воспроизведений,
            рандомизацию, вариативность ассетов и другие важные моменты.
          </CardDeckItem>
        </CardDeck>
      </ServiceSection>
      <ServiceSection title="Отзывы клиентов и партнёров">
        <ReviewCarousel reviews={reviews} />
      </ServiceSection>
      <div className="contact-us-wrapper">
        <ContactUs>
          Расскажите нам о своём проекте, продукте или идее. Спросите совет или
          получите полноценную{" "}
          <a
            rel="nofollow noopener noreferrer"
            target="_blank"
            href={mailTo.mail.ru}
          >
            бесплатную консультацию
          </a>
          . Узнайте цены, уточните важный вопрос, да что угодно! Мы будем рады с
          вами познакомиться и помочь.
        </ContactUs>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query SoundDesignRuPageQuery {
    reviews: allWordpressWpClientReview(
      limit: 5
      filter: {
        acf: { sound_design: { sound_design_visibility: { eq: true } } }
        polylang_current_lang: { eq: "ru" }
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
        polylang_current_lang: { eq: "ru" }
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
