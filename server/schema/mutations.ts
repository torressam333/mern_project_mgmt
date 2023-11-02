import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
} from 'graphql';
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
    deleteClient: {
      type: ClientType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      async resolve(parent, args) {
        try {
          const client = await Client.findById(args.id);

          if (!client) throw Error('Client not found');

          const deleteClient = await client?.deleteOne();

          return deleteClient;
        } catch (error: any) {
          throw new Error(error.message);
        }
      },
    },
  },
});

export default mutation;
