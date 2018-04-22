import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { schema } from '../apollo'

export default function(app, dirname) {
  const GWPath = `${dirname}/gateway/index.html`

  app.set('port', process.env.PORT || 3000)
  app.use(bodyParser.json({ limit: '50mb' }))
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
  app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
  app.get('/', (req, res) => res.sendFile(GWPath))
  console.log(`🔗 GraphQL Express Server: OK 🎉 (http://localhost:${app.get('port')}/)`)
}
