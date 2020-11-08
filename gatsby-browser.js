/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { IconContext } from "react-icons"

import Router from "./router-config"
import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => (
  <IconContext.Provider value={{ className: "react-icons" }}>
    <Router>{element}</Router>
  </IconContext.Provider>
)

// TODO: Disabled because can't work with gatsby
// export const onClientEntry = () => {
//   // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
//   if (typeof window.IntersectionObserver === `undefined`) {
//     import(`intersection-observer`)
//     console.log(`# IntersectionObserver is polyfilled!`)
//   }
// }
