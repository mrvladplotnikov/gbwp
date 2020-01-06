import React from "react"
import styles from "./styles.module.css"
import Layout from "../../layouts/uk/default"
import Contacts from "../../components/lendingSections/Contacts"
import Headline from "../../components/Headline"
import { Inner } from "../../components/Container"
import StyledAccordion from "../../components/StyledAccordion"
import StyledAccordionItem from "../../components/StyledAccordionItem"
import boxOfDotsLink from "../../images/box-of-dots.svg"

const Boxes = () => (
  <img className={styles.box} src={boxOfDotsLink} role="presentation" alt="" />
)

const Faq = ({ location }) => (
  <Layout location={location}>
    <Inner>
      <Headline Tag="h1" className={styles.title}>
        faq
      </Headline>

      <Boxes />

      <Boxes />

      <Headline Tag="h2" className={styles.subtitle}>
        Организационные вопросы
      </Headline>
      <StyledAccordion className={styles.accordeon}>
        <StyledAccordionItem title="Что нужно, чтобы вы могли начать работу?">
          <p>
            ви заповнюєте бриф і отримуєте безплатну консультацію. Ми
            знайомимося один з одним і розуміємо, наскільки готові до співпраці.
            Для нас важливо збігатися з клієнтом у загальному баченні і
            принципах роботи.
          </p>
        </StyledAccordionItem>
        <StyledAccordionItem title="А что делать, если мой проект под NDA??">
          <p>
            на цьому етапі ви складаєте технічне завдання, якщо потрібно — ми
            допомагаємо. Чому ми не робимо ТЗ самостійно — читайте тут. Крім
            того, ми підбираємо референси для майбутнього трека й разом із
            юристами готуємо договір співпраці. Обговорюємо й погоджуємо все з
            вами й переходимо до наступного етапу.
          </p>
        </StyledAccordionItem>
        <StyledAccordionItem title="Вы делаете тестовые задания?">
          <p>
            ми з вами підписуємо договір, ви висилаєте аванс і ми приступаємо до
            виконання скетчів. Вони в нас найчастіше у формі 30-секундної демки
            головної теми треку.
          </p>
        </StyledAccordionItem>
        <StyledAccordionItem title="Продакшн">
          <p>
            цей етап — найвідповідальніший. Ми надсилаємо вам демо-матеріали та
            отримуємо від вас фідбек. Тут від вас знадобиться максимальна
            концентрація на процесі, адже саме від ваших побажань залежить
            подальша доля композиції. Ми допрацьовуємо трек згідно з
            пропозиціями й надсилаємо вам на погодження.
          </p>
          <p>
            Залежно від обраного пакета послуг у вас може бути до 5 безплатних
            правок на одну композицію.
          </p>
        </StyledAccordionItem>
        <StyledAccordionItem title="Прийом проекту">
          <p>
            після всіх погоджень ми висилаємо вам кінцевий файл із треком. Цей
            момент — останній шанс скористатися безплатними правками. Коли все
            готово, ми з вами підписуємо Акт прийому-передачі і ви надсилаєте
            нам другу частину оплати, якщо це передбачено обраним пакетом послуг
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
      <Contacts />
    </Inner>
  </Layout>
)

export default Faq
