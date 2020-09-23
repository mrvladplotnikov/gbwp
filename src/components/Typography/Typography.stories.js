import React from "react"

import Typography from "./Typography"

export default {
  title: "VP/Typography",
  component: Typography,
}

const TypographyTemplate = args => <Typography {...args} />

export const RegularText = TypographyTemplate.bind({})

RegularText.args = {
  component: "p",
  variant: "body1",
  children:
    "Bronze Hoof — это хардкорная аркада в античном стиле. Хардкорная во всех смыслах: от позиционирования разработчиков («в нашей игре ты, безусловно, будешь страдать») до написания саундтрека, над которым мы работали два года.",
}

export const Title = TypographyTemplate.bind({})

Title.args = {
  component: "h1",
  variant: "title1",
  children: "Bronze Hoof — это хардкорная аркада в античном стиле.",
}

export const Subtitle = TypographyTemplate.bind({})

Subtitle.args = {
  component: "h3",
  variant: "subtitle1",
  children: "Bronze Hoof — это хардкорная аркада в античном стиле.",
}
