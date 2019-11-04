import React from "react"
import PropTypes from "prop-types"
import "./styles.css"
import SEO from "../components/seo"
import Footer from "../components/Footer"

const DefaultLayout = ({ pageTitle, children }) => (
  <div>
    <SEO title={pageTitle} />
    <div>{children}</div>
    <Footer />
  </div>
)

DefaultLayout.defaultProps = {
  pageTitle: "",
}

DefaultLayout.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
