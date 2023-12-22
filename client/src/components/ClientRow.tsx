import { FaTrash } from "react-icons/fa";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { useMutation } from "@apollo/client";
import Loader from "./Loader";
import { GET_CLIENTS } from "../queries/clientQueries";

const ClientRow = ({ client }: ClientProps) => {
  const [deleteClient, { loading }] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    update(cache, { data: { deleteClient } }): void {
      // Remove deleted client from cache
      const { clients } = cache.readQuery({ query: GET_CLIENTS }) as {
        clients: ClientProps["client"][];
      };

      const filteredClients = clients.filter(
        (client: ClientProps["client"]) => client.id !== deleteClient.id
      );

      // Overwrite cache and return all non-deleted clients in the UI
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: [...filteredClients] // Create a new array
        }
      });
    }
  });

  if (loading)
    return (
      <tr data-testid="loader-row">
        <td>
          <Loader />
        </td>
      </tr>
    );

  const { name, email, phone } = client;

  return (
    !loading && (
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => deleteClient()}
            data-testid="delete-client-button"
          >
            <FaTrash />
          </button>
        </td>
      </tr>
    )
  );
};

export default ClientRow;
