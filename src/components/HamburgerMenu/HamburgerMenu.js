import React from "react"
import styles from "./styles.module.css"
import { Link } from "gatsby"
const HamburgerMenu = props => {
  return (
    <div className={styles.HamburgerMenu}>
      <button type="button" className={styles.hamburger}>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>

      <nav className={styles.menu}>
        <button type="button" className={styles.closeMenu}>
          X
        </button>
        <ul className={styles.navigation}>
          <li>
            <Link to="/portfolio">Портфолио</Link>
          </li>
          <li>Услуги</li>
          <li>
            <Link to="/portfolio">Блог</Link>
          </li>
          <li>
            <Link to="/portfolio">О компании</Link>
          </li>
          <li>
            <Link to="/portfolio">FAQ</Link>
          </li>
          <li>
            <Link to="/portfolio">Наши ценности</Link>
          </li>
          <li>
            <Link to="/portfolio">Контакты</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default HamburgerMenu
