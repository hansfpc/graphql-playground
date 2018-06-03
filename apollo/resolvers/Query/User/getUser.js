import Users from '../../../../collections/Users'

export default (context, { id }) => Users.findOne({ _id: id })
