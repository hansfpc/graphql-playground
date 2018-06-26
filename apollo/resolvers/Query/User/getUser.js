import Users from '../../../../collections/Users'

export default (root, { id }) => Users.findOne({ _id: id })
