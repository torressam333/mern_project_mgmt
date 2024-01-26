import { GraphQLID, GraphQLList } from 'graphql';
import { ProjectType } from './types';
import Project from '../../models/Project';

const projectQueries = {
  projects: {
    type: new GraphQLList(ProjectType), // Multiple projects
    resolve() {
      // Return all projects except soft deleted ones
      return Project.find({ isDeleted: false });
    },
  },
  project: {
    type: ProjectType,
    args: { id: { type: GraphQLID } },
    resolve(_: any, args: any) {
      const argsId = args.id;

      return Project.findById(argsId);
    },
  },
};

export default projectQueries;
