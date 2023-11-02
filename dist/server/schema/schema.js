"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
// Project imports
const queries_1 = __importDefault(require("./projects/queries"));
const queries_2 = __importDefault(require("./clients/queries"));
const mutations_1 = __importDefault(require("./mutations"));
const RootQuery = new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: Object.assign(Object.assign({}, queries_2.default), queries_1.default),
});
// Construct a schema, using GraphQL schema language
const schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: mutations_1.default,
});
exports.default = schema;
