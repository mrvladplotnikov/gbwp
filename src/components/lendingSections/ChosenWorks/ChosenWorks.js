import React from "react"
import styles from "./styles.module.css"
import { Outer } from "../../Container"
import Headline from "../../Headline"
import StyledLink from "../../StyledLink"
import WorkCards from "../../WorkCards"

const ChosenWorks = ({
  id = "",
  portfolioRef = null,
  title = "",
  works = [],
  linkLabel = "",
  linkURL = null,
}) => (
  <section id={id} ref={portfolioRef} className={styles.ChosenWorks}>
    <Outer className={styles.container}>
      <Headline className={styles.title}>{title}</Headline>
      {linkURL && (
        <StyledLink className={styles.desktopButton} to={linkURL}>
          {linkLabel}
        </StyledLink>
      )}
    </Outer>
    <WorkCards works={works} />
    {linkURL && (
      <div className={styles.mobileButtonContainer}>
        <StyledLink to={linkURL}>{linkLabel}</StyledLink>
      </div>
    )}
  </section>
)

export default ChosenWorks
