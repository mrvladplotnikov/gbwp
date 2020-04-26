import React, { useState } from "react"
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
          title="Голосовое озвучивание"
          text="Глазами не увидишь то, что может нарисовать нам речь."
          autor="Китайская пословица"
          image={sidebarImage}
        />
      }
      ServiceHero={
        <ServiceHero>
          <h3>
            Нам нравится думать о человеческом голосе как о самом совершенном
            музыкальном инструменте.
          </h3>
          <p>
            Мы не знаем другого инструмента, который способен так точно раскрыть
            посыл автора, передать весь спектр эмоций и неуловимые нюансы
            настроения. И если вокал — это один из значимых элементов музыки, то
            голосовое озвучивание — это самостоятельный вид искусства.
          </p>
          <p>
            Правильное голосовое озвучивание или озву́чение — это не просто
            начитка нужного текста хорошо поставленным голосом. Это скорее про
            управление вниманием слушателя, раскрытие персонажей и создание
            атмосферы. Это то, что заставляет человека слушать и верить
            услышанному.
          </p>
        </ServiceHero>
      }
      location={location}
      title="Голосовое озвучивание"
    >
      <ServiceSection title="Что мы делаем?">
        <p>
          Если говорить коротко — мы продюсируем голосовое озвучивание, а
          конкретно занимаемся:
        </p>

        <ServiceIconList align="space-evenly">
          <ServiceIcon
            title="Кастингом актёров голосового озвучивания"
            icon={MaleIcon}
            style={{ maxWidth: 200 }}
          />
          <ServiceIcon
            title="Организацией процесса записи и ведением проекта"
            icon={LaptopIcon}
            style={{ maxWidth: 200 }}
          />
          <ServiceIcon
            title="Обработкой аудио файлов"
            icon={FileIcon}
            style={{ maxWidth: 200 }}
          />
        </ServiceIconList>
      </ServiceSection>
      <ServiceSection title="База голосов">
        <p>
          За годы работы мы сформировали немалую базу актёров голосового
          озвучивания. Каждый из них — носитель самых разных языков и акцентов,
          тембров и интонаций. В этом вы можете убедиться сами, полный плейлист
          с примерами голосов актёров — ниже.
        </p>
        <iframe
          title="Пример голосового озвучивания"
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/303617614%3Fsecret_token%3Ds-5OnLL&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </ServiceSection>
      <ServiceSection title="Как проходит процесс?">
        <p>
          За последние несколько лет мы выработали простую схему для
          сотрудничества. Такую, чтобы вам на каждом этапе было понятно, что
          происходит, и у вас был контроль над процессом. А мы могли в это время
          предоставить необходимое голосовое озвучивание для вашего проекта.
        </p>
        <p>Всего шесть этапов:</p>
        <StyledAccordion>
          <StyledAccordionItem title="Знакомство">
            <p>
              Вы пишете нам и получаете в удобной форме{" "}
              <a
                rel="noopener noreferrer"
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
              На этом этапе вы составляете техническое задание в форме сценария
              с описанием голосов и необходимыми пояснениями для актёров. Мы
              изучаем документ, подбираем подходящих исполнителей и
              демонстрируем их вам. При необходимости — записываем пробные
              фразы, чтобы вам было проще определиться с актёром.
            </p>
            <p>
              Параллельно вместе с юристами мы готовим договор сотрудничества.
              Далее мы обсуждаем и согласовываем всё с вами и приступаем к
              следующему этапу.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Запуск">
            <p>
              Мы с вами подписываем договор, вы высылаете полную предоплату за
              проект, а мы в свою очередь подписываем договор с актёром и
              передаём ему сценарий.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Продакшн">
            <p>
              Актёр озвучивания отправляет нам готовую запись, мы проверяем её
              на соответствие требованиям и отправляем вам. Если вам покажется,
              что исполнитель недостаточно корректно передал какие-то интонации
              или общий посыл, вы сможете бесплатно внести до двух правок на
              каждую строку сценария.
            </p>
            <p>
              После того, как вас устроит работа актёра, мы займёмся стандартной
              обработкой аудиофайла. На этом же этапе мы можем дополнительно
              обработать записанный голос, добавить нужных эффектов.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Приём проекта">
            <p>
              После всех согласований мы высылаем вам конечные файлы. Этот
              момент — последний шанс воспользоваться бесплатными правками.
            </p>
            <p> Когда всё готово, мы с вами подписываем Акт приёма-передачи.</p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Поддержка">
            <p>
              Чаще всего этот этап нужен для игровых «долгостроев» или случаев,
              когда выбранный актёр озвучивает персонажей для последующих
              релизов.
            </p>
          </StyledAccordionItem>
        </StyledAccordion>
      </ServiceSection>

      <ServiceSection title="Стоимость">
        <p style={{ marginBottom: 60 }}>
          Стоимость проекта зависит от выбора актёра озвучивания, базовая
          обработка голоса включена в стоимость, специфическая обработка
          оговаривается отдельно.
        </p>
        <PlanList>
          <PlanCard
            title="Локальные актёры озвучивания"
            icon={HouseIcon}
            subTitle="Доступные языки"
            list={["украинский", "русский", "английский"]}
            onClick={() =>
              handleFormShow(
                "Узнать стоимость",
                "Пожалуйста, оставьте нам свой email и мы с радостью вышлем вам наши предложения по голосовому озвучиванию.",
                "local-voice-casting"
              )
            }
          />
          <PlanCard
            title="Иностранные актёры озвучивания"
            icon={PlanetIcon}
            subTitle="Доступные языки"
            list={[
              "английский",
              "немецкий",
              "французский",
              "испанский",
              "китайский",
            ]}
            onClick={() =>
              handleFormShow(
                "Узнать стоимость",
                "Пожалуйста, оставьте нам свой email и мы с радостью вышлем вам наши предложения по голосовому озвучиванию.",
                "foreign-voice-casting"
              )
            }
          />
        </PlanList>
        <p>
          Если в списке доступных языков вы не нашли нужный вам — обязательно{" "}
          <a rel="noopener noreferrer" target="_blank" href={mailTo.mail.ru}>
            напишите нам
          </a>{" "}
          и мы подберём нужного актёра.
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
      <ServiceSection title="Наш подход">
        <CardDeck>
          <CardDeckItem variant="rect" textAlign="left">
            В нашем понимании идеальная работа над голосовым озвучиванием
            проекта выглядит так: вы передаёте нам сценарий и взамен получаете
            полностью готовый файл со всеми правами на него.
          </CardDeckItem>
          <CardDeckItem variant="full-waves" textAlign="left">
            Мы берём на себя всю «головную боль». В кавычках — потому что работы
            действительно немало, но нам она нравится.
          </CardDeckItem>
          <CardDeckItem variant="waves" textAlign="left">
            Мы подбираем нужный вашему проекту голос, организовываем процесс,
            ведём проект и внимательно контролируем качество результата. Мы
            обрабатываем аудиофайлы и следим, чтобы всё звучало, как нужно.
            Кроме того, все юридические аспекты мы тоже берём на себя и передаём
            вам эксклюзивные права интеллектуальной собственности на весь
            готовый материал.
          </CardDeckItem>
        </CardDeck>
      </ServiceSection>
      <ServiceSection title="Отзывы клиентов">
        <ReviewCarousel reviews={reviews} />
      </ServiceSection>
      <div className="contact-us-wrapper">
        <ContactUs>
          Расскажите нам о своём проекте, продукте или идее. Спросите совет или
          получите полноценную{" "}
          <a rel="noopener noreferrer" target="_blank" href={mailTo.mail.ru}>
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
  query VoiceCastingRuPageQuery {
    reviews: allWordpressWpClientReview(
      limit: 5
      filter: {
        acf: { vice_over: { vice_over_visibility: { eq: true } } }
        polylang_current_lang: { eq: "ru" }
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
