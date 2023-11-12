import { render, screen, waitFor } from '@testing-library/react';
import ClientRow from '../../src/components/ClientRow';

describe('Client Row', () => {
  const client = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
  };

  beforeEach(() => {
    render(<ClientRow client={client} />);
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
  });
});
