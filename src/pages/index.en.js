import React from "react"
import { graphql } from "gatsby"
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

const Home = ({ data, location }) => {
  const works = data.works.nodes

  return (
    <Layout location={location}>
      <Hero link="/en/portfolio" />
      <About
        title="VP Production"
        text="We are a team of people who create music, sound effects and produce voice-overs on the verge of pure creativity and functionality."
        linkLabel="About us"
        linkURL="/en/about"
      />
      <Why>
        <FeatureCard img={icon1}>
          We are partners of our clients. It is the success of your specific
          project that is important to us, and not endless samey-same work.
        </FeatureCard>
        <FeatureCard img={icon2}>
          We look more in-depth than the technical task and ask many questions
          so that the final sound works for your project.
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
          were satisfied. You can check this here.
        </FeatureCard>
        <FeatureCard img={icon6}>
          How about a <a href="/">free consultation</a> or a cool{" "}
          <a href="/">technical task template</a>? We are always open to
          communication, so feel free to <a href="/">email us</a>.
        </FeatureCard>
      </Why>
      <Services
        title="Our services"
        services={[
          {
            title: "Music Creation",
            link: "/en/services/music-composing",
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
      <ChosenWorks
        title="Chosen works"
        works={works}
        linkLabel="Portfolio"
        linkURL="/en/portfolio"
      />
      <SectionWithText linkLabel="Our Values">
        <h3>
          Using audio, we inspire listeners on both sides of audiovisual
          projects to live new experiences and discover their creative
          potential.
        </h3>
      </SectionWithText>
      <Contacts />
    </Layout>
  )
}

export const query = graphql`
  query HomePageEnQuery {
    works: allWordpressWpWork(
      limit: 10
      filter: { polylang_current_lang: { eq: "en" } }
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
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default Home
