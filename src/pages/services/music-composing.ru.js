import React, { useState } from "react"
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
import PlanList from "../../components/PlanList"
import PlanCard from "../../components/PlanCard"
import ReviewCarousel from "../../components/ReviewCarousel/ReviewCarousel"
import CardDeck from "../../components/CardDeck/CardDeck"
import CardDeckItem from "../../components/CardDeckItem/CardDeckItem"

import StandartIcon from "../../images/plans/standart.svg"
import SoftIcon from "../../images/plans/soft.svg"
import SosIcon from "../../images/plans/sos.svg"
import PremiumIcon from "../../images/plans/premium.svg"

import GamesIcon from "../../images/service-icons/games.svg"
import AudioIcon from "../../images/service-icons/audio.svg"
import FilmIcon from "../../images/service-icons/film.svg"
import MonsterIcon from "../../images/service-icons/monster.svg"
import PlayerIcon from "../../images/service-icons/player-2.svg"
import MasksIcon from "../../images/service-icons/masks.svg"

import mailTo from "../../utils/mailTo"
import ModalContactForm from "../../components/ModalContactForm/ModalContactForm"

const MusicCreation = ({ data, location }) => {
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
          title="Создание музыки"
          text="Там где слова бессильны, является во всеоружии своем более красноречивый язык — музыка."
          autor="П.И. Чайковский"
          image={sidebarImage}
        />
      }
      ServiceHero={
        <ServiceHero>
          <h3>Больше всего мы любим музыку за её возможности.</h3>
          <p>
            Это ведь самый сильный вид искусства, если сравнивать их все по
            эмоциональному воздействию. Знаете, как это бывает, когда одна песня
            меняет ваше настроение?
          </p>
          <p>
            Всего пару нот, правильный ритмический рисунок и вот уже человек
            готов к великим свершениям. А стоит слегка изменить аранжировку — и
            он внезапно предаётся грустным воспоминаниям. Всё это захватывает
            нас и заставляет каждый день делать то, что мы делаем. Слушать,
            изучать и, в конце-концов, создавать музыку.
          </p>
        </ServiceHero>
      }
      location={location}
      title="Создание музыки"
    >
      <ServiceSection title="Что мы делаем?">
        <p>Мы пишем саундтреки и создаём музыку для:</p>

        <ServiceIconList>
          <ServiceIcon title="Игр" icon={GamesIcon} />
          <ServiceIcon title="Брендов и рекламы" icon={AudioIcon} />
          <ServiceIcon title="Фильмов" icon={FilmIcon} />
          <ServiceIcon title="Мультфильмов" icon={MonsterIcon} />
          <ServiceIcon title="Трейлеров" icon={PlayerIcon} />
          <ServiceIcon title="Театральных постановок" icon={MasksIcon} />
        </ServiceIconList>

        <p>
          Ещё мы создаём музыку для motion графики, но она скорее относится к
          звуковому дизайну, так что о ней вы можете прочесть вот здесь.
        </p>
        <p>
          Мы не пишем «минусовки» и песни для корпоративов. А вот корпоративные
          гимны — это мы с радостью, подробнее смотрите{" "}
          <Link to="/ru/services/audio-branding">тут</Link>.
        </p>
      </ServiceSection>
      <ServiceSection title="Лучшие саундтреки">
        <iframe
          title="Лучшие саундтреки"
          width="100%"
          height="450"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/174940453&color=%23f23b0d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </ServiceSection>
      <ServiceSection title="Как проходит процесс?">
        <p>
          За последние несколько лет мы выработали простую схему для
          сотрудничества. Такую, чтобы вам на каждом этапе было понятно, что
          происходит, и у вас был контроль над процессом. А мы могли в это время
          создать именно ту музыку, которая нужна вашему проекту.
        </p>
        <p>Всего шесть этапов:</p>
        <StyledAccordion>
          <StyledAccordionItem title="Знакомство">
            <p>
              Вы заполняете бриф и получаете{" "}
              <a href={mailTo.mail.ru}>бесплатную консультацию</a>. Мы
              знакомимся друг с другом и понимаем, насколько готовы
              сотрудничать. Для нас важно совпадать с клиентом в общем видении и
              принципах работы.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Подготовка">
            <p>
              На этом этапе вы составляете техническое задание, если нужно — мы
              помогаем. Почему мы не делаем ТЗ сами — читайте{" "}
              <Link to="/ru/faq">тут</Link>.
            </p>
            <p>
              Кроме того, мы подбираем референсы для будущего трека и вместе с
              юристами готовим договор сотрудничества. Обсуждаем и согласовываем
              всё с вами и приступаем к следующему этапу.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Запуск">
            <p>
              Мы с вами подписываем договор, вы высылаете аванс и мы приступаем
              к скетчам. Они у нас чаще всего в форме 30-секундной демки главной
              темы трека.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Продакшн">
            <p>
              Этот этап — самый ответственный. Мы отправляем вам демо-материалы
              и получаем от вас фидбек. Здесь от вас понадобится максимальная
              концентрация на процессе, ведь именно от ваших пожеланий зависит
              дальнейшая судьба композиции. Мы дорабатываем трек согласно
              предложениям и отправляем вам на согласование.{" "}
            </p>
            <p>
              {" "}
              В зависимости от выбранного пакета услуг у вас может быть до 5
              бесплатных правок на одну композицию.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Приём проекта">
            <p>
              После всех согласований мы высылаем вам конечный файл с треком.
              Этот момент — последний шанс воспользоваться бесплатными правками.
            </p>
            <p>
              Когда всё готово, мы с вами подписываем Акт приёма-передачи и вы
              отправляете нам вторую часть оплаты, если это предусмотрено
              выбранным пакетом услуг.
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
      </ServiceSection>

      <ServiceSection title="Наши предложения">
        <p style={{ marginBottom: 60 }}>
          Кроме понятной схемы сотрудничества мы разработали ещё и понятные
          пакеты по созданию музыки. Мы проанализировали опыт предыдущих
          проектов, отзывы клиентов и поняли, что так вам будет гораздо легче
          выбрать подходящий для вашего проекта вариант.
        </p>

        <PlanList
          label="Все предложения"
          onClick={() =>
            handleFormShow(
              "Сравнить пакеты",
              "Пожалуйста, оставьте нам свой email и мы с радостью вышлем вам стоимость всех наших пакетов по созданию музыки.",
              "all"
            )
          }
        >
          <PlanCard
            title="Standard"
            icon={StandartIcon}
            subTitle="Название скучное, пакет крутой"
            list={[
              "выполнение — до 7 рабочих дней",
              "5 бесплатных правок",
              "предоплата 50%",
            ]}
            onClick={() =>
              handleFormShow(
                "Пакет Standard",
                "Отличный выбор! Наш стандарт никогда не подводит. Пожалуйста, оставьте нам свой email и мы с радостью вышлем вам сравнение стоимости этого пакета с другими.",
                "standart"
              )
            }
          />
          <PlanCard
            title="Soft Launch"
            icon={SoftIcon}
            subTitle="Тестируем ваши гипотезы"
            list={[
              "длительность трека — 30 сек",
              "выполнение — до 5 рабочих дней",
              "5 бесплатных правок",
              "предоплата 50%",
              "при дальнейшем заказе пакетов Standard / Premium на этот же трек, стоимость Soft Launch включена",
            ]}
            onClick={() =>
              handleFormShow(
                "Пакет Soft Launch",
                "Кто сказал, что осторожничать – скучно? Мы с ним не согласны, поэтому и разработали предложение специально для Soft Launch. Пожалуйста, оставьте нам свой email и мы с радостью вышлем вам сравнение стоимости этого пакета с другими.",
                "soft-launch"
              )
            }
          />
          <PlanCard
            title="S.O.S"
            icon={SosIcon}
            subTitle="Когда всё горит и пылает"
            list={["срок выполнения — ASAP", "без правок", "полная предоплата"]}
            onClick={() =>
              handleFormShow(
                "Пакет S.O.S",
                "Если все шутки про горящие дедлайны для вас – не шутки, то сейчас вы сделали правильный выбор! Пожалуйста, оставьте нам свой email и мы с радостью вышлем вам сравнение стоимости этого пакета с другими.",
                "s-o-s"
              )
            }
          />
          <PlanCard
            title="Premium"
            icon={PremiumIcon}
            subTitle="Да, вы на коне"
            list={[
              "срок выполнения — ASAP",
              "5 бесплатных правок",
              "предоплата 50%",
            ]}
            onClick={() =>
              handleFormShow(
                "Пакет Premium",
                "Говорят, невозможно получить всё и сразу. Но мы постарались и подготовили такое предложение. Пожалуйста, оставьте нам свой email и мы с радостью вышлем вам сравнение стоимости этого пакета с другими.",
                "premium"
              )
            }
          />
        </PlanList>
      </ServiceSection>
      <ModalContactForm
        title={formTitle}
        subTitle={formSubTitle}
        customLocation={formKey}
        open={showForm}
        onClose={handleFormClose}
      />
      <ServiceSection title="Наш подход">
        <CardDeck>
          <CardDeckItem variant="rect" textAlign="left">
            Многие люди считают создание музыки чем-то непостижимым и
            таинственным. Некоторые же утверждают, что всё дело — исключительно
            в технике и правильной методологии. Нам кажется, за годы практики мы
            наконец приблизились к пониманию, как всё устроено.
          </CardDeckItem>
          <CardDeckItem variant="full-waves" textAlign="left">
            Есть такая вещь, как чистое вдохновение. Это состояние знакомо всем.
            Когда будто бы твоими руками кто-то другой создаёт нечто крутое:
            песню, картину, стихотворение или что-нибудь ещё. Невероятный и
            редкий опыт. Для работы такое явно не подойдёт. :)
          </CardDeckItem>
          <CardDeckItem variant="waves" textAlign="left">
            Другое дело — методичный подход. Берёшь все накопленные
            теоретические знания и преобразуешь их в композицию. Естественно,
            согласно всем правилам и техникам. Надёжно, уверенно и… скучно.
            Такая музыка «не цепляет» потому что чаще всего подобный подход
            изначально лишён эмоции.
          </CardDeckItem>
          <CardDeckItem variant="rect-revers" textAlign="center">
            Мы же нашли баланс. Всё дело — в «планировании» вдохновения.
          </CardDeckItem>
          <CardDeckItem variant="full-waves" textAlign="center">
            Когда мы начинаем работу над проектом, мы выясняем как можно больше
            о нём. Узнаём его атмосферу, настроение, посыл. Изучаем целевую
            аудиторию, их интересы. Даже расспрашиваем про личное отношение
            клиента к продукту. Чем больше информации мы узнаем — тем легче и
            лучше она трансформируется в подсознании композитора в идею и эмоцию
            саундтрека.
          </CardDeckItem>
          <CardDeckItem variant="waves-revers" textAlign="center">
            Дальше — буквально дело техники. Мы берём «ядро» и вокруг него
            выстраиваем всю оставшуюся композицию.
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
    reviews: allWordpressWpClientReview(
      limit: 5
      filter: {
        acf: { music_composing: { music_composing_visibility: { eq: true } } }
        polylang_current_lang: { eq: "ru" }
      }
      sort: {
        fields: acf___music_composing___music_composing_order
        order: DESC
      }
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
    sidebarImage: file(relativePath: { eq: "services/music-creation.jpg" }) {
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

export default MusicCreation
