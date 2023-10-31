"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const ProjectMutations = new graphql_1.GraphQLObjectType({
    name: 'ProjectMutation',
    fields: {
    //addProject: {},
    },
});
exports.default = ProjectMutations;
