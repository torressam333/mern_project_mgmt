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
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const clientSeeder_1 = __importDefault(require("./seeders/clientSeeder"));
//For env File
dotenv_1.default.config();
// Project imports
const schema_1 = __importDefault(require("./schema/schema"));
const mongodb_1 = __importDefault(require("./config/mongodb"));
const PORT = process.env.PORT || 6002;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
// Connect to db
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    // Server not in cache? Spin up fresh server/db
    try {
        //connect to db
        yield (0, mongodb_1.default)();
        // Asynchronously seed 10 clients for dev
        if (process.env.NODE_ENV === "development")
            yield (0, clientSeeder_1.default)();
        // Start gql server
        app.use("/v1/graphql", (0, express_graphql_1.graphqlHTTP)({
            schema: schema_1.default,
            graphiql: process.env.NODE_ENV === "development" && true
        }));
        app.listen(PORT, () => console.log(`Running a GraphQL API server at http://localhost:${PORT}/v1/graphql`));
    }
    catch (error) {
        console.error("Error in index file", error);
    }
});
// Bootstrap app and server
start();
