import React, { useState } from "react"
import styles from "./styles.module.css"
import { FaFacebookF } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io"
import { GrTwitter } from "react-icons/gr"
import { FaLinkedinIn } from "react-icons/fa"
import blog1 from "../../images/blog/blog1.jpg"
import blog2 from "../../images/blog/blog2.jpg"
import blog3 from "../../images/blog/blog3.jpg"
import blog4 from "../../images/blog/blog4.jpg"
import blog5 from "../../images/blog/blog5.jpg"
import blog6 from "../../images/blog/blog6.jpg"
import arrow from "../../images/blog/icons/link_arrow.svg"
import arrow2 from "../../images/blog/icons/arrow2.svg"

//data
const blogCardsInfo = [
  {
    id: "12f989gt",
    image: blog1,
    title: "Quis autem vel eum iure reprehen",
    text:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo [...]",
    filters: [
      {
        text: "полезное",
        backgroundColor: "#2F8721",
        checkBox: false,
        id: "uur2f789",
      },
    ],
  },
  {
    id: "12f68gt",

    image: blog2,
    title: "Quis autem vel eum iure reprehen",
    text:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo [...]",
    filters: [
      {
        text: "интeрвью",
        backgroundColor: "#295B97",
        checkBox: false,
        id: "uu4f7i89",
      },
      {
        text: "подкасты",
        backgroundColor: "#BDAE28",
        checkBox: false,
        id: "uu7g5f89",
      },
      {
        text: "пресса",
        backgroundColor: "#289783",
        checkBox: false,
        id: "uu78u6ui9",
      },
    ],
  },
  {
    id: "12f387gt",

    image: blog3,
    title: "Quis autem vel eum iure reprehen",
    text:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo [...]",
    filters: [
      {
        text: "стримы",
        backgroundColor: "#7A379A",
        checkBox: false,
        id: "uuqb1789",
      },
    ],
  },
  {
    id: "12576fgt",

    image: blog4,
    title: "Quis autem vel eum iure reprehen",
    text:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo [...]",
    filters: [
      {
        text: "новости",
        backgroundColor: "#9F1D2C",
        checkBox: false,
        id: "uuvv3789",
      },
    ],
  },
  {
    id: "12f141656gt",

    image: blog5,
    title: "Quis autem vel eum iure reprehen",
    text:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo [...]",
    filters: [
      {
        text: "новости",
        backgroundColor: "#9F1D2C",
        checkBox: false,
        id: "uuvv3789",
      },
      {
        text: "интeрвью",
        backgroundColor: "#295B97",
        checkBox: false,
        id: "uu4f7i89",
      },
    ],
  },
  {
    id: "1501116fgt",

    image: blog6,
    title: "Quis autem vel eum iure reprehen",
    text:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo [...]",
    filters: [
      {
        text: "подкасты",
        backgroundColor: "#BDAE28",
        checkBox: false,
        id: "uu7g5f89",
      },
      {
        text: "пресса",
        backgroundColor: "#289783",
        checkBox: false,
        id: "uu78u6ui9",
      },
    ],
  },
]
const allFilters = [
  {
    text: "стримы",
    backgroundColor: "#7A379A",
    id: "uuqb1789",
  },
  {
    text: "полезное",
    backgroundColor: "#2F8721",
    id: "uur2f789",
  },
  {
    text: "новости",
    backgroundColor: "#9F1D2C",
    id: "uuvv3789",
  },
  {
    text: "интeрвью",
    backgroundColor: "#295B97",
    id: "uu4f7i89",
  },
  {
    text: "подкасты",
    backgroundColor: "#BDAE28",
    id: "uu7g5f89",
  },
  {
    text: "пресса",
    backgroundColor: "#289783",
    id: "uu78u6ui9",
  },
]
const filterDiscard = {
  text: "сбросить",
  backgroundColor: "#ffffff",
  color: "black",
}
const sideBarData = {
  title: "БЛОГ",
  text:
    "Ми віримо, що обмін знаннями та ідеями — це ключ до створення крутих речей. Тож ми збираємо якомога більше власного досвіду, спілкуємося з талановитими представниками креативної індустрії та ділимося цим усім із вами, щоби надихнути на нові звершення",
  filterText: "А это фильтр:",
}
const contactFormData = {
  title: "Будем на связи",
  text:
    "У вас есть интересная тема для совместного материала или идея коллаборации? Напишите нам! Или подпишитесь на нашу рассылку, чтобы следить за новыми постами.",
  adress: "connect@vp-production.com",
  policy:
    "Отправляя эту форму, вы соглашаетесь с нашей политикой конфиденциальности.",
  inputName: "Имя",
  inputEmail: "Email",
  inputbtn: "Подписаться на рассылку",
}

