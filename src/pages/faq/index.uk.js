import React, { useState } from "react"
import styles from "./styles.module.css"
import Layout from "../../layouts/uk/default"
import Contacts from "../../components/lendingSections/Contacts"
import Headline from "../../components/Headline"
import { Inner } from "../../components/Container"
import StyledAccordion from "../../components/StyledAccordion"
import StyledAccordionItem from "../../components/StyledAccordionItem"
import boxOfDotsLink from "../../images/icon-box.svg"
import classNames from "classnames"

import mailTo from "../../utils/mailTo"
import ModalContactForm from "../../components/ModalContactForm/ModalContactForm"
import InlineButton from "../../components/InlineButton"
import { Link } from "gatsby"

const Boxes = ({ className = "" }) => (
  <img
    className={classNames(styles.box, className)}
    src={boxOfDotsLink}
    role="presentation"
    alt=""
  />
)

const Faq = ({ location }) => {
  const [showFrom, setShowForm] = useState(false)

  return (
    <Layout location={location} title="FAQ">
      <Inner>
        <Headline Tag="h1" className={styles.title}>
          faq
        </Headline>

        <Boxes className={styles.boxFirst} />

        <Boxes className={styles.boxSecond} />

        <Headline Tag="h2" className={styles.subtitle}>
          Організаційні питання
        </Headline>
        <StyledAccordion className={styles.accordeon}>
          <StyledAccordionItem title="Що потрібно аби ви могли почати роботу?">
            <p>
              Спершу нам потрібно познайомитися з вами і вашим проєктом. Для
              цього ви заповнюєте бриф, а ми проводимо для вас{" "}
              <a href={mailTo.mail.uk}>безплатну консультацію</a>. Якщо ми з
              вами збігатемося характерами, залишиться тільки скласти технічне
              завдання й підписати договір.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="А що робити, якщо мій проєкт під NDA?">
            <p>
              <a href={mailTo.mail.uk}>Напишіть нам</a>, ми підпишемо відповідні
              документи і зможемо вільно все обговорити.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Ви робите тестові завдання?">
            <p>
              Звичайно, ми виконуємо тестові завдання, але за стандартною
              вартістю послуг.
            </p>

            <p>
              Ми вважаємо, що формат безоплатного тестового завдання змушує
              виконавця фокусуватися не на потребах проєкту, а на тому, як
              вразити замовника. Найчастіше результати таких завдань не
              об’єктивні й це в майбутньому може шкодити всьому проєкту.
            </p>

            <p>
              Проте, ми готові зробити виняток у тому випадку, якщо перед нами
              цікавий інді проєкт, який звертається до нас по допомогу і круто
              себе презентує. Якщо це про вас —{" "}
              <a href={mailTo.mail.uk}>сміливо пишіть</a>!
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Хто складає технічне завдання на проєкт?">
            <p>
              Ідеально, коли ТЗ на проєкт складає клієнт. У такому випадку в
              обох сторін від самого початку формуються максимально чіткі
              очікування від результатів співпраці. Це допомагає обрати
              потрібний вектор і закладає міцний фундамент для успішної роботи.
            </p>
            <p>
              Ми з радістю поділимося з вами{" "}
              <InlineButton onClick={() => setShowForm(true)}>
                перевіреним темплейтом технічного завдання
              </InlineButton>{" "}
              й за необхідності допоможемо з заповненням.
            </p>
          </StyledAccordionItem>
          <ModalContactForm
            title="Темплейт технічного завдання"
            subTitle="Ми впевнені, що правильно складене ТЗ підвищує шанси на успіх проєкту. Тому з радістю ділимося тим, що працює для нас!"
            open={showFrom}
            onClose={() => setShowForm(false)}
          />
          <StyledAccordionItem title="Як організована решта процесу роботи?">
            <p>
              Залежно від обраної послуги процес може варіюватися, хоча основні
              6 стадій залишаються незмінними: знайомство, підготовка, запуск,
              продакшн, прийом проєкту і його подальша підтримка.
            </p>

            <p>
              Як організований процес роботи для кожної з наших послуг, можна
              детально прочитати на сторінках{" "}
              <Link to="/services/music-composing">створення музики</Link>,{" "}
              <Link to="/services/sound-design">звуковий дизайн</Link>,{" "}
              <Link to="/services/audio-branding">аудіобрендинг</Link> і{" "}
              <Link to="/services/voice-casting">голосове озвучення</Link>.
            </p>
          </StyledAccordionItem>
        </StyledAccordion>

        <Headline Tag="h2" className={styles.subtitle}>
          Фінансові питання
        </Headline>

        <StyledAccordion className={styles.accordeon}>
          <StyledAccordionItem title="Ви працюєте за передоплатою?">
            <p>
              Так, ми працюємо за передоплатою. Найчастіше аванс складає 50 %
              суми, але в деяких випадках потрібна повна передоплата.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="У яких випадках передоплата становить 100 %?">
            <p>
              Повна передоплата потрібна у разі замовлення голосового озвучення,
              а також якщо ви обирете пакет S.O.S для створення музики.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Як можна оплатити ваші послуги?">
            <p>
              Ми приймаємо оплату за надані послуги тільки на розрахунковий
              рахунок фізичної особи підприємця (ФОП) або на рахунок Payoneer.
            </p>
          </StyledAccordionItem>
        </StyledAccordion>

        <Headline Tag="h2" className={styles.subtitle}>
          Юридичні питання
        </Headline>

        <StyledAccordion className={styles.accordeon}>
          <StyledAccordionItem title="Чи є у вас договір?">
            <p>
              Так, із кожним клієнтом ми укладаємо договір про надання послуг.
              Він у нас крутий і крафтовий — усе завдяки команді юристів, з якою
              ми співпрацюємо.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Які права на результат я отримаю?">
            <p>
              На створені нами звукові ефекти, голосове озвучення та елементи
              аудіо бренда ми за замовчуванням передаємо вам усі виняткові
              майнові права інтелектуальної власності, звичайно, з однією умовою
              — після оплати наших послуг.
            </p>

            <p>
              На створені нами музичні композиції ми за замовчуванням передаємо
              вам майнові права інтелектуальної власності, з обмеженням
              можливості вільного їх перепродажу й перевипуску, поза
              обумовленого нами проєкту, а також отримання монетизації зі
              стрімінгових сервісів і маркетплейсів.
            </p>

            <p>
              За необхідності ми можемо передати вам усі виключні майнові права
              інтелектуальної власності без будь-яких обмежень, але це слід
              обговорювати окремо й у такому випадку загальна вартість проєкту
              буде вище.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Чому ви просто не передаєте всі виняткові права на музику?">
            <p>
              Іноді саундтреки стають додатковим засобом монетизації проєкту і
              джерелом надприбутку. Ми вважаємо справедливим, що в подібних
              випадках композитор має право на додаткову компенсацію.
            </p>
          </StyledAccordionItem>
        </StyledAccordion>

        <Contacts>
          Не знайшли відповідь на важливе для вас питання? Обов’язково запитайте
          його в нас — ми будемо раді познайомитися з вами й допомогти.
        </Contacts>
      </Inner>
    </Layout>
  )
}

export default Faq
