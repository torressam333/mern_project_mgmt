"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const types_1 = require("./clients/types");
const Client_1 = __importDefault(require("../models/Client"));
const types_2 = require("./projects/types");
const Project_1 = __importDefault(require("../models/Project"));
const mutation = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addClient: {
            type: types_1.ClientType,
            args: {
                name: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                email: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                phone: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
            },
            resolve(parent, args) {
                return __awaiter(this, void 0, void 0, function* () {
                    const { name, email, phone } = args;
                    const client = new Client_1.default({
                        name,
                        email,
                        phone,
                    });
                    yield client.save();
                    return client;
                });
            },
        },
        deleteClient: {
            type: types_1.ClientType,
            args: {
                id: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLID) },
            },
            resolve(parent, args) {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        const client = yield Client_1.default.findById(args.id);
                        if (!client)
                            throw Error('Client not found');
                        yield (client === null || client === void 0 ? void 0 : client.deleteOne());
                        return { status: 202, message: 'Accepted' };
                    }
                    catch (error) {
                        throw new Error(error.message);
                    }
                });
            },
        },
        addProject: {
            type: types_2.ProjectType,
            args: {
                name: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                description: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLString) },
                status: {
                    type: new graphql_1.GraphQLEnumType({
                        name: 'ProjectStatus',
                        values: {
                            new: { value: 'Not Started' },
                            progress: { value: 'In Progress' },
                            completed: { value: 'Completed' },
                        },
                    }),
                    defaultValue: 'Not Started',
                },
                clientId: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLID) },
            },
            resolve(_, args) {
                return __awaiter(this, void 0, void 0, function* () {
                    const { name, description, status, clientId } = args;
                    const project = new Project_1.default({ name, description, status, clientId });
                    yield project.save();
                    // Make available in response
                    return project;
                });
            },
        },
        deleteProjectById: {
            type: types_2.ProjectType,
            args: {
                id: { type: (0, graphql_1.GraphQLNonNull)(graphql_1.GraphQLID) },
            },
            resolve(_, args) {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        const project = yield Project_1.default.findById(args.id);
                        if (!project)
                            throw new Error('Project not found');
                        yield project.deleteOne();
                        return { status: 202, message: 'Accepted' };
                    }
                    catch (error) {
                        throw new Error(error.message);
                    }
                });
            },
        },
    },
});
exports.default = mutation;
