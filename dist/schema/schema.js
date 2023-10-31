"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const sampleProjects_1 = require("../data/sampleProjects");
const ClientType = new graphql_1.GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        phone: { type: graphql_1.GraphQLString },
    }),
});
const RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        client: {
            type: ClientType,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve(parent, args) {
                return sampleProjects_1.clients.find((client) => client.id === Number(args.id));
            },
        },
    },
});
// Construct a schema, using GraphQL schema language
const schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
});
exports.default = schema;
