import getAllUsers from './Query/User/getAllUsers'
import getUser from './Query/User/getUser'
import addUser from './Mutation/User/addUser'
import getSite from './Query/Site/getSite'
import addSite from './Mutation/Site/addSite'
import sites from './Types/User/sites'
import author from './Types/Site/author'

const resolvers = {
  Query: {
    getAllUsers,
    getUser,
    getSite
  },
  Mutation: {
    addUser,
    addSite
  },
  User: {
    sites
  },
  Site: {
    author
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
