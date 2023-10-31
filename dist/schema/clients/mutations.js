"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const ClientMutations = new graphql_1.GraphQLObjectType({
    name: 'ClientMutation',
    fields: {
    // addClient: {},
    },
});
exports.default = ClientMutations;
