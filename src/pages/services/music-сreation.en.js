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

const MusicCreation = ({ data, location }) => {
  const reviews = data.reviews.nodes
  const sidebarImage = data.sidebarImage.childImageSharp.fluid
  return (
    <Layout
      Sidebar={
        <Sidebar
          title="Создание музыки"
          text="При создании игр, как и при съёмке кино, звук имеет очень
большое значение. 60 или даже 70% ощущений создаётся именно за
счёт звука. При этом звук – это не только музыкальное
сопровождение, но и звуковые эффекты. Их наличие или отсутствие
очень сильно определяет атмосферу игры."
          autor="Хидео Кодзима"
          image={sidebarImage}
        />
      }
      location={location}
    >
      <ServiceHero>
        <h3>We love music mostly because of its potential.</h3>
        <p>
          After all, this is the most potent form of art if we compare them all
          by their emotional impact. Do you know how one song entirely changes
          your mood?
        </p>
        <p>
          Just a couple of notes, the correct rhythmic pattern, and a person is
          now ready for great deals. And then you slightly change the
          arrangement, and the very same person is now suddenly all in sad
          memories. It fascinates and captures us, and makes us do what we do
          every day. Listen, study and, ultimately, compose music.
        </p>
      </ServiceHero>
      <ServiceSection title="What are we doing?">
        <p>We compose soundtracks and create music for:</p>
        <ServiceIconList>
          <ServiceIcon title="Games" icon={GamesIcon} />
          <ServiceIcon title="Commercials" icon={AudioIcon} />
          <ServiceIcon title="Films" icon={FilmIcon} />
          <ServiceIcon title="Animated films/cartoons" icon={MonsterIcon} />
          <ServiceIcon title="Trailers" icon={PlayerIcon} />
          <ServiceIcon title="Theatre" icon={MasksIcon} />
        </ServiceIconList>
        <p>
          We also create music for motion design, but it relates more to sound
          design so that you can read about it here.
        </p>
        <p>
          We do not compose backing tracks and songs for corporate parties. But
          we do write corporate hymns — you can read more about it here.
        </p>
      </ServiceSection>
      <ServiceSection title="Our Best Soundtracks">
        ссылка на виджет soundcloud
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
              Acquaintance: you fill out a brief and get a free consultation. We
              will get to know each other and understand if we are ready to
              cooperate. We need to match with the client in the general vision
              and principles of work.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Preparation">
            <p>
              at this stage, you create the technical task, and we help you with
              this if needed. You can read about why we do not do the technical
              task by ourselves here. At the same time, we select references for
              the future track and prepare a contract with lawyers. We discuss
              and coordinate everything with you and proceed to the next stage.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Launch">
            <p>
              together, we sign a contract, and you send us an advance payment,
              then we proceed to the sketches. We usually create them in the
              form of a 30-second demo of the main theme of the track.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Production">
            <p>
              this stage is the most crucial. We send you demos and get feedback
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
              after all approvals, we send you the final file with the track.
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
              most often, this stage is needed for the big game projects and is
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
          analyzed the experience of previous projects, clients' reviews. We
          realized that this would be a much easier way for you to choose the
          suitable option for your project.
        </p>

        <PlanList label="All offers" onClick={() => {}}>
          <PlanCard
            title="Standart"
            icon={StandartIcon}
            subTitle="The naming is boring, the package is cool"
            list={[
              "completion — up to 7 business days",
              "five free edits",
              "50 % prepayment",
            ]}
          />
          <PlanCard
            title="Soft Launch"
            icon={SoftIcon}
            subTitle="Testing your hypotheses"
            list={[
              "track duration — 30 sec",
              "completion — up to 5 business days",
              "five free edits",
              "50 % prepayment",
              "upon further ordering of Standard / Premium packages for the same track, Soft Launch price is included",
            ]}
          />
          <PlanCard
            title="S.O.S"
            icon={SosIcon}
            subTitle="When everything is burning"
            list={["completion — ASAP", "without edits", "full prepayment"]}
          />
          <PlanCard
            title="Premium"
            icon={PremiumIcon}
            subTitle="Yes, you're on a horse"
            list={["completion — ASAP", "five free edits", "50 % prepayment"]}
          />
        </PlanList>
      </ServiceSection>
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
            everyone. It is like someone else who creates something cool with
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
  query MusicCreationENPageQuery {
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
              fluid(
                maxWidth: 250
                maxHeight: 250
                srcSetBreakpoints: [445, 900]
              ) {
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
