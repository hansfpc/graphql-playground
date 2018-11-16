import Query from './Query'
import Mutation from './Mutation'
import Types from './Types'
import Subscriptions from './Subscriptions'
//import Scalars from './Scalars'

export default [
  ...Query,
  ...Mutation,
  ...Types,
  ...Subscriptions,
  //...Scalars
]
