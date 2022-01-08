const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
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

server.listen().then(({port, url}) => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port ${process.env.port || 4000}
    📭  Query at ${ $process.env.url || ""}
  `);
});
