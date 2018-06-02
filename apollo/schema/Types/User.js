export default `
  type User{
    id: ID!,
    name: String!,
    email: String!,
    role: String,
    createdAt: String,
    updatedAt: String,
    sites: [Site]
  }
  input NewUser{
    name: String!,
    email: String!,
  }
`
