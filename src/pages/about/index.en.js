import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
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

const Box = () => (
  <img className={styles.box} src={boxOfDotsLink} role="presentation" alt="" />
)

const About = ({ data, location }) => {
  const team = data.team.members

  return (
    <Layout location={location} title="About us">
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
                <a href="/">Total-Empty</a>. And although Vlad received his
                higher education in a completely different field, he still did
                not go for a «serious» and stable job. At the decisive moment,
                he chose the music.
              </p>
              <p>
                Initially, VP Production was one person who created music and
                sound effects, mixed, mastered, implemented sound, communicated
                with customers, and dealt with taxes. Naturally, after a short
                time, it became apparent: cool things could be done only with
                cool people. And so began the path of our company.
              </p>
              <p>
                Now VP Production is a team of people where everyone loves his
                or her job. Whether it is music composing, sound design, voice
                acting, project management, or marketing — we cannot imagine our
                lives without it. That is why every day we inspire listeners on
                both sides of media projects and enjoy it.
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
          We are improving everything that can be improved, even if the result
          is already paid for and accepted.
        </h3>
      </SectionWithText>
      <Services
        title="Our services"
        services={[
          {
            title: "Music Creation",
            link: "/en/services/music-сreation",
          },
          {
            title: "Audiobranding",
            link: "/en/services/audio-branding",
          },
          {
            title: "Sound design",
            link: "/en/services/sound-design",
          },
          {
            title: "Voice casting",
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
          so that the final sound works for your project.
        </FeatureCard>
        <FeatureCard img={icon3}>
          For four years of work, we have broken zero deadlines. It describes
          our team and managers in the best way.
        </FeatureCard>
        <FeatureCard img={icon4}>
          Thanks to the Digilaw contract, you will gain control over the process
          and the necessary rights to the result of the work.
        </FeatureCard>
        <FeatureCard img={icon5}>
          Millions of people have already listened to our work, and many of them
          were satisfied. You can check this <a href="/">here</a>.
        </FeatureCard>
        <FeatureCard img={icon6}>
          How about a <a href="/">free consultation</a> or a{" "}
          <a href="/">cool technical task template</a>? We are always open to
          communication, so feel free to <a href="/">write</a>.
        </FeatureCard>
      </Why>
      <SectionWithText
        linkLabel="Наши ценности"
        style={{ backgroundColor: "#090909" }}
      >
        <h3>
          Using audio, we inspire listeners on both sides of media projects to
          live new experiences and discover their creative potential.
        </h3>
      </SectionWithText>
      <Contacts />
    </Layout>
  )
}

About.propTypes = {
  location: PropTypes.any.isRequired,
}

export const query = graphql`
  query AboutPageEnQuery {
    team: allWordpressWpTeam(
      limit: 5
      filter: { polylang_current_lang: { eq: "en" } }
    ) {
      members: nodes {
        id
        name: title
        details: content
        photo: featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 570, srcSetBreakpoints: [445, 900]) {
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
