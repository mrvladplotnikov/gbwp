import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import SEO from "~components/seo"
import SidebarLayoutHeader from "~components/SidebarLayoutHeader"
import Footer from "~components/Footer"

import styles from "./styles.module.scss"
import classNames from "classnames"

const SidebarLayout = ({
  title = "",
  description = "",
  disableSiteNameInTitle = false,
  schemaOrg = [],
  Sidebar,
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

      <SidebarLayoutHeader />
      <div className={classNames("page-content", styles.page)}>
        <div className={styles.sidebarLayout}>
          <aside className={styles.sidebar}>{Sidebar}</aside>
          <div className={styles.content}>
            <main className={styles.main}>{children}</main>
            <Footer disableOuterContainer />
          </div>
        </div>
      </div>
    </>
  )
}

SidebarLayout.propTypes = {
  Sidebar: PropTypes.element.isRequired,
  children: PropTypes.node.isRequired,
}

export default SidebarLayout
