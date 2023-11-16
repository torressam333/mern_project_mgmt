"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fa_1 = require("react-icons/fa");
const clientMutations_1 = require("../mutations/clientMutations");
const client_1 = require("@apollo/client");
const Loader_1 = __importDefault(require("./Loader"));
const ClientRow = ({ client }) => {
    const [deleteClient, { loading }] = (0, client_1.useMutation)(clientMutations_1.DELETE_CLIENT, {
        variables: { id: client.id },
        onCompleted: () => {
            // Perform any necessary actions after successful deletion
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
