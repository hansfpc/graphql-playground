import Users from '../../../../collections/Users'

export default (parent, { id }) => Users.findOne({ _id: id })
