import Sites from '../../../../collections/Sites'
//import { getAuthenticatedUser } from '../../../../helpers'

export default (root, { site }, context) => {
  const { name, url, authorId } = site
  return Sites.create({
    name,
    url,
    authorId,
  })
}
