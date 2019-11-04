import React from "react"
import styles from "./styles.module.css"
import { Outer } from "../../Container"
import Headline from "../../Headline"
import StyledLink from "../../StyledLink"
import WorkCardsLIst from "../../WorkCardsLIst"

const ChosenWorks = ({ portfolioRef = null }) => (
  <section ref={portfolioRef} className={styles.ChosenWorks}>
    <Outer className={styles.container}>
      <Headline className={styles.title}>Избранные работы</Headline>
      <StyledLink className={styles.desktopButton} to="/blog">
        Перейти в блог
      </StyledLink>
    </Outer>
    <WorkCardsLIst />
    <div className={styles.mobileButtonContainer}>
      <StyledLink to="/blog">Перейти в блог</StyledLink>
    </div>
  </section>
)

export default ChosenWorks
