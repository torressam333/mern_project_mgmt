import { useQuery, gql } from '@apollo/client';
import ClientRow from './ClientRow';

interface ClientData {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface ClientResults {
  clients: ClientData[];
}

export const GET_CLIENTS = gql`
  query getClients {
    clients {
      id
      name
      email
      phone
    }
  }
`;

const Clients = () => {
  const { loading, error, data } = useQuery<ClientResults>(GET_CLIENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return `Something went wrong: ${error}`;

  return (
    <>
      <h1 data-testid='clients-header'>All Clients</h1>
      {!loading && !error && (
        <div>
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
        </div>
      )}
    </>
  );
};

export default Clients;
