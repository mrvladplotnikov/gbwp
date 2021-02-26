import React from "react"
import classNames from "classnames"
import { useTranslation, Trans } from "gatsby-plugin-react-i18next"

import { Outer, Inner } from "../../Container"
import Headline from "../../Headline"

import ServicesList from "./components/ServicesList/ServicesList"

import styles from "./styles.module.css"

const Services = ({ className = "" }) => {
  const { t } = useTranslation()

  const services = [
    {
      title: t("service1Title", { defaultValue: "Music Composing" }),
      link: "/services/music-composing",
      alt: t("service1Alt", { defaultValue: "Music Composing" }),
    },
    {
      title: t("service2Title", { defaultValue: "Audio Branding" }),
      link: "/services/audio-branding",
      alt: t("service2Alt", { defaultValue: "Audio branding" }),
    },
    {
      title: t("service3Title", { defaultValue: "Sound Design" }),
      link: "/services/sound-design",
      alt: t("service3Alt", { defaultValue: "Sound design" }),
    },
    {
      title: t("service4Title", { defaultValue: "Voice Casting" }),
      link: "/services/voice-casting",
      alt: t("service4Alt", { defaultValue: "Voice over services" }),
    },
  ]

  return (
    <section className={classNames(styles.Services, className)}>
      <Outer>
        <Headline className={styles.title} Tag="h2">
          <Trans i18nKey="servicesTitle" />
        </Headline>
        <Inner>
          <ServicesList services={services} />
        </Inner>
      </Outer>
    </section>
  )
}

export default Services
