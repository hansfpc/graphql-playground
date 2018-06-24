import Users from '../../../../collections/Users'

export default (parent, { user }) => {
  const { name, email } = user
  return Users.create({
    name,
    email,
  })
}
