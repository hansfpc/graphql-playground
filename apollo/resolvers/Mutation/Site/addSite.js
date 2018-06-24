import Sites from '../../../../collections/Sites'

export default (parent, { site }) => {
  const { name, url, authorId } = site
  return Sites.create({
    name,
    url,
    authorId,
  })
}
