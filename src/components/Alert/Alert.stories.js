import React from "react"

import Alert from "./Alert"

export default {
  title: "VP/Alert",
  component: Alert,
}

const AlertTemplate = args => <Alert {...args} />

export const Default = AlertTemplate.bind({})

Default.args = {
  children: (
    <div>
      <h4>Cookies... Yum...</h4>
      <p>
        Наш сайт використовує файли cookie, щоб покращити Ваш досвід як
        користувача. Також, ми передаємо інформацію про використання Вами сайту
        нашим консультантам. Дізнайтеся більше в нашій Політиці
        конфіденційності. Натискаючи кнопку "Прийняти", ви погоджуєтесь з тим,
        щоб файли cookie зберігалися на вашому пристрої.
      </p>
    </div>
  ),
  onButtonClick: () => {},
  buttonLabel: "Принять",
  onClose: () => {},
}
