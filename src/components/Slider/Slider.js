import React, { useEffect, useState, useRef } from "react"
import classnames from "classnames"
import PropTypes from "prop-types"
import Glide from "@glidejs/glide"

import "./core.scss"
import styles from "./styles.module.scss"
import Item from "./Item"
import Controls from "./Controls"

const Slider = ({
  id,
  type = "carousel",
  before = 0,
  after = 0,
  perView = 4,
  focusAt = "center",
  breakpoints = {},
  gap = 10,
  children,
  ...props
}) => {
  const slidesCount = React.Children.count(children)

  const sliderRef = useRef(
    new Glide(`#${id}`, {
      perView: slidesCount <= perView ? slidesCount : perView,
      peek: { before, after },
      type,
      focusAt,
      breakpoints,
      gap,
    })
  )

  const [slideIndex, setSlideIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(0)

  useEffect(() => {
    const slider = sliderRef.current

    const onSliderRunHandler = () => {
      setSlideIndex(slider.index)
    }

    const onSliderResizeHandler = () => {
      setSlidesToShow(
        slidesCount <= slider.settings.perView
          ? slidesCount
          : slider.settings.perView
      )
    }

    slider.on("run", onSliderRunHandler)

    setSlidesToShow(
      slidesCount <= slider.settings.perView
        ? slidesCount
        : slider.settings.perView
    )

    slider.on("resize", onSliderResizeHandler)

    slider.mount()
  }, [slidesCount])

  useEffect(() => {
    if (slidesCount === slidesToShow) {
      sliderRef.current.disable()
    } else {
      sliderRef.current.enable()
    }
  }, [slidesCount, slidesToShow])

  return (
    <div id={id} className={classnames(styles.slider, "glide")} {...props}>
      <div
        className={classnames("glide__track", {
          [styles.track]: type !== "carousel",
        })}
        data-glide-el="track"
      >
        <ul className={classnames(styles.slides, "glide__slides")}>
          {React.Children.map(children, ({ props }, i) => {
            return <Item key={i} {...props} />
          })}
        </ul>
      </div>

      {slidesCount !== slidesToShow && (
        <Controls index={slideIndex} total={slidesCount} />
      )}
    </div>
  )
}

Slider.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["slider", "carousel"]),
  before: PropTypes.number,
  after: PropTypes.number,
  focusAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  perView: PropTypes.number,
  gap: PropTypes.number,
  breakpoints: PropTypes.object,
  children: PropTypes.node.isRequired,
}

export default Slider
