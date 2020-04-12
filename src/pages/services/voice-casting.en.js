import React, { useState } from "react"
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
import PlanList from "../../components/PlanList"
import PlanCard from "../../components/PlanCard"

import HouseIcon from "../../images/plans/house.svg"
import PlanetIcon from "../../images/plans/planet.svg"

import MaleIcon from "../../images/service-icons/male.svg"
import LaptopIcon from "../../images/service-icons/laptop.svg"
import FileIcon from "../../images/service-icons/file.svg"

import mailTo from "../../utils/mailTo"
import ModalContactForm from "../../components/ModalContactForm/ModalContactForm"

const VoiceCasting = ({ data, location }) => {
  const [showForm, setShowForm] = useState(false)
  const [formTitle, setFromTitle] = useState("")
  const [formSubTitle, setFromSubTitle] = useState("")
  const [formKey, setFromKey] = useState("")

  const handleFormShow = (title = "", subTitle = "", key = "") => {
    setFromTitle(title)
    setFromSubTitle(subTitle)
    setFromKey(key)
    setShowForm(true)
  }

  const handleFormClose = () => {
    setShowForm(false)

    setTimeout(() => {
      setFromTitle("")
      setFromSubTitle("")
      setFromKey("")
    }, 500)
  }

  const reviews = data.reviews.nodes
  const sidebarImage = data.sidebarImage.childImageSharp.fluid
  return (
    <Layout
      Sidebar={
        <Sidebar
          title="Voice casting"
          text="The tongue can paint what the eyes cannot see."
          autor="Chinese Proverb"
          image={sidebarImage}
        />
      }
      ServiceHero={
        <ServiceHero>
          <h3>
            We like to think of the human voice as the perfect musical
            instrument.
          </h3>
          <p>
            We do not know any other instrument that reveals the message of the
            author, convey the whole spectrum of emotions, and the elusive
            nuances of mood in such an accurate way. And if vocals are one of
            the crucial elements of music, then voice acting is an independent
            art form.
          </p>
          <p>
            The correct voice-over is not just a recitation of the necessary
            text with a well-set voice. It is more about managing the attention
            of the listener, revealing the characters, and creating an
            atmosphere. The right voice is what makes people listen and believe
            what they hear.
          </p>
        </ServiceHero>
      }
      location={location}
      title="Voice casting"
    >
      <ServiceSection title="What are we doing?">
        <p>In short, we produce voice-overs, and specifically deal with the:</p>

        <ServiceIconList align="space-evenly">
          <ServiceIcon
            title="Casting voice actors"
            icon={MaleIcon}
            style={{ maxWidth: 200 }}
          />
          <ServiceIcon
            title="Organization of the recording process and project management"
            icon={LaptopIcon}
            style={{ maxWidth: 200 }}
          />
          <ServiceIcon
            title="Processing audio files"
            icon={FileIcon}
            style={{ maxWidth: 200 }}
          />
        </ServiceIconList>
      </ServiceSection>
      <ServiceSection title="Voice Base">
        <p>
          Over the years, we have formed a base of voice talents. Each of them
          is a carrier of a wide variety of languages and accents, timbres, and
          intonations. You can hear it for yourself, a complete playlist with
          examples of actors’ voices is below.
        </p>
        <iframe
          title="Example of voice acting"
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/303617614%3Fsecret_token%3Ds-5OnLL&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </ServiceSection>
      <ServiceSection title="What is the process like?">
        <p>
          Over the past few years, we have developed a simple framework for
          cooperation. So that at each stage, you will understand what is
          happening, and you will have control over the process. And at that
          time, we can provide the necessary voice-overs for your project.
        </p>
        <p>There are only six stages:</p>
        <StyledAccordion>
          <StyledAccordionItem title="Acquaintance">
            <p>
              You write to us and get a{" "}
              <a href={mailTo.mail.en}>free consultation</a> in a convenient
              form so that we learn about your project. In this way, we get to
              know each other and understand if we are ready to cooperate. We
              need to match with the client in the general vision and principles
              of work.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Preparation">
            <p>
              At this stage, you create the technical task. It should be in the
              form of a script and have a description of voices and all
              necessary explanations for the actors.
            </p>
            <p>
              We study the document, select suitable talents, and show them to
              you. If necessary, we record test phrases to make it easier for
              you to choose the voice actor.
            </p>
            <p>
              At the same time, we prepare a contract with lawyers. We discuss
              and coordinate everything with you and proceed to the next stage.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Launch">
            <p>
              Together we sign a contract, you send us a full prepayment for the
              project, we sign a contract with the actor and transfer the script
              to him or her.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Production">
            <p>
              The voice talent sends us a complete record, we check it for
              compliance with the requirements and, if all sounds good, send it
              to you. If it seems to you that the actor has not correctly
              conveyed any intonations or general message, you can make up to
              two edits for each line of the script for free.
            </p>
            <p>
              After you are satisfied with the work of the actor, we will do the
              standard processing of the audio file. At the same stage, we can
              further process the recorded voice and add the desired effects.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Project acceptance">
            <p>
              After all approvals, we will send you the final files. This moment
              is the last chance to take advantage of free edits.
            </p>
            <p>
              When everything is ready, together, we sign the Acceptance
              Certificate.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Support">
            <p>
              Most often, this stage is needed for the big game projects or
              cases when the selected actor further voices the same characters
              and is negotiated separately.
            </p>
          </StyledAccordionItem>
        </StyledAccordion>
      </ServiceSection>

      <ServiceSection title="Cost">
        <p style={{ marginBottom: 60 }}>
          The project’s cost depends on the choice of a voice actor; basic audio
          file processing is included in the price; specific processing is
          negotiated separately.
        </p>
        <PlanList>
          <PlanCard
            title="Local voice actors"
            icon={HouseIcon}
            subTitle="Available languages"
            list={["Ukrainian", "Russian", "English"]}
            onClick={() =>
              handleFormShow(
                "Find out the cost",
                "Please leave us your email, and we will be happy to send you our voice casting offers.",
                "local-voice-casting"
              )
            }
          />
          <PlanCard
            title="Foreign voice actors"
            icon={PlanetIcon}
            subTitle="Available languages"
            list={["English", "German", "French", "Spanish", "Chinese"]}
            onClick={() =>
              handleFormShow(
                "Find out the cost",
                "Please leave us your email, and we will be happy to send you our voice casting offers.",
                "foreign-voice-casting"
              )
            }
          />
        </PlanList>
        <p>
          If you did not find the language you need in the list of available
          languages, be sure to <a href={mailTo.mail.en}>email us</a>, and we
          will provide you the right talent.
        </p>
      </ServiceSection>
      <ModalContactForm
        title={formTitle}
        subTitle={formSubTitle}
        customLocation={formKey}
        open={showForm}
        onClose={handleFormClose}
      />
      <ServiceSection title="Our approach">
        <CardDeck>
          <CardDeckItem variant="rect" textAlign="left">
            In our world, the ideal work on voice-over for your project looks
            like this: you give us the script and get a finished file with all
            the rights to it in return.
          </CardDeckItem>
          <CardDeckItem variant="full-waves" textAlign="left">
            We take care of the whole «headache.» In quotation marks, because
            there is indeed much work, but we like it.
          </CardDeckItem>
          <CardDeckItem variant="waves" textAlign="left">
            We select the voice you need for your project, organize the process,
            manage the project, and carefully monitor the quality of the result.
            We process audio files and make sure that everything sounds as it
            should. We also undertake all legal aspects and transfer to you
            exclusive intellectual property rights to all the finished material.
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
  query VoiceCastingEnPageQuery {
    reviews: allWordpressWpClientReview(
      limit: 5
      filter: {
        acf: { vice_over: { vice_over_visibility: { eq: true } } }
        polylang_current_lang: { eq: "en" }
      }
      sort: { fields: acf___vice_over___vice_over_order, order: DESC }
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
    sidebarImage: file(relativePath: { eq: "services/voice-casting.jpg" }) {
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

export default VoiceCasting
