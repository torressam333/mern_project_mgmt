import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} from 'graphql';

// Project imports
import Project from '../models/Project';
import Client from '../models/Client';

const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    clientId: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve(parent) {
        console.log(parent);
        return Client.findById(parent.clientId);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    clients: {
      type: new GraphQLList(ClientType), // Multiple clients
      resolve() {
        return Client.find();
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const argsId = Number(args.id);

        return Client.findById(argsId);
      },
    },
    projects: {
      type: new GraphQLList(ProjectType), // Multiple projects
      resolve() {
        return Project.find();
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const argsId = Number(args.id);

        return Project.findById(argsId);
      },
    },
  },
});

// Construct a schema, using GraphQL schema language
const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
