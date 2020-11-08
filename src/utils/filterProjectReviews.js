/**
 * Function return filtered reviews array by project id
 * @param {array} reviews Array of objects that should  contain `meta.project` fields
 * @param {int} projectId
 */
export const filterProjectReviews = (reviews = [], projectId = null) => {
  return reviews.filter(({ meta }) => {
    const projects = meta.project || []

    return projects.includes(projectId)
  })
}
