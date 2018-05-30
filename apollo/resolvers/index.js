import Users from '../../collections/Users'
import Sites from '../../collections/Sites'
import getAllUsers from './Query/User/getAllUsers'
import getUser from './Query/User/getUser'
import addUser from './Mutation/User/addUser'
import addSite from './Mutation/Site/addSite'
const sites = [
  { id: 1, name: 'cadem.cl', authorId: 1 },
  { id: 2, name: 'ventoora.cl', authorId: 2 },
  { id: 3, name: 'fdc.com', authorId: 3 },
  { id: 4, name: 'trabajando.com', authorId: 1 }
]

import Query from './Query'

const resolvers = {
  Query: {
    getAllUsers,
    getUser,
  },
  Mutation: {
    addUser,
    addSite,
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
