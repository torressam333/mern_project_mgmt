import {
  buildSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
} from 'graphql';
import { projects, clients } from '../data/sampleProjects';

const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return clients.find((client) => client.id === Number(args.id));
      },
    },
  },
});

// Construct a schema, using GraphQL schema language
const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
