"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const types_1 = require("./types");
const Project_1 = __importDefault(require("../../models/Project"));
const projectQueries = {
    projects: {
        type: new graphql_1.GraphQLList(types_1.ProjectType),
        resolve() {
            return Project_1.default.find();
        },
    },
    project: {
        type: types_1.ProjectType,
        args: { id: { type: graphql_1.GraphQLID } },
        resolve(_, args) {
            const argsId = Number(args.id);
            return Project_1.default.findById(argsId);
        },
    },
};
exports.default = projectQueries;