//card components
const CardImage = ({ image, filters }) => {
  return (
    <div className={styles.CardImageContainer}>
      <img className={styles.CardImage} src={image} alt="for blog1" />
      {filters && (
        <div className={styles.CardImage__filters}>
          {filters.map(filter => (
            <Filter key={filter.id + "t87"} filter={filter} />
          ))}
        </div>
      )}
    </div>
  )
}
const CardBody = ({ text, title }) => {
  return (
    <div className={styles.CardBody}>
      <p className={styles.CardBody__title}>{title}</p>
      <p className={styles.CardBody__text}>{text}</p>
    </div>
  )
}
const CardContainer = ({ data: { image, title, text, filters } }) => {
  return (
    <div className={styles.CardContainer}>
      <CardImage image={image} filters={filters} />
      <CardBody title={title} text={text} />
    </div>
  )
}
const BlogCard = ({ data }) => {
  return (
    <div className={styles.BlogCard}>
      <CardContainer data={data} />
    </div>
  )
}

//filters
const Filter = ({ filter }) => {
  return (
    <button
      className={styles.Filter__containerBtn}
      style={{ backgroundColor: filter.backgroundColor }}
    >
      <p
        className={styles.Filter__text}
        style={{ color: filter.color || "#FFFFFF" }}
      >
        {filter.text}
      </p>
    </button>
  )
}

//desktop
const SideBar = ({ filters, data }) => {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.Sidebar__innerContainer}>
        <div className={styles.Sidebar__infoContainer}>
          <p className={styles.Sidebar__infoTitle}>{data.title}</p>
          <p className={styles.Sidebar__infoText}>{data.text}</p>
        </div>
        <div className={styles.Sidebar__filtersContainer}>
          <div className={styles.Sidebar__filters}>
            <p className={styles.Sidebar__infoFilters}>{data.filterText}</p>
            {filters.map(filter => (
              <Filter key={filter.id + "t8447"} filter={filter} />
            ))}
          </div>
          <div className={styles.Sidebar__filters}>
            <Filter key="uu78u6ui9er5" filter={filterDiscard} />
          </div>
        </div>
      </div>
    </div>
  )
}

