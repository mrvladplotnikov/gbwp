/* eslint-disable jsx-a11y/control-has-associated-label, jsx-a11y/anchor-has-content */
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Trans, Link, useI18next } from "gatsby-plugin-react-i18next"

import InlineButton from "../../InlineButton"
import FeatureList from "../../FeatureList"
import FeatureCard from "../../FeatureCard"
import Headline from "../../Headline"
import { Outer, Inner } from "../../Container"

import styles from "./styles.module.css"

import icon1 from "../../../images/vp-icons/icon-1.svg"
import icon2 from "../../../images/vp-icons/icon-2.svg"
import icon3 from "../../../images/vp-icons/icon-3.svg"
import icon4 from "../../../images/vp-icons/icon-4.svg"
import icon5 from "../../../images/vp-icons/icon-5.svg"
import icon6 from "../../../images/vp-icons/icon-6.svg"
import mailTo from "../../../utils/mailTo"

const Why = ({ title, ...props }) => {
  const { language } = useI18next()

  const {
    site: {
      siteMetadata: { adminEmail },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            adminEmail
          }
        }
      }
    `
  )

  return (
    <section className={styles.Why} {...props}>
      <Outer>
        <Headline className={styles.title}>
          {title || <Trans i18nKey="whyTitle" />}
        </Headline>
        <Inner>
          <FeatureList>
            <FeatureCard img={icon1}>
              <Trans i18nKey="why1" />
            </FeatureCard>
            <FeatureCard img={icon2}>
              <Trans i18nKey="why2" />
            </FeatureCard>
            <FeatureCard img={icon3}>
              <Trans i18nKey="why3" />
            </FeatureCard>
            <FeatureCard img={icon4}>
              <Trans
                i18nKey="why4"
                components={{
                  link1: (
                    <a
                      href="https://digilaw.pro/"
                      target="__blank"
                      rel="nofollow"
                    />
                  ),
                }}
              />
            </FeatureCard>
            <FeatureCard img={icon5}>
              <Trans
                i18nKey="why5"
                defaults="Millions of people have already listened to our work, and many of them were satisfied. You can check this <link1>here</link1>."
                components={{
                  link1: (
                    <Link language={language} rel="nofollow" to="/reviews" />
                  ),
                }}
              />
            </FeatureCard>
            <FeatureCard img={icon6}>
              <Trans
                i18nKey="why6"
                defaults="How about a <link1>free consultation</link1> or a cool <button1>technical task template</button1>? We are always open to communication, so feel free to <link2>email us</link2>."
                components={{
                  link1: (
                    <a
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      href={mailTo.mail[language]}
                    />
                  ),
                  button1: <InlineButton onClick={() => {}} />,
                  link2: (
                    <a
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      href={`mailto:${adminEmail}`}
                    />
                  ),
                }}
              />
            </FeatureCard>
          </FeatureList>
        </Inner>
      </Outer>
    </section>
  )
}

export default Why
