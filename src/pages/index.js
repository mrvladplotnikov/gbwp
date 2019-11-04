import React from "react"
import Layout from "../layouts"
import Hero from "../components/lendingSections/Hero"
import About from "../components/lendingSections/About"
import Why from "../components/lendingSections/Why"
import Services from "../components/lendingSections/Services"
import ChosenWorks from "../components/lendingSections/ChosenWorks"
import Contacts from "../components/lendingSections/Contacts"

const Home = () => (
  <Layout>
    <Hero />
    <About />
    <Why />
    <Services />
    <ChosenWorks />
    <Contacts />
  </Layout>
)

export default Home
