"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fa_1 = require("react-icons/fa");
const clientMutations_1 = require("../mutations/clientMutations");
const client_1 = require("@apollo/client");
const clientQueries_1 = require("../queries/clientQueries");
const ClientRow = ({ client }) => {
    const [deleteClient, { loading }] = (0, client_1.useMutation)(clientMutations_1.DELETE_CLIENT, {
        variables: { id: client.id },
        update(cache, { data: { deleteClient } }) {
            // Remove deleted client from cache
            const { clients } = cache.readQuery({ query: clientQueries_1.GET_CLIENTS });
            const filteredClients = clients.filter((client) => client.id !== deleteClient.id);
            // Overwrite cache and return all non-deleted clients in the UI
            cache.writeQuery({
                query: clientQueries_1.GET_CLIENTS,
                data: {
                    clients: [...filteredClients], // Create a new array
                },
            });
        },
    });
    if (loading)
        return <p>Loading...</p>;
    const { name, email, phone } = client;
    return (<tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <button className='btn btn-danger btn-sm' onClick={() => deleteClient()} data-testid='delete-client-button'>
          <fa_1.FaTrash />
        </button>
      </td>
    </tr>);
};
exports.default = ClientRow;
