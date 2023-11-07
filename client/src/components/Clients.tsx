import { useQuery, gql } from '@apollo/client';
interface ClientData {
  id: string;
  name: string;
  email: string;
  phone?: string;
  isDeleted?: boolean;
}

interface ClientResults {
  clients: ClientData[];
}

const GET_CLIENTS = gql`
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

  if (loading) return <p>Fetching your clients...</p>;
  if (loading) return `Something went wrong: ${error}`;

  return (
    <div>
      <h1>All Clients</h1>
      {!loading && !error && (
        <div>
          {data &&
            data.clients.map((client) => (
              <div key={client.id}>
                <p>{client.id}</p>
                <p>{client.name}</p>
                <p>{client.email}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Clients;
