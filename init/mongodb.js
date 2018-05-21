import mongoose from 'mongoose'
const DATABASE_URL = 'mongodb://localhost:27017/testmongogql'
import loadModels from '../collections'

export default () => {
  const connect = () => {
    mongoose.Promise = global.Promise

    mongoose.connect(
      DATABASE_URL,
      {
        keepAlive: true,
        reconnectTries: Number.MAX_VALUE
      },
      err => {
        if (err) {
          console.log(`→ Error connecting to ${DATABASE_URL} 😤 `)
          console.log(`→ ¿Reason?: ${err} `)
        } else {
          console.log(`→ Database connection: OK 🎉 (${DATABASE_URL})`)
        }
      }
    )
  }
  connect()

  mongoose.connection.on('error', console.log)
  mongoose.connection.on('disconnected', connect)

  loadModels()
}
