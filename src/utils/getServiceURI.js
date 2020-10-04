const SERVICES = {
  uk: [
    {
      name: "створення музики",
      link: "/services/music-composing",
    },
    {
      name: "аудіобрендинг",
      link: "/services/audio-branding",
    },
    {
      name: "звуковий дизайн",
      link: "/services/sound-design",
    },
    {
      name: "голосове озвучення",
      link: "/services/voice-casting",
    },
  ],
  ru: [
    {
      name: "создание музыки",
      link: "/ru/services/music-composing",
    },
    {
      name: "аудиобрендинг",
      link: "/ru/services/audio-branding",
    },
    {
      name: "звуковой дизайн",
      link: "/ru/services/sound-design",
    },
    {
      name: "голосовое озвучивание",
      link: "/ru/services/voice-casting",
    },
  ],
  en: [
    {
      name: "music composing",
      link: "/en/services/music-composing",
    },
    {
      name: "audio branding",
      link: "/en/services/audio-branding",
    },
    {
      name: "sound design",
      link: "/en/services/sound-design",
    },
    {
      name: "voice casting",
      link: "/en/services/voice-casting",
    },
  ],
}

const workServices = services => {
  return services.map(service => {
    const s = SERVICES[service.lang].find(
      ({ name = "" }) =>
        name.toLocaleLowerCase() === service.name.toLocaleLowerCase()
    )

    return { ...service, ...s }
  })
}

export default workServices
