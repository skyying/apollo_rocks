const resolvers = {
  Query: {
    launches: (_, __, ctx) => {
      console.log('ctx', ctx);
      const { dataSources } = ctx;
      return dataSources.launchAPI.getAllLaunches();
    },
    launch: (_, { id }, { dataSources }) => dataSources.launchAPI.getLaunchById({ launchId: id }),
    // me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser(),
  },
};

export default resolvers;
