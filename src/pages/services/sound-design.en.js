import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../layouts/en/sidebar"
import ServiceHero from "../../components/ServiceHero"
import ContactUs from "../../components/ContactUs"
import Sidebar from "../../components/Sidebar"
import ServiceSection from "../../components/ServiceSection"
import ServiceIconList from "../../components/ServiceIconList"
import ServiceIcon from "../../components/ServiceIcon"
import StyledAccordion from "../../components/StyledAccordion"
import StyledAccordionItem from "../../components/StyledAccordionItem"
import ReviewCarousel from "../../components/ReviewCarousel/ReviewCarousel"
import CardDeck from "../../components/CardDeck/CardDeck"
import CardDeckItem from "../../components/CardDeckItem/CardDeckItem"
import WorkCards from "../../components/WorkCards"

import PlayerIcon from "../../images/service-icons/player.svg"
import FileIcon from "../../images/service-icons/file-2.svg"
import RoomIcon from "../../images/service-icons/room.svg"

import mailTo from "../../utils/mailTo"
import Button from "~components/Button"

const SoundDesign = ({ data, location }) => {
  const reviews = data.reviews.nodes
  const sidebarImage = data.sidebarImage.childImageSharp.fluid
  const works = data.works.nodes

  return (
    <Layout
      Sidebar={
        <Sidebar
          title="Sound Design"
          text="When creating games, as when shooting a movie, the sound is significant. 60 or even 70% of sensations are created precisely due to sound. At the same time, the sound is not only musical accompaniment but also sound effects. Their presence or absence very much determines the atmosphere of the game."
          autor="Hideo Kojima"
          image={sidebarImage}
        />
      }
      ServiceHero={
        <ServiceHero>
          <h3>
            If music is art, then the sound is a way of transmitting information
            in the first place.
          </h3>
          <p>
            Moreover, it’s one of the oldest ones. But this does not mean that
            music is only emotional, and sound is only informative. A short
            sound indeed can be emotional and directly affect a person’s
            emotions, just like music does.
          </p>
          <p>
            Whether we want it or not, an alarming sound will make us wary. And
            for this kind of thing, we love sound design. For how it transforms
            any picture, adds life to it, helps the viewer to believe what is
            happening. Magic itself!
          </p>
        </ServiceHero>
      }
      location={location}
      disableSiteNameInTitle
      title="Sound Design for films, video games &#38; apps » Audio Agency » VP Production"
      description="Functional sound design. Information and the right emotions for the audience. Implementation in Unity and Unreal Engine via Wwise / Fmod. ✔ A process of cooperation. Our offers and approach. Clients’ testimonials."
    >
      <ServiceSection title="What are we doing?">
        <p>We create:</p>

        <ServiceIconList>
          <ServiceIcon
            title="Sound effects for audiovisual projects"
            icon={FileIcon}
            alt="Sound design for film"
            style={{ maxWidth: 260 }}
          />
          <ServiceIcon
            title="Sound design for motion graphics"
            icon={PlayerIcon}
            alt="Sound design for theatre"
            style={{ maxWidth: 260 }}
          />
          <ServiceIcon
            title="Sound design of the space (quest rooms, installations)"
            icon={RoomIcon}
            alt="Sound design for video games"
            style={{ maxWidth: 260 }}
          />
        </ServiceIconList>

        <p>
          We carefully synthesize, record, and process the sounds so that they
          suit your project and fulfill their function.
        </p>
        <p>
          We also create atmospheric ambients and easily turn music into one of
          the elements of sound design. The latter is relevant for{" "}
          <Link to="/en/works/audio-for-motion-design">motion design</Link> when
          music and sounds intertwine and complement each other so that the
          picture looks as cool as possible.
        </p>
      </ServiceSection>
      <ServiceSection title="Our works" noGatters>
        <WorkCards
          works={works}
          breakpoints={{
            default: 3,
            1100: 3,
            700: 3,
            500: 2,
          }}
        />
        <div className="service-works-porfolio-button-container">
          <Button
            state={{
              service: "sound-design",
            }}
            to="/en/portfolio?service=sound-design-3"
            className="service-works-porfolio-button"
          >
            Portfolio
          </Button>
        </div>
      </ServiceSection>
      <ServiceSection title="What is the process like?">
        <p>
          Over the past few years, we have developed a simple framework for
          cooperation. So that at each stage, you will understand what is
          happening, and you will have control over the process. And at the same
          time, we can create the right sound design for your project.
        </p>
        <p>There are only six stages:</p>
        <StyledAccordion>
          <StyledAccordionItem title="Acquaintance">
            <p>
              You write to us and get a{" "}
              <a
                rel="nofollow noopener noreferrer"
                target="_blank"
                href={mailTo.mail.en}
              >
                free consultation
              </a>{" "}
              in a convenient form so that we learn about your project. In this
              way, we get to know each other and understand if we are ready to
              cooperate. We need to match with the client in the general vision
              and principles of work.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Preparation">
            <p>
              At this stage, you create the technical task, and we help you with
              this if needed. You can read about why we do not do the technical
              task by ourselves <Link to="/en/faq">here</Link>.
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
          As for motion graphic videos’ sound design, the cost is calculated
          differently: here, the complexity of the picture and the duration of
          the video are taken into account.
        </p>
        <p>
          Please <a href={mailTo.soundDesign.en}>email us</a> to find out the
          exact cost of sound design for your specific project.
        </p>
      </ServiceSection>
      <ServiceSection title="Our approach">
        <CardDeck>
          <CardDeckItem variant="rect" textAlign="left">
            We consider sound design to be functional art, a space for searching
            and experimenting, and a crucial part of any media project. We
            approach the creation of music with «all our heart», but the sound
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
      <ServiceSection title="Clients’ and partners’ testimonials">
        <ReviewCarousel reviews={reviews} />
      </ServiceSection>
      <div className="contact-us-wrapper">
        <ContactUs>
          Tell us about your project, product, or idea. Ask for advice, or get a
          full{" "}
          <a
            rel="nofollow noopener noreferrer"
            target="_blank"
            href={mailTo.mail.en}
          >
            free consultation
          </a>
          . Find out the cost, specify a vital question, well anything you want!
          We will be happy to get to know you and help.
        </ContactUs>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query SoundDesignEnPageQuery {
    reviews: allWordpressWpClientReview(
      limit: 5
      filter: {
        acf: { sound_design: { sound_design_visibility: { eq: true } } }
        polylang_current_lang: { eq: "en" }
      }
      sort: { fields: acf___sound_design___sound_design_order, order: DESC }
    ) {
      nodes {
        id
        title
        content
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 250, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        meta: acf {
          company
          position
          link: s_link
        }
      }
    }
    works: allWordpressWpWork(
      filter: {
        acf: { sound_design: { sound_design_visibility: { eq: true } } }
        polylang_current_lang: { eq: "en" }
      }
      sort: { fields: acf___sound_design___sound_design_order, order: DESC }
    ) {
      nodes {
        id
        slug
        title
        lang: polylang_current_lang
        featured_media {
          localFile {
            childImageSharp {
              fluid(maxWidth: 750, quality: 100) {
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