//icon links
const Social = () => {
  const [isHoveredInst, setIsHoveredInst] = useState(false)
  const [isHoveredTwi, setIsHoveredTwi] = useState(false)
  const [isHoveredFb, setIsHoveredFb] = useState(false)
  const [isHoveredLinkIn, setIsHoveredLinkIn] = useState(false)
  const socials = [
    {
      id: "12rtyuio",
      text: <p className={styles.Social__text}>More Fun</p>,
      textHovered: <p className={styles.Social__text_hovered}>More Fun</p>,
      icon: <GrTwitter className={styles.Social__icon_twi} />,
      iconHovered: <GrTwitter className={styles.Social__icon_hovered} />,
      isHovered: isHoveredTwi,
      handle: () => {
        return setIsHoveredTwi(!isHoveredTwi)
      },
    },
    {
      id: "12rtysduio",

      text: <p className={styles.Social__text}>More Backstage</p>,
      textHovered: (
        <p className={styles.Social__text_hovered}>More Backstage</p>
      ),
      icon: <IoLogoInstagram className={styles.Social__icon_insta} />,
      iconHovered: <IoLogoInstagram className={styles.Social__icon_hovered} />,
      isHovered: isHoveredInst,
      handle: () => {
        return setIsHoveredInst(!isHoveredInst)
      },
    },
    {
      id: "12rtyuthio",

      text: <p className={styles.Social__text}>More News</p>,
      textHovered: <p className={styles.Social__text_hovered}>More News</p>,
      icon: <FaFacebookF className={styles.Social__icon_fb} />,
      iconHovered: <FaFacebookF className={styles.Social__icon_hovered} />,
      isHovered: isHoveredFb,
      handle: () => {
        return setIsHoveredFb(!isHoveredFb)
      },
    },
    {
      id: "12rt45yuio",

      text: <p className={styles.Social__text}>More Useful Info</p>,
      textHovered: (
        <p className={styles.Social__text_hovered}>More Useful Info</p>
      ),
      icon: <FaLinkedinIn className={styles.Social__icon_linkin} />,
      iconHovered: <FaLinkedinIn className={styles.Social__icon_hovered} />,
      isHovered: isHoveredLinkIn,
      handle: () => {
        return setIsHoveredLinkIn(!isHoveredLinkIn)
      },
    },
  ]

  const renderSocials = socials => {
    return socials.map(social => {
      return (
        <button
          key={social.id}
          className={styles.Social__linkContainer}
          onMouseEnter={() => social.handle()}
          onMouseLeave={() => social.handle()}
        >
          {!social.isHovered && (
            <div className={styles.Social__linkInnerContainer}>
              <div className={styles.Social__iconContainer}>{social.icon}</div>
              <div>{social.text}</div>
              <div className={styles.Social__icon_arrow}>
                <img src={arrow2} alt="icon for blog" />
              </div>
            </div>
          )}
          {social.isHovered && (
            <div className={styles.Social__linkInnerContainer}>
              <div className={styles.Social__iconContainer}>
                {social.iconHovered}
              </div>
              <div>{social.textHovered}</div>
              <div className={styles.Social__icon_arrow}>
                <img src={arrow} alt="icon for blog" />
              </div>
            </div>
          )}
        </button>
      )
    })
  }

  return (
    <div className={styles.Social}>
      <div className={styles.Social__title}>Want To See More?</div>
      <div className={styles.Social__container}>{renderSocials(socials)}</div>
    </div>
  )
}

//form
const ContactForm = ({ contactFormData }) => {
  return (
    <div className={styles.ContactForm}>
      <div className={styles.ContactForm__infoContainer}>
        <div className={styles.ContactForm__infoTitle}>
          {contactFormData.title}
        </div>
        <div className={styles.ContactForm__infoText}>
          {contactFormData.text}
        </div>
        <div className={styles.ContactForm__infoAdress}>
          {contactFormData.adress}
        </div>
      </div>
      <div className={styles.ContactForm__formContainer}>
        <div className={styles.ContactForm__inputContainer}>
          <label for="name">{contactFormData.inputName}</label>
          <input
            type="text"
            id="name"
            name="name"
            autocomplete="off"
            className={styles.ContactForm__input}
          />
        </div>
        <div className={styles.ContactForm__inputContainer}>
          <label for="email">{contactFormData.inputEmail}</label>
          <input
            type="text"
            id="email"
            name="email"
            autocomplete="off"
            className={styles.ContactForm__input}
          />
        </div>
        <div className={styles.ContactForm__policy}>
          {contactFormData.policy}
        </div>
        <div>
          <button className={styles.ContactForm__btn}>
            {" "}
            {contactFormData.inputbtn}
          </button>
        </div>
      </div>
    </div>
  )
}

const Blog = () => {
  return (
    <div className={styles.BlogContainer}>
      <div>
        <SideBar filters={allFilters} data={sideBarData} />
      </div>
      <div className={styles.BlogCardContainer}>
        {blogCardsInfo.map(cardInfo => (
          <BlogCard key={cardInfo.id + "t187"} data={cardInfo} />
        ))}
        <Social />
        <ContactForm contactFormData={contactFormData} />
      </div>
    </div>
  )
}
export default Blog
