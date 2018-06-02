export default `
  type Site{
    id: ID!,
    name: String!,
    url: String!,
    authorId: String,
    author: User,
  }
  input NewSite{
    name: String!,
    url: String!,
    authorId: String,
  }
`
