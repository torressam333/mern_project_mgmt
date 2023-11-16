"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fa_1 = require("react-icons/fa");
const clientMutations_1 = require("../mutations/clientMutations");
const client_1 = require("@apollo/client");
const Loader_1 = __importDefault(require("./Loader"));
const clientQueries_1 = require("../queries/clientQueries");
const ClientRow = ({ client }) => {
    const [deleteClient, { loading }] = (0, client_1.useMutation)(clientMutations_1.DELETE_CLIENT, {
        variables: { id: client.id },
        update(cache, { data: { deleteClient } }) {
            const { clients } = cache.readQuery({ query: clientQueries_1.GET_CLIENTS });
            const updatedClients = clients.filter((client) => client.id !== deleteClient.id);
            // Overwrite cache and return all non-deleted clients in the UI
            cache.writeQuery({
                query: clientQueries_1.GET_CLIENTS,
                data: {
                    clients: updatedClients,
                },
            });
            // Manually refetch the data
            refetch();
        },
        onError: (error) => {
            console.error('Error deleting client:', error);
        },
    });
    if (loading)
        return (<tr>
        <td>
          <Loader_1.default />
        </td>
      </tr>);
    const { name, email, phone } = client;
    return (<tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <button className='btn btn-danger btn-sm' onClick={() => deleteClient()}>
          <fa_1.FaTrash />
        </button>
      </td>
    </tr>);
};
exports.default = ClientRow;
