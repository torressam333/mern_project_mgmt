"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
// Project imports
const Project_1 = __importDefault(require("../models/Project"));
const Client_1 = __importDefault(require("../models/Client"));
const ClientType = new graphql_1.GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        phone: { type: graphql_1.GraphQLString },
    }),
});
const ProjectType = new graphql_1.GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        clientId: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        status: { type: graphql_1.GraphQLString },
        client: {
            type: ClientType,
            resolve(parent) {
                console.log(parent);
                return Client_1.default.findById(parent.clientId);
            },
        },
    }),
});
const RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        clients: {
            type: new graphql_1.GraphQLList(ClientType),
            resolve() {
                return Client_1.default.find();
            },
        },
        client: {
            type: ClientType,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve(parent, args) {
                const argsId = Number(args.id);
                return Client_1.default.findById(argsId);
            },
        },
        projects: {
            type: new graphql_1.GraphQLList(ProjectType),
            resolve() {
                return Project_1.default.find();
            },
        },
        project: {
            type: ProjectType,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve(parent, args) {
                const argsId = Number(args.id);
                return Project_1.default.findById(argsId);
            },
        },
    },
});
// Construct a schema, using GraphQL schema language
const schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
});
exports.default = schema;
