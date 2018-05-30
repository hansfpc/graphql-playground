export default `
  extend type Query {
    # Get full sites list
    getAllSites: [Site]
    getSite(id: ID!): Site
  }
`
