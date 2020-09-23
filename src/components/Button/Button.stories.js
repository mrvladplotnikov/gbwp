import React from "react"

import Button from "./Button"

export default {
  title: "VP/Button",
  component: Button,
}

const ButtonTemplate = args => <Button {...args} />

export const Default = ButtonTemplate.bind({})

Default.args = {
  children: "Button",
  onClick: () => {},
}

export const ReactLink = ButtonTemplate.bind({})

ReactLink.args = {
  to: "/some-path",
  children: "ReactLink",
}

export const NativeLink = ButtonTemplate.bind({})

NativeLink.args = {
  href: "/external-path",
  children: "NativeLink",
}
