import React, { useState } from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import Layout from "../../layouts/en/default"
import { Outer, Inner } from "../../components/Container"
import Headline from "../../components/Headline"
import boxOfDotsLink from "../../images/icon-box.svg"
import styles from "./styles.module.css"
import Contacts from "../../components/lendingSections/Contacts"
import SectionWithText from "../../components/SectionWithText"
import Why from "../../components/lendingSections/Why"
import FeatureCard from "../../components/FeatureCard"
import Services from "../../components/lendingSections/Services"

import icon1 from "../../images/vp-icons/icon-1.svg"
import icon2 from "../../images/vp-icons/icon-2.svg"
import icon3 from "../../images/vp-icons/icon-3.svg"
import icon4 from "../../images/vp-icons/icon-4.svg"
import icon5 from "../../images/vp-icons/icon-5.svg"
import icon6 from "../../images/vp-icons/icon-6.svg"

import logoWithSlogan from "../../images/logo-with-slogan.svg"
import TeamCarousel from "../../components/TeamCarousel"

import mailTo from "../../utils/mailTo"
import ModalContactForm from "../../components/ModalContactForm/ModalContactForm"
import InlineButton from "../../components/InlineButton"

const Box = () => (
  <img className={styles.box} src={boxOfDotsLink} role="presentation" alt="" />
)

const About = ({ data, location }) => {
  const [showFrom, setShowForm] = useState(false)
  const team = data.team.members

  return (
    <Layout
      location={location}
      title="About audio agency"
      description="• Our team. • Who, why, and how creates audio that works for your project and audience. ✔ Features and benefits of our approach."
    >
      <Inner>
        <Headline Tag="h1" className={styles.title}>
          About us
        </Headline>
        <Box />
        <Box />
      </Inner>
      <section className={styles.aboutSection}>
        <Outer>
          <Headline className={styles.aboutTitle} Tag="h2">
            It all started with…
          </Headline>
          <Inner className={styles.aboutContainer}>
            <div className={styles.aboutCol}>
              <p>
                Vlad Plotnikov and his desire to turn his favorite pastime into
                work.
              </p>
              <p>
                He was always a musician: the first concert on a broom at three
                years old, a music school instead of football, endless solfeggio
                lessons, and a youthful rock riot, which later became the{" "}
                <a
                  href="https://total-empty.bandcamp.com/"
                  rel="nofollow"
                  target="__blank"
                >
                  Total-Empty
                </a>
                . And although Vlad received his higher education in a
                completely different field, he still did not go for a «serious»
                and stable job. At the decisive moment, he chose the music.
              </p>
              <p>
                Initially, VP Production was one person who created music and
                sound effects, mixed, mastered, implemented sound, communicated
                with customers, and dealt with taxes. Naturally, after a short
                time, it became apparent: cool things could be done only with
                cool people. And so began the path of our company.
              </p>
              <p>
                Now VP Production is a team where everyone loves his or her job.
                Whether it is music composing, sound design, voice acting,
                project management, or marketing — we cannot imagine our lives
                without it. That is why every day we inspire listeners on both
                sides of audiovisual projects and enjoy it.
              </p>
            </div>
            <div className={styles.aboutCol}>
              <img
                className={styles.aboutImage}
                src={logoWithSlogan}
                alt="VP Production"
              />
            </div>
          </Inner>
        </Outer>
      </section>
      <section className={styles.ourTeamSection}>
        <Outer>
          <Headline Tag="h2">Audio team</Headline>
        </Outer>
        <Inner>
          <TeamCarousel team={team} />
        </Inner>
      </section>
      <SectionWithText style={{ backgroundColor: "#090909" }}>
        <h3>We primarily help, not sell.</h3>
        <h3>
          We work on projects when we match with a client in the vision and
          principles of work.
        </h3>
        <h3>
          We improve everything that can be improved, even if the result is
          already paid for and accepted.
        </h3>
      </SectionWithText>
      <Services
        title="Our services"
        className={styles.services}
        services={[
          {
            title: "Music Composing",
            link: "/en/services/music-composing",
          },
          {
            title: "Audio Branding",
            link: "/en/services/audio-branding",
          },
          {
            title: "Sound Design",
            link: "/en/services/sound-design",
          },
          {
            title: "Voice Casting",
            link: "/en/services/voice-casting",
          },
        ]}
      />
      <Why title="Also" style={{ backgroundColor: "#000" }}>
        <FeatureCard img={icon1}>
          We are partners of our clients. It is the success of your specific
          project that is important to us, and not endless samey-same work.
        </FeatureCard>
        <FeatureCard img={icon2}>
          We look more in-depth than the technical task and ask many questions
          so that the final sound works for your audience.
        </FeatureCard>
        <FeatureCard img={icon3}>
          For four years of work, we have broken zero deadlines. This describes
          our team and managers in the best way.
        </FeatureCard>
        <FeatureCard img={icon4}>
          Thanks to the{" "}
          <a href="https://digilaw.pro/" target="__blank" rel="nofollow">
            Digilaw
          </a>{" "}
          contract, you will gain control over the process and the necessary
          rights to the result of the work.
        </FeatureCard>
        <FeatureCard img={icon5}>
          Millions of people have already listened to our work, and many of them
          were satisfied. You can check this <Link to="/en/reviews">here</Link>.
        </FeatureCard>
        <FeatureCard img={icon6}>
          How about a{" "}
          <a rel="noopener noreferrer" target="_blank" href={mailTo.mail.en}>
            free consultation
          </a>{" "}
          or a cool{" "}
          <InlineButton onClick={() => setShowForm(true)}>
            technical task template
          </InlineButton>
          ? We are always open to communication, so feel free to{" "}
          <a rel="noopener noreferrer" target="_blank" href={mailTo.mail.en}>
            email us
          </a>
          .
        </FeatureCard>
      </Why>
      <SectionWithText
        linkLabel="Our values"
        link="/en/our-values"
        style={{ backgroundColor: "#090909" }}
      >
        <h3>
          Using audio, we inspire listeners on both sides of media projects to
          live new experiences and discover their creative potential.
        </h3>
      </SectionWithText>
      <Contacts>
        Tell us about your project, product, or idea. Ask for advice, or get a
        full{" "}
        <a rel="noopener noreferrer" target="_blank" href={mailTo.mail.en}>
          free consultation
        </a>
        . Find out the cost, specify a vital question, or maybe you want to
        become part of our team? Anything you want! We will be happy to get to
        know you and help.
      </Contacts>
      <ModalContactForm
        title="Technical task template"
        subTitle="We are confident that a correctly made technical task increases the chances of success of the project. Therefore, we are happy to share what works for us!"
        open={showFrom}
        onClose={() => setShowForm(false)}
      />
    </Layout>
  )
}

About.propTypes = {
  location: PropTypes.any.isRequired,
}

export const query = graphql`
  query AboutPageEnQuery {
    team: allWordpressWpTeam(filter: { polylang_current_lang: { eq: "en" } }) {
      members: nodes {
        id
        name: title
        details: content
        photo: featured_media {
          localFile {
            childImageSharp {
              fluid(
                maxWidth: 570
                srcSetBreakpoints: [445, 900]
                quality: 100
              ) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        meta: acf {
          position
        }
      }
    }
  }
`

export default About
