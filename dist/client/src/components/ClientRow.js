"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fa_1 = require("react-icons/fa");
const ClientRow = ({ client }) => {
    const { name, email, phone } = client;
    return (<tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <button className='btn btn-danger btn-sm'>
          <fa_1.FaTrash />
        </button>
      </td>
    </tr>);
};
exports.default = ClientRow;
