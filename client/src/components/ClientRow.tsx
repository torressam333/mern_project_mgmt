import { FaTrash } from 'react-icons/fa';
import { DELETE_CLIENT } from '../mutations/clientMutations';
import { useMutation } from '@apollo/client';
import Loader from './Loader';

type ClientProps = {
  client: {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
};

const ClientRow = ({ client }: ClientProps) => {
  const [deleteClient, { loading }] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    onCompleted: () => {
      // Perform any necessary actions after successful deletion
    },
    onError: (error: Error) => {
      console.error('Error deleting client:', error);
    },
  });

  if (loading)
    return (
      <tr>
        <td>
          <Loader />
        </td>
      </tr>
    );

  const { name, email, phone } = client;

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <button
          className='btn btn-danger btn-sm'
          onClick={() => deleteClient()}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
