export default `
  extend type Query {
    # ➜ Get full sites list
    getAllSites: [Site]
    # ➜ Get a single site
    getSite(id: ID!): Site
  }
`
