import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';
import { ClientType } from './clients/types';
import Client from '../models/Client';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addClient: {
      type: ClientType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
        const { name, email, phone } = args;

        const client = new Client({
          name,
          email,
          phone,
        });

        await client.save();

        return client;
      },
    },
  },
});

export default mutation;
