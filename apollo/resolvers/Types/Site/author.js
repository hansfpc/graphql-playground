import Users from '../../../../collections/Users'

export default parent => Users.findOne({ _id: parent.authorId })
