import { FaTrash } from 'react-icons/fa';
import { DELETE_CLIENT } from '../mutations/clientMutations';
import { useMutation } from '@apollo/client';
import Loader from './Loader';
import { type MouseEvent } from 'react';
import { ClientResults } from './Clients';

type ClientProps = {
  client: {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
};

const ClientRow = ({ client }: ClientProps) => {
  const [deleteClient, { data, loading, error }] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
  });

  const { name, email, phone } = client;

  // if (loading) return <Loader />;
  // if (error) return 'Something went wrong';

  const handleDeleteClient = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log(e);
    // deleteClient({ variables: { id: e.target.id } });
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <button className='btn btn-danger btn-sm' onClick={handleDeleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
