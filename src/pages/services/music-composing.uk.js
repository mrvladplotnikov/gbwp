import React, { useState } from "react"
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
          title="Створення музики"
          text="Там де слова безсилі, з’являється у всеозброєнні своєму більш красномовна мова — музика."
          autor="П.І. Чайковський"
          image={sidebarImage}
        />
      }
      ServiceHero={
        <ServiceHero>
          <h3>Найбільше ми любимо музику за її можливості.</h3>
          <p>
            Адже це найсильніший вид мистецтва, якщо порівнювати їх усі за
            емоційним впливом. Знаєте, як це буває, коли одна пісня змінює ваш
            настрій?
          </p>
          <p>
            Усього декілька нот, правильний ритмічний малюнок і ось уже людина
            готова до великих звершень. А варто трохи змінити аранжування — і
            вона раптово віддається сумним спогадам. Усе це захоплює нас і
            змушує кожен день робити те, що ми робимо. Слухати, вивчати і, у
            решті-решт, створювати музику.
          </p>
        </ServiceHero>
      }
      location={location}
      title="Створення музики"
    >
      <ServiceSection title="Що ми робимо?">
        <p>Ми пишемо саундтреки і створюємо музику для:</p>

        <ServiceIconList>
          <ServiceIcon title="Iгор" icon={GamesIcon} />
          <ServiceIcon title="Брендів та реклами" icon={AudioIcon} />
          <ServiceIcon title="Фільмів" icon={FilmIcon} />
          <ServiceIcon title="Мультфільмів" icon={MonsterIcon} />
          <ServiceIcon title="Трейлерів" icon={PlayerIcon} />
          <ServiceIcon title="Театральних постановок" icon={MasksIcon} />
        </ServiceIconList>

        <p>
          Також ми створюємо музику для motion графіки, але вона швидше належить
          до звукового дизайну, так що про неї ви можете прочитати ось{" "}
          <Link to="/works/audio-for-motion-design">тут</Link>.
        </p>
        <p>
          Ми не пишемо «мінусовки» та пісні для корпоративів. А ось корпоративні
          гімни — це ми з радістю, докладніше дивіться{" "}
          <Link to="/services/audio-branding">тут</Link>.
        </p>
      </ServiceSection>
      <ServiceSection title="Кращі саундтреки">
        <iframe
          title="Кращі саундтреки"
          width="100%"
          height="450"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/174940453&color=%23f23b0d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </ServiceSection>
      <ServiceSection title="Як проходить процес?">
        <p>
          За останні кілька років ми розробили просту схему для співпраці. Таку,
          щоби вам на кожному етапі було зрозуміло, що відбувається, й у вас був
          контроль над процесом. А ми могли в цей час створити саме ту музику,
          яка потрібна вашому проєкту.
        </p>
        <p>Усього шість етапів:</p>
        <StyledAccordion>
          <StyledAccordionItem title="Знайомство">
            <p>
              Ви заповнюєте бриф і отримуєте{" "}
              <a target="_blank" href={mailTo.mail.uk}>
                безплатну консультацію
              </a>
              . Ми знайомимося один з одним і розуміємо, наскільки готові до
              співпраці. Для нас важливо збігатися з клієнтом у загальному
              баченні і принципах роботи.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Підготовка">
            <p>
              На цьому етапі ви складаєте технічне завдання, якщо потрібно — ми
              допомагаємо. Чому ми не робимо ТЗ самостійно — читайте{" "}
              <Link to="/faq">тут</Link>.{" "}
            </p>
            <p>
              {" "}
              Крім того, ми підбираємо референси для майбутнього трека й разом
              із юристами готуємо договір співпраці. Обговорюємо й погоджуємо
              все з вами й переходимо до наступного етапу.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Запуск">
            <p>
              Ми з вами підписуємо договір, ви висилаєте аванс і ми приступаємо
              до виконання скетчів. Вони в нас найчастіше у формі 30-секундної
              демки головної теми треку.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Продакшн">
            <p>
              Цей етап — найвідповідальніший. Ми надсилаємо вам демо-матеріали
              та отримуємо від вас фідбек. Тут від вас знадобиться максимальна
              концентрація на процесі, адже саме від ваших побажань залежить
              подальша доля композиції. Ми допрацьовуємо трек згідно з
              пропозиціями й надсилаємо вам на погодження.
            </p>
            <p>
              Залежно від обраного пакета послуг у вас може бути до 5 безплатних
              правок на одну композицію.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Прийом проєкту">
            <p>
              Після всіх погоджень ми висилаємо вам кінцевий файл із треком. Цей
              момент — останній шанс скористатися безплатними правками.{" "}
            </p>
            <p>
              {" "}
              Коли все готово, ми з вами підписуємо Акт прийому-передачі і ви
              надсилаєте нам другу частину оплати, якщо це передбачено обраним
              пакетом послуг.
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
      </ServiceSection>

      <ServiceSection title="Наші пропозиції">
        <p style={{ marginBottom: 60 }}>
          Крім зрозумілої схеми співпраці ми розробили ще і зрозумілі пакети зі
          створення музики. Ми проаналізували досвід попередніх проєктів,
          відгуки клієнтів і зрозуміли, що так вам буде набагато легше обрати
          оптимальний для вашого проєкту варіант.
        </p>

        <PlanList
          label="Всі пропозиції"
          onClick={() =>
            handleFormShow(
              "Порівняти пакети",
              "Будь ласка, залиште нам свій email і ми з радістю надішлемо вам вартість усіх наших пакетів зі створення музики.",
              "all"
            )
          }
        >
          <PlanCard
            title="Standard"
            icon={StandartIcon}
            subTitle="Назва нудна, пакет крутий."
            list={[
              "виконання — до 7 робочих днів",
              "5 безплатних правок",
              "передоплата 50%",
            ]}
            onClick={() =>
              handleFormShow(
                "Пакет Standard",
                "Відмінний вибір! Наш стандарт ніколи не підводить. Будь ласка, залиште нам свій email і ми з радістю надішлемо вам порівняння вартості цього пакета з іншими.",
                "standart"
              )
            }
          />
          <PlanCard
            title="Soft Launch"
            icon={SoftIcon}
            subTitle="Тестуємо ваші гіпотези"
            list={[
              "тривалість треку — 30 сек",
              "виконання — до 5 робочих днів",
              "5 безплатних правок",
              "передоплата 50%",
              "у разі подальшого замовлення пакетів Standard / Premium на цей же трек  вартість Soft Launch вже буде зарахована",
            ]}
            onClick={() =>
              handleFormShow(
                "Пакет Soft Launch",
                "Хто сказав, що бути обережним — нудно? Ми з ним не згодні, тому й розробили пропозицію спеціально для Soft Launch. Будь ласка, залиште нам свій email і ми з радістю надішлемо вам порівняння вартості цього пакета з іншими.",
                "soft-launch"
              )
            }
          />
          <PlanCard
            title="S.O.S"
            icon={SosIcon}
            subTitle="Коли все горить і палає"
            list={[
              "термін виконання — ASAP",
              "без правок",
              "повна передоплата",
            ]}
            onClick={() =>
              handleFormShow(
                "Пакет S.O.S",
                "Якщо все жарти про палаючі дедлайни для вас — не жарти, то зараз ви зробили правильний вибір! Будь ласка, залиште нам свій email і ми з радістю надішлемо вам порівняння вартості цього пакета з іншими.",
                "s-o-s"
              )
            }
          />
          <PlanCard
            title="Premium"
            icon={PremiumIcon}
            subTitle="Так, ви на коні"
            list={[
              "термін виконання — ASAP",
              "5 безплатних правок",
              "передоплата 50%",
            ]}
            onClick={() =>
              handleFormShow(
                "Пакет Premium",
                "Кажуть, неможливо отримати все і відразу. Але ми постаралися й підготували таку пропозицію. Будь ласка, залиште нам свій email і ми з радістю надішлемо вам порівняння вартості цього пакета з іншими.",
                "premium"
              )
            }
          />
        </PlanList>
      </ServiceSection>
      <ModalContactForm
        title={formTitle}
        type="package-request"
        subTitle={formSubTitle}
        customLocation={formKey}
        open={showForm}
        onClose={handleFormClose}
      />
      <ServiceSection title="Наш підхід">
        <CardDeck>
          <CardDeckItem variant="rect" textAlign="left">
            Багато людей вважають створення музики чимось незбагненним і
            таємничим. Деякі ж стверджують, що вся справа — виключно в техніці і
            правильній методології. Нам здається, за роки практики ми нарешті
            наблизилися до розуміння, як усе влаштовано.
          </CardDeckItem>
          <CardDeckItem variant="full-waves" textAlign="left">
            Є така річ, як чисте натхнення. Цей стан знайомий усім. Коли нібито
            твоїми руками хтось інший створює дещо круте: пісню, картину, вірш
            або що-небудь інше. Неймовірний і рідкісний досвід. Для роботи таке
            явно не підійде. :)
          </CardDeckItem>
          <CardDeckItem variant="waves" textAlign="left">
            Інша справа — методичний підхід. Береш усі накопичені теоретичні
            знання й перетворюєш їх на композицію. Звичайно, згідно з усіма
            правилами й техніками. Надійно, впевнено і… нудно. Така музика «не
            чіпляє» тому що найчастіше подібний підхід від початку позбавлений
            емоції.
          </CardDeckItem>
          <CardDeckItem variant="rect-revers" textAlign="center">
            Ми ж знайшли баланс. Уся справа — у «плануванні» натхнення.
          </CardDeckItem>
          <CardDeckItem variant="full-waves" textAlign="center">
            Коли ми починаємо роботу над проєктом, ми з’ясовуємо якомога більше
            про нього. Дізнаємося його атмосферу, настрій, ідею. Вивчаємо
            цільову аудиторію, їхні інтереси. Навіть розпитуємо про особисте
            ставлення клієнта до продукту. Чим більше інформації ми дізнаємося —
            тим легше і краще вона трансформується в підсвідомості композитора в
            ідею та емоцію саундтрека.
          </CardDeckItem>
          <CardDeckItem variant="waves-revers" textAlign="center">
            Далі — буквально справа техніки. Ми беремо «ядро» й навколо нього
            вибудовуємо всю композицію.
          </CardDeckItem>
          <CardDeckItem variant="circle" textAlign="center">
            Творчо й надійно.
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
  query MusicCreationUKPageQuery {
    reviews: allWordpressWpClientReview(
      limit: 5
      filter: {
        acf: { music_composing: { music_composing_visibility: { eq: true } } }
        polylang_current_lang: { eq: "uk" }
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
