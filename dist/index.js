"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const dotenv_1 = __importDefault(require("dotenv"));
// Project imports
const schema_1 = __importDefault(require("./schema/schema"));
//For env File
dotenv_1.default.config();
const PORT = process.env.PORT || 5000;
// The root provides a resolver function for each API endpoint
const root = {
    hello: () => {
        return 'Hello world!';
    },
};
const app = (0, express_1.default)();
app.use('/v1/graphql', (0, express_graphql_1.graphqlHTTP)({
    schema: schema_1.default,
    rootValue: root,
    graphiql: process.env.NODE_ENV === 'development' && true,
}));
app.listen(PORT);
console.log(`Running a GraphQL API server at http://localhost:${PORT}/v1/graphql`);
