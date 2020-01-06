import React from "react"
import { graphql } from "gatsby"
import Layout from "../../layouts/en/sidebar"
import ServiceHero from "../../components/ServiceHero"
import ContactUs from "../../components/ContactUs"
import Sidebar from "../../components/Sidebar"
import ServiceSection from "../../components/ServiceSection"
import ServiceIconList from "../../components/ServiceIconList"
import ServiceIcon from "../../components/ServiceIcon"
import GamesIcon from "../../images/service-icons/games.svg"
import StyledAccordion from "../../components/StyledAccordion"
import StyledAccordionItem from "../../components/StyledAccordionItem"
import ReviewCarousel from "../../components/ReviewCarousel/ReviewCarousel"
import CardDeck from "../../components/CardDeck/CardDeck"
import CardDeckItem from "../../components/CardDeckItem/CardDeckItem"
import WorkCardsList from "../../components/WorkCardsList"

const SoundDesign = ({ data, location }) => {
  const reviews = data.reviews.nodes
  const sidebarImage = data.sidebarImage.childImageSharp.fluid
  const works = data.works.nodes

  return (
    <Layout
      Sidebar={
        <Sidebar
          title="Sound Design"
          text="В современном мире бренды должны относиться к звуку с той же тщательностью и дисциплиной, что и к графическим стандартам и визуальному построению бренда. Если вы застряли в мире исключительно визуального брендинга, то соревнуетесь вы с одной завязанной за спиной рукой."
          autor="Лоуренс Мински, Коллин Фэйхи"
          image={sidebarImage}
        />
      }
      location={location}
    >
      <ServiceHero>
        <h3>
          If music is art, then the sound is a way of transmitting information
          in the first place.
        </h3>
        <p>
          Moreover, it’s one of the oldest ones. But this does not mean that
          music is only emotional, and sound is only informative. A short sound
          indeed can be emotional and directly affect a person’s emotions, just
          like music does.
        </p>
        <p>
          Whether we want it or not, an alarming sound will make us wary. And
          for this kind of thing, we love sound design. For how he transforms
          any picture, adds life to it, helps the viewer to believe what is
          happening. Magic itself!
        </p>
      </ServiceHero>
      <ServiceSection title="What are we doing?">
        <p>We create:</p>

        <ServiceIconList>
          <ServiceIcon
            title="Sound effects for any media project"
            icon={GamesIcon}
          />
          <ServiceIcon
            title="Sound design for motion design"
            icon={GamesIcon}
          />
          <ServiceIcon
            title="Sound design of the space (quest rooms, installations)"
            icon={GamesIcon}
          />
        </ServiceIconList>

        <p>
          We carefully synthesize, record, and process the sounds so that they
          suit your project and fulfill their function.
        </p>
        <p>
          We also create atmospheric ambients and quickly turn music into one of
          the elements of sound design. The latter is relevant for motion design
          when music and sounds intertwine and complement each other so that the
          picture looks as cool as possible.
        </p>
      </ServiceSection>
      <ServiceSection title="Our works">
        <WorkCardsList works={works} />
      </ServiceSection>
      <ServiceSection title="What is the process like?">
        <p>
          Over the past few years, we have developed a simple framework for
          cooperation. So that at each stage, you will understand what is
          happening, and you will have control over the process. And at the same
          time, we could create the right sound design for your project.
        </p>
        <p>There are only six stages:</p>
        <StyledAccordion>
          <StyledAccordionItem title="Acquaintance">
            <p>
              You write to us and get a free consultation in a convenient form
              so that we learn about your project. In this way, we get to know
              each other and understand if we are ready to cooperate. We need to
              match with the client in the general vision and principles of work
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Preparation">
            <p>
              t this stage, you create the technical task, and we help you with
              this if needed. You can read about why we do not do the technical
              task by ourselves here.
            </p>
            <p>
              At the same time, we select sound style references and prepare a
              contract with lawyers. We discuss and coordinate everything with
              you and proceed to the next stage.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Launch">
            <p>
              Together, we sign a contract, and you send us an advance payment,
              then we proceed to the sketches. Usually, these are 3–4 sounds
              that reflect the overall style of sound design.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Production">
            <p>
              This stage is the most crucial. We send you demos and get feedback
              from you. Here you will need maximum concentration on the process
              because the fate of the entire project’s sound design depends on
              your wishes.
            </p>
            <p>
              Based on your thoughts and suggestions, we create the rest of the
              sounds and send you for approval. You will have the opportunity to
              make up to three free edits for each sound effect.
            </p>
            <p>
              For game projects, we also implement sounds into the project using
              the Wwise and Fmod audio engines at this stage.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Project acceptance">
            <p>
              After all approvals, we send you the final files. This moment is
              the last chance to take advantage of free edits.
            </p>
            <p>
              When everything is ready, together, we sign the Acceptance
              Certificate, and you send us the second part of the payment.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Support">
            <p>
              Most often, this stage is needed for the big game projects and is
              negotiated separately. We will only say that we are always happy
              for long-term cooperation.
            </p>
          </StyledAccordionItem>
        </StyledAccordion>
        <p>
          At the end of each project, we carefully listen to how everything
          sounds and works together. If necessary, we adjust the volume,
          attenuation, and other aspects, or tell you how to do it yourself.
        </p>
      </ServiceSection>

      <ServiceSection title="Cost">
        <p>The total cost of the project depends on the scope of work.</p>
        <p>
          For all sound effects and ambients, we have a fixed price that is
          multiplied by the amount you need for your project. Implementation, if
          necessary, is calculated separately.
        </p>
        <p>
          As for motion-design videos’ sound design, the cost is calculated
          differently: here, the complexity of the picture and the duration of
          the video are taken into account.
        </p>
        <p>
          Please email us to find out the exact cost of sound design for your
          specific project.
        </p>
      </ServiceSection>
      <ServiceSection title="Our approach">
        <CardDeck>
          <CardDeckItem variant="rect" textAlign="left">
            We consider sound design to be functional art, a space for searching
            and experimenting, and a crucial part of any media project. We
            approach the creation of music with «all our heart,» but the sound
            design we approach with pragmatism and imagination.
          </CardDeckItem>
          <CardDeckItem variant="full-waves" textAlign="left">
            For us, it is essential to make each element sound in such a way so
            that the listener does not have doubts that this is a «native»
            sound. We create each effect with the thought of the feelings that
            it should evoke in a person.
          </CardDeckItem>
          <CardDeckItem variant="waves" textAlign="left">
            Will sound stress out the listener? Or will it make him or her feel
            relieved? Or warn about something? We think through every detail,
            especially how all sounds will sound together. How will they
            interact with each other and with the general background: ambient or
            music.
          </CardDeckItem>
          <CardDeckItem variant="rect-revers" textAlign="center">
            For game projects, we implement sounds using Wwise and Fmod so that
            together, we will be sure in the final sound. We adjust the volume,
            the number of simultaneous reproductions, randomization, the
            variability of assets, and other essential aspects.
          </CardDeckItem>
        </CardDeck>
      </ServiceSection>
      <ServiceSection title="Customer reviews">
        <ReviewCarousel reviews={reviews} />
      </ServiceSection>
      <div className="contact-us-wrapper">
        <ContactUs />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query SoundDesignEnPageQuery {
    reviews: allWordpressWpClientReview {
      nodes {
        id
        title
        content
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 249, srcSetBreakpoints: [445, 900]) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        meta: acf {
          company
          position
        }
      }
    }
    works: allWordpressWpWork(
      limit: 10
      filter: { polylang_current_lang: { eq: "uk" } }
    ) {
      nodes {
        id
        slug
        title
        lang: polylang_current_lang
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 249, srcSetBreakpoints: [445, 900], quality: 95) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    sidebarImage: file(relativePath: { eq: "services/sound-design.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sitePage {
      id
      path
    }
  }
`

export default SoundDesign