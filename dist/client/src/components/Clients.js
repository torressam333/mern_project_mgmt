"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_CLIENTS = void 0;
const client_1 = require("@apollo/client");
const ClientRow_1 = __importDefault(require("./ClientRow"));
exports.GET_CLIENTS = (0, client_1.gql) `
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
    const { loading, error, data } = (0, client_1.useQuery)(exports.GET_CLIENTS);
    if (loading)
        return <p>Loading...</p>;
    if (error)
        return `Something went wrong`;
    return (<>
      <h1 data-testid='clients-header'>All Clients</h1>
      {!loading && !error && (<div>
          <table className='table table-hover mt-3' data-testid='clients-table'>
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
