export default `
  type Query {
    # Get full user list
    getAllUsers: [User]
    sites: [Site]
    getUser(id: ID!): User
  }
`
