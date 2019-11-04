import React, { useRef } from "react"
import Layout from "../layouts"
import Hero from "../components/lendingSections/Hero"
import About from "../components/lendingSections/About"
import Why from "../components/lendingSections/Why"
import Services from "../components/lendingSections/Services"
import ChosenWorks from "../components/lendingSections/ChosenWorks"
import Contacts from "../components/lendingSections/Contacts"
import SectionWithText from "../components/SectionWithText"

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)

const Home = () => {
  const portfolioRef = useRef(null)
  const executeScroll = () => scrollToRef(portfolioRef)

  return (
    <Layout>
      <Hero onClick={executeScroll} />
      <About />
      <Why />
      <Services />
      <ChosenWorks portfolioRef={portfolioRef} />
      <SectionWithText link="/" linkLabel="Наши ценности">
        <h3>
          С помощью аудио мы вдохновляем слушателей по обе стороны медиапроектов
          на новый опыт и раскрытие собственного творческого потенциала.
        </h3>
      </SectionWithText>
      <Contacts />
    </Layout>
  )
}

export default Home
