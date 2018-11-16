import Users from '../../../../collections/Users'
import { getAuthenticatedUser } from '../../../../helpers'

export default (root, { id }, context) => {
  //console.warn('get user query fired!')
  //console.log(context.user)
  if (!context.user) {
    console.log('....unauthorized')
    return Promise.reject('Unauthorized')
  }
  console.log(context.user)
  console.log('la wea esta autorizada')
  return Users.findOne({ _id: id })
}

// el context.user me devuelve metadata, pero necesito el objeto del usuario puro en vez de eso.

