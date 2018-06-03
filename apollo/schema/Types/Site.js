export default `
  type Site{
    id: ID!,
    name: String!,
    url: String!,
    authorId: String,
    author: User,
    createdAt: String,
    updatedAt: String,
  }
  input NewSite{
    name: String!,
    url: String!,
    authorId: String,
  }
`
