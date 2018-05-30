import Sites from "../../../../collections/Sites";

export default (context, {name, url, author}) => {
  return Sites.create({
    name,
    url,
    author
  })
}
