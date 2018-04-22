const users = [
  { id: 1, name: 'hans' },
  { id: 2, name: 'Manuel' },
  { id: 3, name: 'Diego' }
]
const sites = [
  { id: 1, name: 'cadem.cl', authorId: 1 },
  { id: 2, name: 'ventoora.cl', authorId: 2 },
  { id: 3, name: 'fdc.com', authorId: 3 },
  { id: 4, name: 'trabajando.com', authorId: 1 }
]
import Users from '../../collections/Users'

const resolvers = {
  Query: {
    getAllUsers: () => Users.find({}), // la estructura de cada objeto, debe ser como el type User (busco en la dB)
    sites: () => sites,
    getUser: (context, { id }) => Users.findOne({_id: id})
    //getUser: (context, { id }) => users.find(el => el.id === id)
  },
  Mutation: {
    addUser: (context, { name, email }) => {
      //users.push({id: users.length + 1, name})
      return Users.create({
        name,
        email
      })
    }
  },
  User: {
    sites: parent => sites.filter(el => el.authorId === parent.id) // cada vez que use USER, en los sites les harcodeo eso
  },
  Site: {
    author: parent => users.find(el => el.id === parent.authorId)
  }
}

export default resolvers

/*
import Query from './Query'
import Mutation from './Mutation'
import Scalars from './Scalars'
import Types from './Types'

export default {
  ...Types,
  ...Scalars,
  Query,
  Mutation
}*/
