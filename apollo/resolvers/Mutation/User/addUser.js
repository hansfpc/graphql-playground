import Users from '../../../../collections/Users'

export default (root, { user }) => {
  const { name, email } = user
  return Users.create({
    name,
    email,
  })
}
