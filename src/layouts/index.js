import React from "react"
import PropTypes from "prop-types"
import "./styles.css"
import SEO from "../components/seo"

const DefaultLayout = ({ pageTitle, children }) => (
  <div>
    <SEO title={pageTitle} />
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
