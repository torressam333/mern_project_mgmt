import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLEnumType,
} from 'graphql';
import { ClientType } from './clients/types';
import Client from '../models/Client';
import { ProjectType } from './projects/types';
import Project from '../models/Project';

type ProjectResolverArgs = {
  name: GraphQLNonNull<typeof GraphQLString>;
  description: GraphQLNonNull<typeof GraphQLString>;
  status: GraphQLEnumType;
  clientId: GraphQLNonNull<typeof GraphQLID>;
};

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
    addProject: {
      type: ProjectType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: 'ProjectStatus',
            values: {
              new: { value: 'Not Started' },
              progress: { value: 'In Progress' },
              completed: { value: 'Completed' },
            },
          }),
          defaultValue: 'Not Started',
        },
        clientId: { type: GraphQLNonNull(GraphQLID) },
      },
      async resolve(parent, args) {
        const { name, description, status, clientId } =
          args as ProjectResolverArgs;

        const project = new Project({ name, description, status, clientId });

        await project.save();

        // Make available in response
        return project;
      },
    },
  },
});

export default mutation;
