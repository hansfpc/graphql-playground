import Users from '../../../../collections/Users'

export default {
    getUser: (context, { id }) => Users.findOne({_id: id})
    //getUser: (context, { id }) => users.find(el => el.id === id)
}
