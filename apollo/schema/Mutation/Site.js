export default `
  extend type Mutation {
    # ➜ Add a new site
    addSite(site: NewSite): Site
  }
`
