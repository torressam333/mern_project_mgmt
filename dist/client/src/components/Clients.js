"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@apollo/client");
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
    return (<div>
      <h1>All Clients</h1>
      {!loading && !error && (<div>
          {data &&
                data.clients.map((client) => (<div key={client.id}>
                <p>{client.id}</p>
                <p>{client.name}</p>
                <p>{client.email}</p>
              </div>))}
        </div>)}
    </div>);
};
exports.default = Clients;
