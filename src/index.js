import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { typeDefs } from './graphql/schema/index.js';
import resolvers from './graphql/resolver.js';

import LaunchAPI from './datasource/launch.js';
import UserAPI from './datasource/user.js';

// import { createStore } from './utils';

// const store = createStore();

const app = new express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    launchAPI: new LaunchAPI(),
    // UserAPI: new UserAPI({ store }),
  }),
});

server.applyMiddleware({ app }); // app is from an existing express app

app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
