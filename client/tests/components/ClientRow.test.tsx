import { render, screen } from '@testing-library/react';
import ClientRow from '../../src/components/ClientRow';
import { MockedProvider } from '@apollo/client/testing';

describe('Client Row', () => {
  const client = {
    id: 'abcdef1234',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
  };

  beforeEach(() => {
    render(
      <MockedProvider>
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
