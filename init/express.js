import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { GRAPHQL_ENDPOINT, GRAPHIQL_ENDPOINT, EXPRESS_PORT } from '../settings'
import { schema } from '../apollo'

export default (app, dirname) => {
  const GWPath = `${dirname}/gateway/index.html`

  app.set('port', EXPRESS_PORT)
  app.use(bodyParser.json({ limit: '50mb' }))
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
  app.use(GRAPHQL_ENDPOINT, bodyParser.json(), graphqlExpress({ schema }))
  app.use(GRAPHIQL_ENDPOINT, graphiqlExpress({ endpointURL: GRAPHQL_ENDPOINT }))
  app.get('/', (req, res) => res.sendFile(GWPath))
  console.log(`→ GraphQL Express Server: OK 🎉 (http://localhost:${app.get('port')}/)`)
}
