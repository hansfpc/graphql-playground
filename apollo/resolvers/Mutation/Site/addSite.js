import Sites from '../../../../collections/Sites'

export default (context, { site }) => {
  const { name, url, authorId } = site
  return Sites.create({
    name,
    url,
    authorId
  })
}
