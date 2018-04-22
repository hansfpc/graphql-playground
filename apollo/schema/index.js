/*
import Query from './Query'
import Mutation from './Mutation'
import Types from './Types'
import Scalars from './Scalars'

export default [
  ...Query,
  ...Mutation,
  ...Types,
  ...Scalars
]*/

const typeDefs = `
  type Query {
    # Get full user list
    getAllUsers: [User]
    sites: [Site]
    getUser(id: ID!): User
  }
  type Mutation {
    addUser(name: String!, email: String): User
  }
  type User{
    id: ID!,
    name: String,
    email: String,
    role: String,
    sites: [Site]
  }
  type Site{
    id: ID,
    name: String,
    author: User,
  }
`

export default typeDefs
