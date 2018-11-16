import bodyParser from 'body-parser'
import cors from 'cors'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import {
  GRAPHQL_ENDPOINT,
  GRAPHIQL_ENDPOINT,
  EXPRESS_PORT,
  JWT_SECRET,
} from '../settings'
import jwt from 'express-jwt'
import { schema } from '../apollo'
import Users from '../collections/Users'


export default (app, dirname) => {
  const GWPath = `${dirname}/gateway/index.html`

  app.use(cors())
  app.set('port', EXPRESS_PORT)
  app.use(bodyParser.json({ limit: '50mb' }))
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

  app.use(
    GRAPHQL_ENDPOINT,
    bodyParser.json(),
    jwt({
      secret: JWT_SECRET,
      credentialsRequired: false,
    }),
    graphqlExpress(req => {
      return {
        schema,
        context: {
          user: req.user
            ? Users.findOne({ _id: req.user.id, version: req.user.version })
            : null,
        },
        formatError: error => {
          return { name: error.name, message: error.message }
        },
      }
    })
  )
  app.use(GRAPHIQL_ENDPOINT, graphiqlExpress({ endpointURL: GRAPHQL_ENDPOINT }))
  app.get('/', (req, res) => res.sendFile(GWPath))
  console.log(`→ GraphQL Express Server: OK 🎉 (http://localhost:${app.get('port')}/)`)
}
