import React, { useState } from "react"

import HamburgerButton from "../HamburgerButton"
import NavigationDrawer from "../NavigationDrawer"

const SidebarLayoutHeader = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const handleMenuToogle = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <>
      <div className="navigation">
        <HamburgerButton isOpen={menuIsOpen} onClick={handleMenuToogle} fixed />
        <NavigationDrawer isOpen={menuIsOpen} handleOpen={handleMenuToogle} />
      </div>
    </>
  )
}

export default SidebarLayoutHeader
