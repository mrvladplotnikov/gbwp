const { defaultLangKey } = require("./languages.js")

module.exports = (langCode, slug, type) => {
  if (!type) return `/${langCode}/${slug}`.replace(`/${defaultLangKey}/`, "/")

  return `/${langCode}/${type}/${slug}`.replace(`/${defaultLangKey}/`, "/")
}
