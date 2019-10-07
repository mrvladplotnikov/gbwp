const langs = {
  uk: {
    default: true,
    code: "uk",
  },
  en_GB: {
    default: false,
    code: "en",
  },
  ru_RU: {
    default: false,
    code: "ru",
  },
}

export default (langCode, slug) => {
  const lang = langs[langCode]
  if (!lang) return slug

  if (lang.default) return slug

  return `/${lang.code}/${slug}/`
}
