import { GraphQLID, GraphQLList } from 'graphql';

// Project imports
import Client from '../../models/Client';
import { ClientType } from './types';

const clientQueries = {
  clients: {
    type: new GraphQLList(ClientType), // Multiple clients
    resolve() {
      return Client.find();
    },
  },
  client: {
    type: ClientType,
    args: { id: { type: GraphQLID } },
    resolve(_: any, args: any) {
      const argsId = Number(args.id);

      return Client.findById(argsId);
    },
  },
};

export default clientQueries;
