"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const App_tsx_1 = __importDefault(require("./App.tsx"));
require("./index.css");
require("bootstrap/dist/css/bootstrap.css");
const client_2 = require("@apollo/client");
const client = new client_2.ApolloClient({
    uri: 'http://localhost:4005/v1/graphql',
    cache: new client_2.InMemoryCache(),
});
client_1.default.createRoot(document.getElementById('root')).render(<react_1.default.StrictMode>
    <client_2.ApolloProvider client={client}>
      <App_tsx_1.default />
    </client_2.ApolloProvider>
  </react_1.default.StrictMode>);
