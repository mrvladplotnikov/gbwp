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

import mailTo from "../../utils/mailTo"
import StyledLink from "../../components/StyledLink"

const AudioBranding = ({ data, location }) => {
  const reviews = data.reviews.nodes
  const sidebarImage = data.sidebarImage.childImageSharp.fluid
  const works = data.works.nodes

  return (
    <Layout
      Sidebar={
        <Sidebar
          title="Audio Branding"
          text="In today’s world, brands must now treat the sound with the same care and discipline as they do their graphic standards and visual brand-building. If you’re stuck in the visual-only branding world, you are competing with one hand tied behind your back."
          autor="Laurence Minsky, Colleen Fahey"
          image={sidebarImage}
        />
      }
      ServiceHero={
        <ServiceHero>
          <h3>
            For people who create sound, we are too fascinated by marketing.
          </h3>
          <p>
            We see it as a modern art form, very sophisticated, and truly
            functional. And we love to create something that is on the verge of
            pure creativity and functionality, so we started to develop audio
            branding.
          </p>
          <p>
            The potential of sound is often not fully utilized to support
            brands, and we want to change that. After all, the right audio brand
            helps to build the necessary associations within the consumers’
            minds and strengthens their connection with the product or company.
            It will become what makes a person instantly recognize your brand,
            even if he or she has not yet seen it.
          </p>
        </ServiceHero>
      }
      location={location}
      title="Audio Branding"
    >
      <ServiceSection title="What are we doing?">
        <p>We create:</p>

        <ServiceIconList>
          <ServiceIcon title="Audio strategies for brands" icon={FemaleIcon} />
          <ServiceIcon title="Audio logos and jingles" icon={JingleIcon} />
          <ServiceIcon
            title="Audio advertising and brand music"
            icon={AudioIcon}
          />
          <ServiceIcon title="Sound identity for the apps" icon={PhoneIcon} />
          <ServiceIcon
            title="Other audio contact points with a customer"
            icon={SoundIcon}
          />
        </ServiceIconList>

        <p>
          Each audio brand is unique, as is the brand itself. Each business has
          its own needs, and there is no universal formula and composition of
          the audio brand. Therefore, for each project, we create a personal
          strategy and a set of elements depending on which tasks need to be
          solved.
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
        <iframe
          title="Our works"
          width="100%"
          height="450"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/758338767&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
        <div className="service-works-porfolio-button-container">
          <StyledLink
            state={{
              service: "audio-branding",
            }}
            to="/en/portfolio"
            className="service-works-porfolio-button"
          >
            Portfolio
          </StyledLink>
        </div>
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
              You write to us and get a{" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={mailTo.mail.en}
              >
                free consultation
              </a>{" "}
              in a convenient form so that we learn about your brand. In this
              way, we get to know each other and understand if we are ready to
              cooperate. We need to match with the client in the general vision
              and principles of work.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Preparation">
            <p>
              At this stage, we study up your brand; you tell us about your
              marketing activities, and together we determine the role and
              significance of the future audio brand.{" "}
            </p>
            <p>
              {" "}
              At the same time, we prepare a contract with lawyers. We discuss
              and coordinate everything with you and proceed to the next stage.
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
              If in the future, your brand has new points of contact with the
              audience which need sound, we will help you. We are always happy
              for long-term cooperation.
            </p>
          </StyledAccordionItem>
        </StyledAccordion>
      </ServiceSection>

      <ServiceSection title="Cost">
        <p>
          The cost of developing an audio brand depends on the set of elements
          that you need to get as a result.{" "}
          <a href={mailTo.audioBranding.en}>Email us</a> and tell about your
          brand and its needs, and we will notify you of what needs to be done
          and how much it costs.
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
            sound. We first develop audio DNA, a central music theme that
            reflects the ideology and distinctive features of the brand. It
            defines what all other audio brand elements will sound like, meaning
            audio logo, brand tracks, jingles, app notifications, and so on.
          </CardDeckItem>
          <CardDeckItem variant="waves" textAlign="left">
            We carefully study your brand, get into the very depths of your
            marketing kit, and ask many questions. :) And we are always happy if
            you have your focus group or the ability to conduct tests on the
            target audience. Thanks to this, we can create the sound you need
            even more precisely.
          </CardDeckItem>
          <CardDeckItem variant="rect-revers" textAlign="center">
            We believe that music and sound are art forms, after all, and should
            go beyond a rigid framework. But we know how to work with them so
            that you get a potent competitive advantage at the edge of
            functionality and emotions.
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
      limit: 5
      filter: {
        acf: { audiobrending: { audiobrending_visibility: { eq: true } } }
        polylang_current_lang: { eq: "en" }
      }
      sort: { fields: acf___audiobrending___audiobrending_order, order: DESC }
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
        acf: { audiobrending: { audiobrending_visibility: { eq: true } } }
        polylang_current_lang: { eq: "en" }
      }
      sort: { fields: acf___audiobrending___audiobrending_order, order: DESC }
    ) {
      nodes {
        id
        slug
        title
        lang: polylang_current_lang
        featured_media {
          localFile {
            childImageSharp {
              fluid(
                maxWidth: 500
                srcSetBreakpoints: [445, 900]
                quality: 100
              ) {
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
