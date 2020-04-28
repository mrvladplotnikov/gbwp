require("dotenv").config()
const fs = require("fs")
const nodemailer = require("nodemailer")

const emailsSubjects = {
  music: {
    ru: "🎶 Создание музыки: пакеты",
    uk: "🎶 Створення музики: пакети",
    en: "🎶 Music composing: the packages",
  },
  reference: {
    ru: "📝 Темплейт технического задания",
    uk: "📝 Темплейт технічного завдання",
    en: "📝 Technical task template",
  },
  "voice-casting": {
    ru: "🗣 Стоимость голосового озвучивания",
    uk: "🗣 Вартість голосового озвучення",
    en: "🗣 The cost of voice casting",
  },
}

const types = ["voice-casting", "music", "reference"]

exports.handler = function(event, context, callback) {
  const user = process.env.MAIL_USER
  const pass = process.env.MAIL_PASSWORD

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user, pass },
  })

  // Parse data sent in form hook (email, name etc)
  const data = JSON.parse(event.body)

  if (!data || !data.name || !data.email || !types.some(t => t === data.type)) {
    return callback(null, {
      statusCode: 400,
      body: "Mailing details not provided",
    })
  }

  const adminMailOptions = {
    from: data.email,
    to: user,
    subject: "Заявка с сайта",
    html: `<p>${JSON.stringify(data)}</>`,
  }

  const userMailOptions = {
    from: user,
    to: data.email,
    subject: emailsSubjects[data.type][data.lang],
    html: fs
      .readFileSync(require.resolve(`./emails/${data.type}/${data.lang}.html`))
      .toString("utf8"),
  }

  transporter.sendMail(adminMailOptions, (err, info) => {
    if (err) {
      return callback(null, {
        statusCode: 500,
        body: JSON.stringify(error),
      })
    }

    transporter.sendMail(userMailOptions, (error, info) => {
      // handle errors
      if (error) {
        return callback(null, {
          statusCode: 500,
          body: JSON.stringify(error),
        })
      }

      // success!
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          status: "Ok",
        }),
      })
    })
  })
}
