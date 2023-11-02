"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectType = void 0;
const graphql_1 = require("graphql");
const types_1 = require("../clients/types");
const Client_1 = __importDefault(require("../../models/Client"));
exports.ProjectType = new graphql_1.GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        clientId: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        status: { type: graphql_1.GraphQLString },
        client: {
            type: types_1.ClientType,
            resolve(parent) {
                return Client_1.default.findById(parent.clientId);
            },
        },
    }),
});
