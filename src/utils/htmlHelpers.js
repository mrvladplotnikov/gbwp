export const strip = html => {
  const doc = html.replace(/(<([^>]+)>)/gi, "")
  return doc || ""
}

export const escapeHtml = unsafe => {
  const str = unsafe.replace(/&#038;/g, "&").replace(/&#8217;/g, "’")
  return str
}
