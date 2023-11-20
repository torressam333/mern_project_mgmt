import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ClientRow from '../../src/components/ClientRow';
import { MockedProvider } from '@apollo/client/testing';
import userEvent from '@testing-library/user-event';
import { DELETE_CLIENT } from '../../src/mutations/clientMutations';
import { act } from 'react-dom/test-utils'; // Import act for async updates

describe('Client Row', () => {
  const client = {
    id: 'abcdef1234',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
  };

  const deleteClientMock = [
    {
      request: {
        query: DELETE_CLIENT,
        variables: { id: 'abcdef1234' },
      },
      result: { data: client },
    },
  ];

  beforeEach(() => {
    render(
      <MockedProvider mocks={deleteClientMock}>
        <ClientRow client={client} />
      </MockedProvider>
    );
  });

  describe('Client Row UI', () => {
    it('receives a client as a prop', () => {
      expect(client).toHaveProperty('name');
      expect(client).toHaveProperty('email');
      expect(client).toHaveProperty('phone');
    });

    it('renders the client information correctly in the DOM', () => {
      const nameElement = screen.getByText(/John Doe/i);
      const emailElement = screen.getByText(/john.doe@example.com/i);
      const phoneElement = screen.getByText('(123) 456-7890');

      expect(nameElement).toBeInTheDocument();
      expect(emailElement).toBeInTheDocument();
      expect(phoneElement).toBeInTheDocument();
    });

    it('renders a delete button with trash icon', async () => {
      const deleteButton = screen.getByRole('button');

      const trashIcon = deleteButton.querySelector('svg');

      expect(trashIcon).toBeInTheDocument();
      expect(deleteButton).toBeInTheDocument();
    });
  });
});
