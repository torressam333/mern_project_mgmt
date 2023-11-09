"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@apollo/client");
const ClientRow_1 = __importDefault(require("./ClientRow"));
const GET_CLIENTS = (0, client_1.gql) `
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;
const Clients = () => {
    const { loading, error, data } = (0, client_1.useQuery)(GET_CLIENTS);
    if (loading)
        return <p>Fetching your clients...</p>;
    if (loading)
        return `Something went wrong: ${error}`;
    return (<>
      <h1>All Clients</h1>
      {!loading && !error && (<div>
          <table className='table table-hover mt-3'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.clients.map((client) => (<ClientRow_1.default key={client.id} client={client}/>))}
            </tbody>
          </table>
        </div>)}
    </>);
};
exports.default = Clients;
