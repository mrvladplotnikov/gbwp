export const strip = html => {
  const doc = html.replace(/(<([^>]+)>)/gi, "")
  return doc || ""
}
