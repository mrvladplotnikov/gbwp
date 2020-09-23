import React from "react"
import styles from "./styles.module.css"
import { Outer } from "../../Container"
import Headline from "../../Headline"
import Button from "~components/Button"
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
        <Button className={styles.desktopButton} to={linkURL}>
          {linkLabel}
        </Button>
      )}
    </Outer>
    <WorkCards works={works} />
    {linkURL && (
      <div className={styles.mobileButtonContainer}>
        <Button to={linkURL}>{linkLabel}</Button>
      </div>
    )}
  </section>
)

export default ChosenWorks
