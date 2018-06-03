import mongoose from 'mongoose'
import { DB_URL } from '../settings'
import loadModels from '../collections'

export default () => {
  const connect = () => {
    mongoose.Promise = global.Promise
    mongoose.connect(
      DB_URL,
      {
        keepAlive: true,
        reconnectTries: Number.MAX_VALUE,
      },
      err => {
        if (err) {
          console.log(`→ Error connecting to ${DB_URL} 😤 `)
          console.log(`→ ¿Reason?: ${err} `)
        } else {
          console.log(`→ Database connection: OK 🎉 (${DB_URL})`)
        }
      }
    )
  }
  connect()
  mongoose.connection.on('error', console.log)
  mongoose.connection.on('disconnected', connect)
  loadModels()
}
