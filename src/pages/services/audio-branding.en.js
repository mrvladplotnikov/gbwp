import React from "react"
import { graphql } from "gatsby"
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

import FemaleIcon from "../../images/service-icons/female.svg"
import JingleIcon from "../../images/service-icons/jingle.svg"
import AudioIcon from "../../images/service-icons/audio.svg"
import PhoneIcon from "../../images/service-icons/phone.svg"
import SoundIcon from "../../images/service-icons/sound.svg"

const AudioBranding = ({ data, location }) => {
  const reviews = data.reviews.nodes
  const sidebarImage = data.sidebarImage.childImageSharp.fluid
  const works = data.works.nodes

  return (
    <Layout
      Sidebar={
        <Sidebar
          title="Audio Branding"
          text="В современном мире бренды должны относиться к звуку с той же тщательностью и дисциплиной, что и к графическим стандартам и визуальному построению бренда. Если вы застряли в мире исключительно визуального брендинга, то соревнуетесь вы с одной завязанной за спиной рукой."
          autor="Лоуренс Мински, Коллин Фэйхи"
          image={sidebarImage}
        />
      }
      location={location}
    >
      <ServiceHero>
        <h3>
          For people who create sound, we are too fascinated by marketing.
        </h3>
        <p>
          It seems to us a kind of modern art form, very sophisticated and truly
          functional. And we love to create something that is on the verge of
          pure creativity and functionality, so we started to develop audio
          branding.
        </p>
        <p>
          The potential of sound is often not fully utilized to support brands,
          and we want to change that. After all, the right audio brand helps to
          build the necessary associations within the consumers’ minds and
          strengthens their connection with the product or company. It will
          become what makes a person instantly recognize your brand, even if he
          or she has not yet seen it.
        </p>
      </ServiceHero>
      <ServiceSection title="What are we doing?">
        <p>We create:</p>

        <ServiceIconList>
          <ServiceIcon title="Image music" icon={FemaleIcon} />
          <ServiceIcon title="Jingles and music logos" icon={JingleIcon} />
          <ServiceIcon title="Audio advertising" icon={AudioIcon} />
          <ServiceIcon title="Sound identity for the apps" icon={PhoneIcon} />
          <ServiceIcon
            title="Other audio contact points with a customer"
            icon={SoundIcon}
          />
        </ServiceIconList>

        <p>
          Each audio brand is unique, as is the brand itself. Each business has
          its own needs, and there is no universal formula and composition of
          the audio brand. Therefore, for each project, we create a personal set
          of elements depending on the tasks that need to be solved.
        </p>
      </ServiceSection>
      <ServiceSection title="Our works" noGatters>
        <WorkCards works={works} />
      </ServiceSection>
      <ServiceSection title="What is the process like?">
        <p>
          Over the past few years, we have developed a simple framework for
          cooperation. So that at each stage, you will understand what is
          happening, and you will have control over the process. And at the same
          time, we can create the right sound for your brand.
        </p>
        <p>There are only six stages:</p>
        <StyledAccordion>
          <StyledAccordionItem title="Acquaintance">
            <p>
              You write to us and get a free consultation in a convenient form
              so that we learn about your brand. In this way, we get to know
              each other and understand if we are ready to cooperate. We need to
              match with the client in the general vision and principles of
              work.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Preparation">
            <p>
              At this stage, we study up your brand; you tell us about your
              marketing activities, and together we determine the role and
              significance of the future audio brand. At the same time, we
              prepare a contract with lawyers. We discuss and coordinate
              everything with you and proceed to the next stage.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Launch">
            <p>
              Together, we sign a contract, and you send us an advance payment,
              then we proceed to the sketches. It can be a sketch of a melody or
              several sounds — it depends on what elements we should develop.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Production">
            <p>
              This stage is the most crucial. We send you demos and get feedback
              from you. Here you will need maximum concentration on the process
              because the fate of the entire audio brand depends on your
              opinion.
            </p>
            <p>
              Based on the feedback, we refine the necessary elements and move
              on to the next stage.
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
              if in the future, your brand has new points of contact with the
              audience which need sound, we will help you. We are always happy
              for long-term cooperation.
            </p>
          </StyledAccordionItem>
        </StyledAccordion>
      </ServiceSection>

      <ServiceSection title="Cost">
        <p>
          The cost of developing an audio brand depends on the set of elements
          that you need to get as a result. Email us and tell about your brand
          and its needs, and we will notify you of what needs to be done and how
          much it costs.
        </p>
      </ServiceSection>
      <ServiceSection title="Our approach">
        <CardDeck>
          <CardDeckItem variant="rect" textAlign="left">
            We consider creating a unique sound for your brand and making it as
            informative as possible our main task. We aim to fit the whole
            brand’s essence into the sound and correctly direct it to influence
            the emotions of your consumer the way you need it.
          </CardDeckItem>
          <CardDeckItem variant="full-waves" textAlign="left">
            We think about not only how, but where and when your brand will
            sound. Initially, we create an image track or jingle that determines
            what all the other elements of the audio brand will sound like.
            Often the jingle transforms into a variety of forms, even into the
            sound of notifications on the phone.
          </CardDeckItem>
          <CardDeckItem variant="waves" textAlign="left">
            We carefully study your brand, get into the very depths of your
            marketing kit, and ask many questions. :) And we are always happy if
            you have your focus group or the ability to conduct tests on the
            target audience. Thanks to this, we can create the sound you need
            even more precisely.
          </CardDeckItem>
          <CardDeckItem variant="rect-revers" textAlign="center">
            But it would be best if you certainly were prepared for the fact
            that we need some creative freedom. Because music and sound are art
            forms, after all, and should go beyond a rigid framework. At some
            point, you will have to trust us so we can find a voice for your
            brand.
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
  query AudioBrandingEnPageQuery {
    reviews: allWordpressWpClientReview(
      filter: { polylang_current_lang: { eq: "en" } }
      limit: 5
    ) {
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
    sidebarImage: file(relativePath: { eq: "services/audio-branding.jpg" }) {
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

export default AudioBranding
