import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layouts/en/home"
import Hero from "../components/lendingSections/Hero"
import About from "../components/lendingSections/About"
import Why from "../components/lendingSections/Why"
import Services from "../components/lendingSections/Services"
import ChosenWorks from "../components/lendingSections/ChosenWorks"
import Contacts from "../components/lendingSections/Contacts"
import SectionWithText from "../components/SectionWithText"
import FeatureCard from "../components/FeatureCard"

import icon1 from "../images/vp-icons/icon-1.svg"
import icon2 from "../images/vp-icons/icon-2.svg"
import icon3 from "../images/vp-icons/icon-3.svg"
import icon4 from "../images/vp-icons/icon-4.svg"
import icon5 from "../images/vp-icons/icon-5.svg"
import icon6 from "../images/vp-icons/icon-6.svg"

import mailTo from "../utils/mailTo"
import ModalContactForm from "../components/ModalContactForm/ModalContactForm"
import InlineButton from "../components/InlineButton"

const Home = ({ data, location }) => {
  const [showFrom, setShowForm] = useState(location.search === "?contact-form")

  const works = data.works.nodes
  const contactEmail = data.site.siteMetadata.adminEmail

  return (
    <Layout
      location={location}
      title="Audio Agency"
      description="• Music Composing • Sound Design • Voice Casting for games, brands, videos, and other media projects. ✔ We create audio that works for your audience. 0 broken deadlines. Millions of listeners."
    >
      <Hero link="/en/portfolio" />
      <About
        title="VP Production"
        text="We are a team that creates music, sound effects and produces voice-overs on the verge of pure creativity and functionality."
        linkLabel="About us"
        linkURL="/en/about"
        alt="Sound design studio"
      />
      <Why>
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
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={`mailto:${contactEmail}`}
          >
            email us
          </a>
          .
        </FeatureCard>
      </Why>
      <ModalContactForm
        title="Technical task template"
        subTitle="We are confident that a correctly made technical task increases the chances of success of the project. Therefore, we are happy to share what works for us!"
        open={showFrom}
        onClose={() => setShowForm(false)}
      />
      <Services
        title="Our services"
        services={[
          {
            title: "Music Composing",
            link: "/en/services/music-composing",
            alt: "Music Composing",
          },
          {
            title: "Audio Branding",
            link: "/en/services/audio-branding",
            alt: "Audio branding",
          },
          {
            title: "Sound Design",
            link: "/en/services/sound-design",
            alt: "Sound design",
          },
          {
            title: "Voice Casting",
            link: "/en/services/voice-casting",
            alt: "Voice over services",
          },
        ]}
      />
      <ChosenWorks
        title="Featured Works"
        works={works}
        linkLabel="Portfolio"
        linkURL="/en/portfolio"
      />
      <SectionWithText linkLabel="Our Values" link="/en/our-values">
        <h3>
          Using audio, we inspire listeners on both sides of audiovisual
          projects to live new experiences and discover their creative
          potential.
        </h3>
      </SectionWithText>
      <Contacts>
        Tell us about your project, product, or idea. Ask for advice, or get a
        full{" "}
        <a rel="noopener noreferrer" target="_blank" href={mailTo.mail.en}>
          free consultation
        </a>
        . Find out the cost, specify a vital question, well anything you want!
        We will be happy to get to know you and help.
      </Contacts>
    </Layout>
  )
}

export const query = graphql`
  query HomePageEnQuery {
    site {
      siteMetadata {
        adminEmail
      }
    }
    works: allWordpressWpWork(
      filter: {
        acf: { front_page: { front_page_visibility: { eq: true } } }
        polylang_current_lang: { eq: "en" }
      }
      sort: { fields: acf___front_page___front_page_order, order: DESC }
    ) {
      nodes {
        id
        slug
        title
        lang: polylang_current_lang
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`

export default Home
