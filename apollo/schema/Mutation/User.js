export default `
  type Mutation {
    # ➜ Add a new user 
    addUser(user: NewUser): User
    # ➜ User's sign in 
    login(email: String!, password: String!): User
    # ➜ User's sign up 
    signup(user: NewUserSignup): User
  }
`
