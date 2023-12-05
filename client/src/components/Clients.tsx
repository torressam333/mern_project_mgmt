import { useQuery } from '@apollo/client';
import ClientRow from './ClientRow';
import { GET_CLIENTS } from '../queries/clientQueries';
import Loader from './Loader';

export interface ClientData {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface ClientResults {
  clients: ClientData[];
}

const Clients = () => {
  const { loading, error, data } = useQuery<ClientResults>(GET_CLIENTS);

  if (loading) return <Loader />;
  if (error) return `Something went wrong`;

  return (
    <>
      <h1 data-testid='clients-header'>All Clients</h1>
      {!loading && !error && (
        <table className='table table-hover mt-3' data-testid='clients-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.clients.map((client) => (
                <ClientRow key={client.id} client={client} />
              ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Clients;
