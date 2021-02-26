import React from "react"

import SEO from "~components/seo"
import HomeLayoutHeader from "~components/HomeLayoutHeader"
import Footer from "~components/Footer"

const HomeLayout = ({
  title = "",
  description = "",
  disableSiteNameInTitle = false,
  children,
}) => {
  return (
    <>
      <SEO
        title={title}
        description={description}
        disableSiteNameInTitle={disableSiteNameInTitle}
      />

      <HomeLayoutHeader />
      <div className="page-content">
        {children}

        <Footer />
      </div>
    </>
  )
}

HomeLayout.propTypes = {}

export default HomeLayout
