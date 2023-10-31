import { GraphQLObjectType, GraphQLSchema } from 'graphql';

// Project imports
import projectQueries from './projects/queries';
import clientQueries from './clients/queries';
import mutation from './mutations';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...clientQueries,
    ...projectQueries,
  },
});

// Construct a schema, using GraphQL schema language
const schema = new GraphQLSchema({
  query: RootQuery,
  mutation,
});

export default schema;
