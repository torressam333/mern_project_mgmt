import { render, screen, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import Clients, { GET_CLIENTS } from '../../src/components/Clients';

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

describe('Clients component', () => {
  it('should render loading message when data is loading', () => {
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

    expect(screen.getByText('Loading...')).toBeInTheDocument();
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
    expect(screen.getByTestId('custom-element')).toBeInTheDocument();
    // One row for header and two for clients
    expect(screen.getAllByRole('row')).toHaveLength(3);
  });
});
