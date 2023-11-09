"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ClientRow = ({ client }) => {
    const { name, email, phone } = client;
    return (<tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>);
};
exports.default = ClientRow;
