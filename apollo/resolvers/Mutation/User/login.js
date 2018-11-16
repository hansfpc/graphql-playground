import Users from '../../../../collections/Users'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../../../../settings'

export default (root, { email, password }, context) =>
    Users.findOne({ email }).then(user => {
    if (user) {
      // validate password
      return bcrypt.compare(password, user.password).then(res => {
        if (res) {
          // create jwt
          const token = jwt.sign(
            {
              id: user._id,
              email: user.email,
              role: user.role,
              version: user.version,
            },
            JWT_SECRET
          )
          user.jwt = token
          context.user = Promise.resolve(user)
          return user
        }
        return Promise.reject('password incorrect')
      })
    }
    return Promise.reject('email not found')
  })
