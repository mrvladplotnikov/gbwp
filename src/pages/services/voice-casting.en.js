import React from "react"
import { graphql } from "gatsby"
import Layout from "../../layouts/uk/sidebar"
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
import PlanList from "../../components/PlanList"
import PlanCard from "../../components/PlanCard"
import StandartIcon from "../../images/plans/standart.svg"

const VoiceCasting = ({ data, location }) => {
  const reviews = data.reviews.nodes
  const sidebarImage = data.sidebarImage.childImageSharp.fluid
  return (
    <Layout
      Sidebar={
        <Sidebar
          title="Voice casting"
          text="В современном мире бренды должны относиться к звуку с той же тщательностью и дисциплиной, что и к графическим стандартам и визуальному построению бренда. Если вы застряли в мире исключительно визуального брендинга, то соревнуетесь вы с одной завязанной за спиной рукой."
          autor="Лоуренс Мински, Коллин Фэйхи"
          image={sidebarImage}
        />
      }
      location={location}
    >
      <ServiceHero>
        <h3>
          We like to think of the human voice as the perfect musical instrument.
        </h3>
        <p>
          We do not know any other instrument that reveals the message of the
          author, convey the whole spectrum of emotions, and the elusive nuances
          of mood in such an accurate way. And if vocals are one of the crucial
          elements of music, then voice acting is an independent art form.
        </p>
        <p>
          The correct voice-over is not just a recitation of the necessary text
          with a well-set voice. It is more about managing the attention of the
          listener, revealing the characters, and creating an atmosphere. The
          right voice is what makes people listen and believe what they hear.
        </p>
      </ServiceHero>
      <ServiceSection title="What are we doing?">
        <p>In short, we produce voice-overs, and specifically deal with the:</p>

        <ServiceIconList>
          <ServiceIcon title="Casting voice actors" icon={GamesIcon} />
          <ServiceIcon
            title="Organization of the recording process and project management"
            icon={GamesIcon}
          />
          <ServiceIcon title="Processing audio files" icon={GamesIcon} />
        </ServiceIconList>
      </ServiceSection>
      <ServiceSection title="Our works">
        <p>
          Over the years, we have formed a base of voice talents. Each of them
          is a carrier of a wide variety of languages ​​and accents, timbres,
          and intonations. You can hear it for yourself, a complete playlist
          with examples of actors’ voices is below.
        </p>
        <iframe
          title="Example of voice acting"
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/303617614%3Fsecret_token%3Ds-Vofl0&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
      </ServiceSection>
      <ServiceSection title="What is the process like?">
        <p>
          Over the past few years, we have developed a simple framework for
          cooperation. So that at each stage, you will understand what is
          happening, and you will have control over the process. And at that
          time, we could provide the necessary voice-overs for your project.
        </p>
        <p>There are only six stages:</p>
        <StyledAccordion>
          <StyledAccordionItem title="Acquaintance">
            <p>
              you write to us and get a free consultation in a convenient form
              so that we learn about your project. In this way, we get to know
              each other and understand if we are ready to cooperate. We need to
              match with the client in the general vision and principles of
              work.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Preparation">
            <p>
              at this stage, you create the technical task. It should be in the
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
              together we sign a contract, you send us a full prepayment for the
              project, we sign a contract with the actor and transfer the script
              to him or her.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Production">
            <p>
              the voice talent sends us a complete record, we check it for
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
              після всіх погоджень ми висилаємо вам кінцеві файли. Цей момент —
              останній шанс скористатися безплатними правками.
            </p>
            <p>Коли все готово, ми з вами підписуємо Акт прийому-передачі.</p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Support">
            <p>
              найчастіше цей етап потрібен для ігрових «довгобудів» або
              випадків, коли обраний актор озвучує персонажів для подальших
              релізів.
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
            icon={StandartIcon}
            subTitle="Available languages"
            list={["Ukrainian", "Russian", "English"]}
          />
          <PlanCard
            title="Foreign voice actors"
            icon={StandartIcon}
            subTitle="Available languages"
            list={["English", "German", "French", "Spanish", "Chinese"]}
          />
        </PlanList>
        <p>
          If you did not find the language you need in the list of available
          languages, be sure to email us, and we will provide you the right
          talent.
        </p>
      </ServiceSection>
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