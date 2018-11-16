import Users from '../../../../collections/Users'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../../../../settings'

export default (root, { user: {email, password, username, firstname, lastname} }, context) =>
  Users.findOne({ email }).then(existing => {
    if (!existing) {
      // hash password and create user
      return bcrypt
        .hash(password, 10)
        .then(hash =>
          Users.create({
            email,
            firstname,
            lastname,
            password: hash,
            username: username,
            version: 1,
          })
        )
        .then(user => {
          const { _id, role } = user
          const token = jwt.sign({ id: _id, email, role, version: 1 }, JWT_SECRET)
          user.jwt = token
          context.user = Promise.resolve(user)
          return user
        })
    }
    return Promise.reject('email already exists') // email already exists
  })
