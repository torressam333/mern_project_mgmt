import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Clients from '../../src/components/Clients';
import { GET_CLIENTS } from '../../src/queries/clientQueries';

const mockClients = [
  {
    id: '1',
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1234567890',
  },
  {
    id: '2',
    name: 'Jane Doe',
    email: 'janedoe@example.com',
    phone: '+9876543210',
  },
];

const clientMock = {
  request: {
    query: GET_CLIENTS,
    variables: {},
  },
  error: new Error('Something went wrong'),
};

describe('Clients component', () => {
  it('should render loader component when data is loading', () => {
    render(
      <MockedProvider
        mocks={[
          {
            request: { query: GET_CLIENTS },
            result: { data: { loading: true } },
          },
        ]}
      >
        <Clients />
      </MockedProvider>
    );

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('should render an error message if the query fails', async () => {
    render(
      <MockedProvider mocks={[clientMock]} addTypename={false}>
        <Clients />
      </MockedProvider>
    );

    expect(await screen.findByText('Something went wrong')).toBeInTheDocument();
  });

  it('should render clients table when data is successfully fetched', async () => {
    render(
      <MockedProvider
        mocks={[
          {
            request: { query: GET_CLIENTS },
            result: { data: { clients: mockClients } },
          },
        ]}
      >
        <Clients />
      </MockedProvider>
    );

    await waitFor(() => screen.getByTestId('clients-header'));
    expect(screen.getByTestId('clients-header')).toBeInTheDocument();
    expect(screen.getByTestId('clients-table')).toBeInTheDocument();
    // One row for header and two for clients
    expect(screen.getAllByRole('row')).toHaveLength(3);
  });
});
