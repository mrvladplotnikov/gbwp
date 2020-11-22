import React, { useState } from "react"
import styles from "./styles.module.css"
import Layout from "../../layouts/en/default"
import Contacts from "../../components/lendingSections/Contacts"
import Headline from "../../components/Headline"
import { Inner } from "../../components/Container"
import StyledAccordion from "../../components/StyledAccordion"
import StyledAccordionItem from "../../components/StyledAccordionItem"
import boxOfDotsLink from "../../images/icon-box.svg"
import classNames from "classnames"

import mailTo from "../../utils/mailTo"
import ModalContactForm from "../../components/ModalContactForm/ModalContactForm"
import InlineButton from "../../components/InlineButton"
import { Link, graphql } from "gatsby"
import schemaOrg from "./schemaOrg.json"
import { seoDefaultData } from "../../utils/seo"

const Boxes = ({ className = "" }) => (
  <img
    className={classNames(styles.box, className)}
    src={boxOfDotsLink}
    role="presentation"
    alt=""
  />
)

const Faq = ({ data, location }) => {
  const [showFrom, setShowForm] = useState(false)
  const contactEmail = data.site.siteMetadata.adminEmail
  const { seo } = data.seoPagesData ?? { seo: seoDefaultData }

  return (
    <Layout
      location={location}
      title={seo.title}
      disableSiteNameInTitle
      description={seo.description}
      schemaOrg={schemaOrg.en}
    >
      <Inner>
        <Headline Tag="h1" className={styles.title}>
          faq
        </Headline>

        <Boxes className={styles.boxFirst} />

        <Boxes className={styles.boxSecond} />

        <Headline Tag="h2" className={styles.subtitle}>
          Organizational questions
        </Headline>
        <StyledAccordion className={styles.accordeon}>
          <StyledAccordionItem title="What do you need to get started?">
            <p>
              First of all, we need to get to know you and your project. To do
              this, you fill out a brief, and we conduct a{" "}
              <a
                rel="nofollow noopener noreferrer"
                target="_blank"
                href={mailTo.mail.en}
              >
                free consultation
              </a>{" "}
              for you. If everything is good, it remains only to prepare the
              technical task and sign the contract.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="What if my project is under the NDA?">
            <p>
              You can{" "}
              <a
                rel="nofollow noopener noreferrer"
                target="_blank"
                href={`maito:${contactEmail}`}
              >
                email us
              </a>
              , we will sign all the documents needed, and we will be able to
              discuss everything freely.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Do you do test tasks?">
            <p>
              Of course, we carry out test tasks, but at the standard cost of
              services.
            </p>

            <p>
              We believe that the format of the free test tasks makes the
              performer focus not on the needs of the project, but on how to
              impress the customer. Most often, the results of such test tasks
              are not objective, and this may harm the entire project in the
              future.
            </p>

            <p>
              Nevertheless, we are ready to make an exception. For example, if
              we see an exciting indie project that appeals to us for help and
              presents itself in a great way. If this is about you — feel free
              to{" "}
              <a
                rel="nofollow noopener noreferrer"
                target="_blank"
                href={`maito:${contactEmail}`}
              >
                write to us
              </a>
              !
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Who prepares the technical task for the project?">
            <p>
              Ideally, it is a client who prepares the technical task for the
              project. In this case, both sides initially have crystal clear
              expectations from the results of cooperation. It helps to select
              the desired vector and lays a solid foundation for successful
              work.
            </p>
            <p>
              We are happy to share with you our{" "}
              <InlineButton onClick={() => setShowForm(true)}>
                fantastic template for the technical task
              </InlineButton>{" "}
              and, if necessary, help with the filling.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="How is the rest of the work process organized?">
            <p>
              Depending on the chosen service, the process may vary, although
              the main six stages remain unchanged: acquaintance, preparation,
              launch, production, project acceptance, and further support.
            </p>

            <p>
              You can read in detail how the work process is organized for each
              of our services on the following pages:{" "}
              <Link to="/en/services/music-composing">music composing</Link>,{" "}
              <Link to="/en/services/sound-design">sound design</Link>,{" "}
              <Link to="/en/services/audio-branding">audio branding</Link> and{" "}
              <Link to="/en/services/voice-casting">voice casting</Link>.
            </p>
          </StyledAccordionItem>
        </StyledAccordion>
        <ModalContactForm
          title="Technical task template"
          subTitle="We are confident that a correctly made technical task increases the chances of success of the project. Therefore, we are happy to share what works for us!"
          open={showFrom}
          onClose={() => setShowForm(false)}
        />
        <Headline Tag="h2" className={styles.subtitle}>
          Financial questions
        </Headline>

        <StyledAccordion className={styles.accordeon}>
          <StyledAccordionItem title="Do you work on a prepaid basis?">
            <p>
              Yes, we work on a prepaid basis. Most often, advance payment is 50
              % of the full amount, but in some cases, full prepayment is
              required.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="In what cases, 100 % prepayment is required?">
            <p>
              Full prepayment is required for any voice over order and in the
              case when you choose the S.O.S package for music composing.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="How can I pay for your services?">
            <p>
              We accept payments for the provided services only to the physical
              person entrepreneur (PPE) account or to the Payoneer account.
            </p>
          </StyledAccordionItem>
        </StyledAccordion>

        <Headline Tag="h2" className={styles.subtitle}>
          Legal questions
        </Headline>

        <StyledAccordion className={styles.accordeon}>
          <StyledAccordionItem title="Do you have a contract?">
            <p>
              Yes, we sign a contract for providing services with each client.
              We have a great craft contract — all thanks to the team of lawyers
              with whom we work.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="What rights to the result will I get?">
            <p>
              By default, we transfer to you all exclusive intellectual property
              rights to the sound effects, voice-overs, and audio brand elements
              we created, of course, with one condition — after you pay for our
              services.
            </p>

            <p>
              By default, we transfer to you the intellectual property rights to
              the music compositions that we created, with the restriction on
              the possibility of their free resale and re-release, outside the
              project we have agreed on, as well as monetization from streaming
              services and marketplaces.
            </p>

            <p>
              If necessary, we can transfer to you all exclusive intellectual
              property rights without any restrictions, but this should be
              discussed separately. In this case, the total cost of the project
              will be higher.
            </p>
          </StyledAccordionItem>
          <StyledAccordionItem title="Why don't you transfer all exclusive rights to the music?">
            <p>
              Sometimes soundtracks become an additional means of project
              monetization and a source of superprofits. We consider it fair
              that in such cases, the composer is entitled to additional
              compensation.
            </p>
          </StyledAccordionItem>
        </StyledAccordion>

        <Contacts>
          Did not find the answer to an essential question for you? Don't
          hesitate to ask us directly, and we will be happy to help you.
        </Contacts>
      </Inner>
    </Layout>
  )
}

export const query = graphql`
  query FAQPageEnQuery {
    site {
      siteMetadata {
        adminEmail
      }
    }
    seoPagesData: wordpressWpCustomPage(
      polylang_current_lang: { eq: "en" }
      acf: { page_slug: { eq: "faq" } }
    ) {
      ...seoPageData
    }
  }
`

export default Faq
