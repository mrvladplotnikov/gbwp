import React from "react"

import Slider from "./Slider"

export default {
  title: "VP/Slider",
  component: Slider,
}

const SliderTemplate = args => (
  <Slider id="Slider-Template" {...args}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </Slider>
)

export const Default = SliderTemplate.bind({})

Default.args = {
  perView: 1,
  breakpoints: {
    765: {
      perView: 2,
    },
    1200: {
      perView: 3,
    },
  },
}
