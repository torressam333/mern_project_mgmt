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
    const [deleteClient, { data, loading, error }] = (0, client_1.useMutation)(clientMutations_1.DELETE_CLIENT);
    const { name, email, phone } = client;
    if (loading)
        return <Loader_1.default />;
    if (error)
        return 'Something went wrong';
    const handleDeleteClient = (e) => {
        e.preventDefault();
        console.log(e);
        // deleteClient({ variables: { id: e.target.id } });
    };
    return (<tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <button className='btn btn-danger btn-sm' onClick={handleDeleteClient}>
          <fa_1.FaTrash />
        </button>
      </td>
    </tr>);
};
exports.default = ClientRow;
