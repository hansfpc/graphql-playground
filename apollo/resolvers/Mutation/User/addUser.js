import Users from '../../../../collections/Users'

export default (context, { name, email }) => {
  return Users.create({
    name,
    email
  })
}
