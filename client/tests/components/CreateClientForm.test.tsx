import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import CreateClientForm from '../../src/components/CreateClientForm';

const mockProps = {
  clientName: '',
  setClientName: jest.fn(),
  clientEmail: '',
  setClientEmail: jest.fn(),
  clientPhone: '',
  setClientPhone: jest.fn(),
};

beforeEach(() => {
  render(
    <MockedProvider>
      <CreateClientForm {...mockProps} />
    </MockedProvider>
  );
});

describe('Create Client Modal UI', () => {
  it('renders the correct initial input values', () => {
    expect(screen.getByLabelText('Client Name:')).toBeInTheDocument();
    // expect(screen.getByLabelText('Client Email:').value).toBe('');
    // expect(screen.getByLabelText('Client Phone:').value).toBe('');
  });
});
