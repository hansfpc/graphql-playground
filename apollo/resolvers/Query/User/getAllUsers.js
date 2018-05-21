import Users from '../../../../collections/Users'

export default {
  getAllUsers: () => Users.find({})
}
