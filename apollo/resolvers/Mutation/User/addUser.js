import Users from '../../../../collections/Users'

export default (context, { user }) => {
  const { name, email } = user
  return Users.create({
    name,
    email
  })
}
