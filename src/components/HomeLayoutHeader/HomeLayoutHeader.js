import React, { useState } from "react"

import Languages from "../Languages"
import HamburgerButton from "../HamburgerButton"
import NavigationDrawer from "../NavigationDrawer"
import HorizontalNav from "../HorizontalNav/HorizontalNav"

import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import { CSSTransition } from "react-transition-group"

const HomeLayoutHeader = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const handleMenuToogle = () => {
    setMenuIsOpen(!menuIsOpen)
  }
  const [hideOnScroll, setHideOnScroll] = useState(false)

  useScrollPosition(
    ({ currPos }) => {
      const isShow = currPos.y <= -768
      if (isShow !== hideOnScroll) setHideOnScroll(isShow)
    },
    [hideOnScroll],
    false,
    false,
    300
  )

  return (
    <>
      <CSSTransition
        in={!hideOnScroll}
        classNames="fade-form-top"
        mountOnEnter
        unmountOnExit
        timeout={200}
      >
        <div className="navigation">
          <Languages />
          <HamburgerButton
            isOpen={menuIsOpen}
            onClick={handleMenuToogle}
            fixed
          />
          <NavigationDrawer isOpen={menuIsOpen} handleOpen={handleMenuToogle} />
        </div>
      </CSSTransition>

      <CSSTransition
        in={hideOnScroll}
        classNames="fade-form-top"
        mountOnEnter
        unmountOnExit
        timeout={200}
      >
        <HorizontalNav />
      </CSSTransition>
    </>
  )
}

export default HomeLayoutHeader
