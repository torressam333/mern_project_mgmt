"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_CLIENT = void 0;
const client_1 = require("@apollo/client");
exports.DELETE_CLIENT = (0, client_1.gql) `
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;
