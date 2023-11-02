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
import { MongooseError } from 'mongoose';

type ProjectResolverArgs = {
  name: GraphQLNonNull<typeof GraphQLString>;
  description: GraphQLNonNull<typeof GraphQLString>;
  status: GraphQLEnumType;
  clientId: GraphQLNonNull<typeof GraphQLID>;
};

const projectStatuValues = {
  new: { value: 'Not Started' },
  progress: { value: 'In Progress' },
  completed: { value: 'Completed' },
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

          await client?.deleteOne();

          return { status: 202, message: 'Accepted' };
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
            values: projectStatuValues,
          }),
          defaultValue: 'Not Started',
        },
        clientId: { type: GraphQLNonNull(GraphQLID) },
      },
      async resolve(_, args) {
        const { name, description, status, clientId } =
          args as ProjectResolverArgs;

        const project = new Project({ name, description, status, clientId });

        await project.save();

        // Make available in response
        return project;
      },
    },
    deleteProjectById: {
      type: ProjectType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      async resolve(_, args) {
        try {
          const project = await Project.findById(args.id);

          if (!project) throw new Error('Project not found');

          await project.deleteOne();

          return { status: 202, message: 'Accepted' };
        } catch (error: any) {
          throw new Error(error.message);
        }
      },
    },
    updateProject: {
      type: ProjectType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: 'ProjectStatusUpdate',
            values: projectStatuValues,
          }),
        },
      },
      async resolve(_, args) {
        try {
          const projectToUpdate = Project.findByIdAndUpdate(
            args.id,
            {
              $set: {
                name: args.name,
                description: args.description,
                status: args.status,
              },
            },
            { new: true } // Create new if not found
          );

          return projectToUpdate;
        } catch (error: any) {
          if (error instanceof MongooseError)
            throw new Error(`Mongoose update error: ${error.message}`);
          else throw new Error(error.message);
        }
      },
    },
  },
});

export default mutation;
