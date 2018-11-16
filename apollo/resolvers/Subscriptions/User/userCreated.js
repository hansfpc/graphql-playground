//https://www.apollographql.com/docs/graphql-subscriptions/subscriptions-to-schema.html
import Users from '../../../../collections/Users'

const { PubSub } = require('graphql-subscriptions')
const pubsub = new PubSub();

subscribe: () => pubsub.asyncIterator('commentAdded')

export default (root, { user }) => {
  const { name, email } = user
  return Users.create({
    name,
    email,
  })
}


//https://github.com/kimobrian/GraphQL-Course/blob/lesson3F/packages/server/resolvers.js