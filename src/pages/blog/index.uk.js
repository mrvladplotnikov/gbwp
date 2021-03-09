import React, { useState } from "react"
import { Outer, Inner } from "../../components/Container/Container"
import { graphql } from "gatsby"
import styles from "./styles.module.css"
import { FaFacebookF } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io"
import { GrTwitter } from "react-icons/gr"
import {
  FaLinkedinIn,
  FaTimesCircle,
  FaRegDotCircle,
  FaRegCircle,
} from "react-icons/fa"
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
const sidebarBtnFilters = [
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
const filterBtnDiscard = {
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
            <Filter key={filter.id} filter={filter} />
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
const Filter = ({ filter, icon = false, text = "center", isBtn = false }) => {
  const [checked, setChecked] = useState(false)
  const [hover, setHover] = useState(false)

  return (
    <div
      className={styles.Filter__containerBtn}
      onClick={() => setChecked(!checked)}
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
      style={{
        backgroundColor: filter.backgroundColor,
        border: hover && isBtn ? "2px solid white" : "2px solid transparent",
        cursor: isBtn ? "pointer" : "unset",
      }}
    >
      {icon && (
        <div className={styles.Filter__iconContainer}>
          {checked && <FaRegDotCircle className={styles.Filter__icon} />}
          {!checked && <FaRegCircle className={styles.Filter__icon} />}
        </div>
      )}
      <div
        className={styles.Filter__text}
        style={{ color: filter.color || "#FFFFFF", textAlign: text }}
      >
        {filter.text}
      </div>
    </div>
  )
}
const FilterDiscard = ({
  filter,
  icon = false,
  text = "center",
  isBtn = false,
}) => {
  const [checked, setChecked] = useState(false)
  const [hover, setHover] = useState(false)

  return (
    <div
      className={styles.Filter__containerBtnDiscard}
      onClick={() => setChecked(!checked)}
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
      style={{
        backgroundColor: filter.backgroundColor,
        border: hover && isBtn ? "2px solid black" : "2px solid transparent",
        cursor: isBtn ? "pointer" : "unset",
      }}
    >
      {icon && (
        <div className={styles.Filter__iconContainer}>
          <FaTimesCircle color="black" className={styles.Filter__icon} />
        </div>
      )}
      <p
        className={styles.Filter__text}
        style={{ color: filter.color || "#FFFFFF", textAlign: text }}
      >
        {filter.text}
      </p>
    </div>
  )
}

//custom
const SideBar = ({ filters, data }) => {
  const isDeviceLarge = window.innerWidth >= 1200

  return (
    <div className={styles.Sidebar}>
      <div className={styles.Sidebar__infoContainer}>
        <p className={styles.Sidebar__infoTitle}>{data.title}</p>
        <p className={styles.Sidebar__infoText}>{data.text}</p>
        <p className={styles.Sidebar__infoFilters}>{data.filterText}</p>
      </div>
      {isDeviceLarge && (
        <div className={styles.Sidebar__filters}>
          <div className={styles.Sidebar__filtersInnerContainer}>
            {filters.map(filter => (
              <Filter
                key={filter.id}
                filter={filter}
                icon={true}
                text={"left"}
                isBtn={true}
              />
            ))}
          </div>
          <div className={styles.Sidebar__filtersDiscard}>
            <FilterDiscard
              key={filterBtnDiscard.id}
              filter={filterBtnDiscard}
              icon={true}
              text={"left"}
              isBtn={true}
            />
          </div>
        </div>
      )}
      {!isDeviceLarge && (
        <div className={styles.Sidebar__filters}>
          <div className={styles.Sidebar__filtersInnerContainer}>
            {filters.map(filter => (
              <Filter
                key={filter.id}
                filter={filter}
                icon={true}
                text={"left"}
                isBtn={true}
              />
            ))}
            <FilterDiscard
              className={styles.Sidebar__filtersDiscard}
              key={filterBtnDiscard.id}
              filter={filterBtnDiscard}
              icon={true}
              text={"left"}
              isBtn={true}
            />
          </div>
        </div>
      )}
    </div>
  )
}
const BlogPagination = () => {
  return (
    <div className={styles.BlogPagination}>

      <div className={styles.BlogPagination__Container}>1</div>
      <div className={styles.BlogPagination__Container}>10</div>
      <div className={styles.BlogPagination__Container}>50</div>
      <div className={styles.BlogPagination__Container}>1504</div>
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
      <Inner>
        <div className={styles.Social__title}>Want To See More?</div>
        <div className={styles.Social__container}>{renderSocials(socials)}</div>
      </Inner>
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
          <label htmlform="name">{contactFormData.inputName}</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            className={styles.ContactForm__input}
          />
        </div>
        <div className={styles.ContactForm__inputContainer}>
          <label htmlform="email">{contactFormData.inputEmail}</label>
          <input
            type="text"
            id="email"
            name="email"
            autoComplete="off"
            className={styles.ContactForm__input}
          />
        </div>
        <div className={styles.ContactForm__policy}>
          {contactFormData.policy}
        </div>
        <div>
          <button className={styles.ContactForm__btn}>
            {contactFormData.inputbtn}
          </button>
        </div>
      </div>
    </div>
  )
}
const Blog = ({ data, location }) => {
  const sidebarImage = data.sidebarImage.childImageSharp.fluid

  return (
    <div className={styles.BlogContainer}>
      <SideBar filters={sidebarBtnFilters} data={sideBarData} />
      <Outer>
        <Inner>
          <div className={styles.BlogCardContainer}>
            {blogCardsInfo.map(cardInfo => (
              <BlogCard key={cardInfo.id + "t187"} data={cardInfo} />
            ))}
            <BlogPagination />
            <Social />
            <ContactForm contactFormData={contactFormData} />
          </div>
        </Inner>
      </Outer>
    </div>
  )
}

export const query = graphql`
  query BlogPageQuery {
    sidebarImage: file(relativePath: { eq: "blog/blog_sideBar_bg.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Blog
