"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
// Project imports
const Client_1 = __importDefault(require("../../models/Client"));
const types_1 = require("./types");
const clientQueries = {
    clients: {
        type: new graphql_1.GraphQLList(types_1.ClientType),
        resolve() {
            return Client_1.default.find();
        },
    },
    client: {
        type: types_1.ClientType,
        args: { id: { type: graphql_1.GraphQLID } },
        resolve(_, args) {
            const argsId = args.id;
            return Client_1.default.findById(argsId);
        },
    },
};
exports.default = clientQueries;
