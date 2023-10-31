import { GraphQLID, GraphQLList } from 'graphql';

import { ProjectType } from './types';
import Project from '../../models/Project';

const projectQueries = {
  projects: {
    type: new GraphQLList(ProjectType), // Multiple projects
    resolve() {
      return Project.find();
    },
  },
  project: {
    type: ProjectType,
    args: { id: { type: GraphQLID } },
    resolve(_: any, args: any) {
      const argsId = Number(args.id);

      return Project.findById(argsId);
    },
  },
};

export default projectQueries;
