const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
require('dotenv').config()
const resolvers = require('./resolvers');

const TrackAPI = require('./datasources/track-api');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      trackAPI: new TrackAPI(),
    };
  },
});
const startApolloServer = async(server) => {
  const { url, port }  = await server.listen({port: process.env.PORT || 4000});
  console.log(`
    🚀  Server is running!
    🔉  Listening on port ${port}
    📭  Query at ${url}
  `);
}
startApolloServer(server);