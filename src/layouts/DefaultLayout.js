import React from "react"

import SEO from "~components/seo"
import HorizontalNav from "~components/HorizontalNav"
import Footer from "~components/Footer"

const DefaultLayout = ({
  title = "",
  description = "",
  disableSiteNameInTitle = false,
  schemaOrg = [],
  children,
}) => {
  return (
    <>
      <SEO
        title={title}
        description={description}
        disableSiteNameInTitle={disableSiteNameInTitle}
        schemaOrg={schemaOrg}
      />

      <HorizontalNav />
      <div className="page-content">
        {children}

        <Footer />
      </div>
    </>
  )
}

DefaultLayout.propTypes = {}

export default DefaultLayout
