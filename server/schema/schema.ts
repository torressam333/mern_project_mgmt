import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
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

const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    clientId: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    clients: {
      type: new GraphQLList(ClientType), // Multiple clients
      resolve() {
        return clients;
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return clients.find((client) => client.id === Number(args.id));
      },
    },
    projects: {
      type: new GraphQLList(ProjectType), // Multiple projects
      resolve() {
        return projects;
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return clients.find((project) => project.id === Number(args.id));
      },
    },
  },
});

// Construct a schema, using GraphQL schema language
const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
