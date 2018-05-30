export default `
  type Query {
    # ➜ Get full users list
    getAllUsers: [User]
    # Get a single user
    getUser(id: ID!): User
  }
`
