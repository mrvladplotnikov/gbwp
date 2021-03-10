import React from "react"
import { graphql } from "gatsby"
import { Trans, useI18next, Link } from "gatsby-plugin-react-i18next"

import SidebarLayout from "../../../layouts/SidebarLayout"

import Sidebar from "~components/Sidebar"
import ServiceHero from "~components/ServiceHero"
import ServiceSection from "~components/ServiceSection"
import ServiceIconList from "~components/ServiceIconList"
import ServiceIcon from "~components/ServiceIcon"
import { getServiceIcon } from "./helpers"

const MusicComposing = ({ data }) => {
  const { t } = useI18next()
  const sidebarImage = data.sidebarImage.childImageSharp.fluid

  const services = t("mcServices", { returnObjects: true })

  return (
    <SidebarLayout
      Sidebar={
        <Sidebar
          title={t("sidebarTitle")}
          text={t("sidebarText")}
          autor={t("sidebarAutor")}
          image={sidebarImage}
        />
      }
    >
      <ServiceHero>
        <div dangerouslySetInnerHTML={{ __html: t("hero") }} />
      </ServiceHero>
      <ServiceSection title={t("servicesTitle")}>
        <p>{t("servicesSubTitle")}</p>
        <ServiceIconList>
          {services.map(service => {
            const icon = getServiceIcon(service.icon)

            return (
              <ServiceIcon
                key={service.title}
                title={service.title}
                icon={icon}
                alt={service.alt}
              />
            )
          })}
        </ServiceIconList>
        <Trans
          i18nKey="servicesDescription"
          components={{
            link1: <Link to="/works/audio-for-motion-design" />,
            link2: <Link to="/services/audio-branding" />,
          }}
        >
          <p>
            We also create music for motion graphics, but it relates more to
            sound design so that you can read about it{" "}
            <Link to="/works/audio-for-motion-design">here</Link>.
          </p>
          <p>
            We do not compose backing tracks and songs for corporate parties.
            But we do write corporate anthems — you can read more about it{" "}
            <Link to="/services/audio-branding">here</Link>.
          </p>
        </Trans>
      </ServiceSection>
      <ServiceSection title={t("soundcloudTitle")}>
        <iframe
          title={t("soundcloudTitle")}
          width="100%"
          height="450"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/174940453&color=%23f23b0d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        ></iframe>
      </ServiceSection>
    </SidebarLayout>
  )
}

export const query = graphql`
  query MusicComposingPageQuery($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    seoPagesData: wordpressWpCustomPage(
      polylang_current_lang: { eq: $language }
      acf: { page_slug: { eq: "services/music-composing" } }
    ) {
      ...seoPageData
    }
    reviews: allWordpressWpClientReview(
      limit: 5
      filter: {
        acf: { music_composing: { music_composing_visibility: { eq: true } } }
        polylang_current_lang: { eq: $language }
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

export default MusicComposing
