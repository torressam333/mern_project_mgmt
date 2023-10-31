"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const graphql_1 = require("graphql");
const dotenv_1 = __importDefault(require("dotenv"));
//For env File
dotenv_1.default.config();
// Construct a schema, using GraphQL schema language
const schema = (0, graphql_1.buildSchema)(`
  type Query {
    hello: String
  }
`);
// The root provides a resolver function for each API endpoint
const root = {
    hello: () => {
        return 'Hello world!';
    },
};
const app = (0, express_1.default)();
app.use('/v1/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4005);
console.log('Running a GraphQL API server at http://localhost:4005/v1/graphql');
