import React from "react"
import PropTypes from "prop-types"
import "./styles.css"
import Header from "../components/header"
import SEO from "../components/seo"

const DefaultLayout = ({ pageTitle, children }) => (
  <div>
    <SEO title={pageTitle} />
    <Header />
    <div>{children}</div>
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
