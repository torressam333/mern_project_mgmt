"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientType = void 0;
const graphql_1 = require("graphql");
exports.ClientType = new graphql_1.GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        phone: { type: graphql_1.GraphQLString },
    }),
});
