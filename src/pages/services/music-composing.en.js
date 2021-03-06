import React, { useState } from "react"
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
import PlanList from "../../components/PlanList"
import PlanCard from "../../components/PlanCard"
import ReviewCarousel from "../../components/ReviewCarousel/ReviewCarousel"
import CardDeck from "../../components/CardDeck/CardDeck"
import CardDeckItem from "../../components/CardDeckItem/CardDeckItem"

import StandartIcon from "../../images/plans/standart.svg"
import SoftIcon from "../../images/plans/soft.svg"
import SosIcon from "../../images/plans/sos.svg"
import PremiumIcon from "../../images/plans/premium.svg"

import GamesIcon from "../../images/service-icons/games.svg"
import AudioIcon from "../../images/service-icons/audio.svg"
import FilmIcon from "../../images/service-icons/film.svg"
import MonsterIcon from "../../images/service-icons/monster.svg"
import PlayerIcon from "../../images/service-icons/player-2.svg"
import MasksIcon from "../../images/service-icons/masks.svg"

import mailTo from "../../utils/mailTo"
import { seoDefaultData } from "../../utils/seo"
import ModalContactForm from "../../components/ModalContactForm/ModalContactForm"

const MusicCreation = ({ data, location }) => {
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
  const { seo } = data.seoPagesData ?? { seo: seoDefaultData }

  return (
    <Layout
      Sidebar={
        <Sidebar
          title="Music Composing"
          text="Where words are powerless, shows up the more expressive language — music."
          autor="Peter Tchaikovsky"
          image={sidebarImage}
        />
      }
      ServiceHero={
        <ServiceHero>
          <h3>We love music mostly because of its potential.</h3>
          <p>
            After all, this is the most potent form of art if we compare them
            all by their emotional impact. Do you know how one song can entirely
            change your mood?
          </p>
          <p>
            Just a couple of notes, the correct rhythmic pattern, and a person
            is now ready for great deals. And then you slightly change the
            arrangement, and the very same person is now suddenly all in sad
            memories. It fascinates and captures us, and makes us do what we do
            every day. Listen, study and, ultimately, compose music.
          </p>
        </ServiceHero>
      }
      location={location}
      title={seo.title}
      disableSiteNameInTitle
      description={seo.description}
    >
      <ServiceSection title="What are we doing?">
        <p>We compose soundtracks and create music for:</p>
        <ServiceIconList>
          <ServiceIcon
            title="Games"
            icon={GamesIcon}
            alt="Composing music for video games"
          />
          <ServiceIcon
            title="Brands and commercials"
            icon={AudioIcon}
            alt="Composing music for animation"
          />
          <ServiceIcon
            title="Films"
            icon={FilmIcon}
            alt="Composing music for film"
          />
          <ServiceIcon
            title="Animated films/cartoons"
            icon={MonsterIcon}
            alt="Composing music for cartoons"
          />
          <ServiceIcon
            title="Trailers"
            icon={PlayerIcon}
            alt="Composing trailer music"
          />
          <ServiceIcon
            title="Theatre"
            icon={MasksIcon}
            alt="Composing music for theatres"
          />
        </ServiceIconList>
        <p>
          We also create music for motion graphics, but it relates more to sound
          design so that you can read about it{" "}
          <Link to="/en/works/audio-for-motion-design">here</Link>.
        </p>
        <p>
          We do not compose backing tracks and songs for corporate parties. But
          we do write corporate anthems — you can read more about it{" "}
          <Link to="/en/services/audio-branding">here</Link>.
        </p>
      </ServiceSection>
      <ServiceSection title="Our Best Soundtracks">
        <iframe
          title="Our Best Soundtracks"
          width="100%"
          height="450"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/174940453&color=%23f23b0d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </ServiceSection>
      <ServiceSection title="What is the process like?">
        <p>
          Over the past few years, we have developed a simple framework for
          cooperation. So that at each stage, you will understand what is
          happening, and you will have control over the process. And at the same
          time, we can create precisely the music that your project needs.
        </p>
        <p>There are only six stages:</p>
        <StyledAccordion>
          <StyledAccordionItem title="Acquaintance">
            <p>
              You fill out a brief and get a{" "}
              <a
                rel="nofollow noopener noreferrer"
                target="_blank"
                href={mailTo.mail.en}
              >
                free consultation
              </a>
              . We will get to know each other and understand if we are ready to
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
              {" "}
              At the same time, we select references for the future track and
              prepare a contract with lawyers. We discuss and coordinate
              everything with you and proceed to the next stage.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Launch">
            <p>
              Together, we sign a contract, and you send us an advance payment,
              then we proceed to the sketches. We usually create them in the
              form of a 30-second demo of the main theme of the track.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Production">
            <p>
              This stage is the most crucial. We send you demos and get feedback
              from you. Here you will need maximum concentration on the process
              because the fate of the composition depends on your wishes. We
              modify the track according to the proposals and send it back to
              you for approval.
            </p>
            <p>
              Depending on the selected service package, you may have up to 5
              free edits per track.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Project acceptance">
            <p>
              After all approvals, we send you the final file with the track.
              This moment is the last chance to take advantage of free edits.
            </p>
            <p>
              When everything is ready, together, we sign the Acceptance
              Certificate, and you send us the second part of the payment if
              this is needed depending on the selected service package.
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
      </ServiceSection>

      <ServiceSection title="Our offers">
        <p style={{ marginBottom: 60 }}>
          Apart from an easy-to-understand cooperation framework, we also
          developed some easy-to-understand music composing packages. We
          analyzed the experience of previous projects and clients' reviews. We
          realized that this would be a much easier way for you to choose the
          suitable option for your project.
        </p>

        <PlanList
          label="All offers"
          onClick={() =>
            handleFormShow(
              "Compare packages",
              "Please leave us your email, and we will gladly send you the cost of all our music composing packages.",
              "all"
            )
          }
        >
          <PlanCard
            width="auto"
            title="Standard"
            icon={StandartIcon}
            subTitle="The naming is boring, the package is cool"
            list={[
              "completion — up to 7 business days",
              "five free edits",
              "50% prepayment",
            ]}
            onClick={() =>
              handleFormShow(
                "Standard package",
                "Great choice! Our standard never fails. Please leave us your email, and we will gladly send you the comparison of this package cost with others.",
                "standart"
              )
            }
          />
          <PlanCard
            width="auto"
            title="Soft Launch"
            icon={SoftIcon}
            subTitle="Testing your hypotheses"
            list={[
              "track duration — 30 sec",
              "completion — up to 5 business days",
              "five free edits",
              "50% prepayment",
              "upon further ordering of Standard / Premium packages for the same track, Soft Launch price is included",
            ]}
            onClick={() =>
              handleFormShow(
                "Soft Launch Package",
                "Who says it is boring to play it safe? We do not agree with that person, and therefore developed a proposal specifically for Soft Launch. Please leave us your email, and we will gladly send you the comparison of this package cost with others.",
                "soft-launch"
              )
            }
          />
          <PlanCard
            width="auto"
            title="S.O.S"
            icon={SosIcon}
            subTitle="When everything is burning"
            list={["completion — ASAP", "no edits", "full prepayment"]}
            onClick={() =>
              handleFormShow(
                "S.O.S Package",
                "If all the jokes about burning deadlines are not jokes for you, then right now, you have made the right choice! Please leave us your email, and we will gladly send you the comparison of this package cost with others.",
                "s-o-s"
              )
            }
          />
          <PlanCard
            width="auto"
            title="Premium"
            icon={PremiumIcon}
            subTitle="Yes, you're on a horse"
            list={["completion — ASAP", "five free edits", "50% prepayment"]}
            onClick={() =>
              handleFormShow(
                "Premium Package",
                "They say it’s impossible to get everything at once. But we made an effort and prepared such a proposal. Please leave us your email, and we will gladly send you the comparison of this package cost with others.",
                "premium"
              )
            }
          />
        </PlanList>
      </ServiceSection>
      <ModalContactForm
        title={formTitle}
        type="music"
        subTitle={formSubTitle}
        customLocation={formKey}
        open={showForm}
        onClose={handleFormClose}
      />
      <ServiceSection title="Our approach">
        <CardDeck>
          <CardDeckItem variant="rect" textAlign="left">
            Many people consider the music composing to be something
            incomprehensible and mysterious. Some people think that the whole
            thing is solely in technology and proper methodology. It seems to us
            that, over the years of practice, we have finally come closer to
            understanding how everything works.
          </CardDeckItem>
          <CardDeckItem variant="full-waves" textAlign="left">
            There is such a thing as pure inspiration. This state is familiar to
            everyone. It feels like someone else creates something cool with
            your hands: a song, a picture, a poem, or something else. An
            incredible and rare experience, clearly not suitable for work. :)
          </CardDeckItem>
          <CardDeckItem variant="waves" textAlign="left">
            Another thing is a methodical approach. You take all the accumulated
            theoretical knowledge and transform it into a piece of music.
            Obviously, according to all the rules and techniques. Reliable and…
            boring. Such music does not catch your attention because, most
            often, this approach is initially devoid of emotion.
          </CardDeckItem>
          <CardDeckItem variant="rect-revers" textAlign="center">
            We found a balance. It's all about the «planning» of inspiration.
          </CardDeckItem>
          <CardDeckItem variant="full-waves" textAlign="center">
            When we begin to work on a project, we find out as much as possible
            about it. We learn about its atmosphere, mood, message. We study the
            target audience and its interests. We even ask about the client's
            thoughts on the product. The more information we gather, the better
            it will transform into the idea and emotion of the soundtrack inside
            the composer's subconscious mind.
          </CardDeckItem>
          <CardDeckItem variant="waves-revers" textAlign="center">
            And after that, it is a matter of technology. We take the «core» and
            build the rest of the composition around it.
          </CardDeckItem>
          <CardDeckItem variant="circle" textAlign="center">
            Creatively and reliably.
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
          . Find out the rates, clarify a vital question, well anything you
          want! We will be happy to get to know you and help.
        </ContactUs>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query MusicCreationENPageQuery {
    seoPagesData: wordpressWpCustomPage(
      polylang_current_lang: { eq: "en" }
      acf: { page_slug: { eq: "services/music-composing" } }
    ) {
      ...seoPageData
    }
    reviews: allWordpressWpClientReview(
      limit: 5
      filter: {
        acf: { music_composing: { music_composing_visibility: { eq: true } } }
        polylang_current_lang: { eq: "en" }
      }
      sort: {
        fields: acf___music_composing___music_composing_order
        order: DESC
      }
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
    sidebarImage: file(relativePath: { eq: "services/music-creation.jpg" }) {
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

export default MusicCreation
