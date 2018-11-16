export default `
  type User {
    id: ID!,
    firstname: String,
    lastname: String,
    email: String!,
    role: String,
    createdAt: String,
    updatedAt: String,
    sites: [Site],
    jwt: String,
    username: String!
  }
  input NewUser {
    name: String,
    email: String!,
  }
  input NewUserSignup {
    firstname: String!,
    lastname: String!,
    email: String!,
    username: String!
    password: String!
  }
`
