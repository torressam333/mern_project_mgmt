import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/client/testing';
import CreateClientForm from '../../src/components/CreateClientForm';
import { useState } from 'react';

// Create a mock Parent component:
const MockParentComponent = () => {
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  return (
    <MockedProvider>
      <CreateClientForm
        clientName={clientName}
        setClientName={setClientName}
        clientEmail={clientEmail}
        setClientEmail={setClientEmail}
        clientPhone={clientPhone}
        setClientPhone={setClientPhone}
      />
    </MockedProvider>
  );
};

beforeEach(() => {
  render(
    <MockedProvider>
      <MockParentComponent />
    </MockedProvider>
  );
});

describe('Create Client Form In Modal', () => {
  it('renders the correct initial input values', () => {
    expect(screen.getByLabelText('Client Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Client Email:')).toBeInTheDocument();
    expect(screen.getByLabelText('Client Phone:')).toBeInTheDocument();
  });

  it('updates state values as a user types', async () => {
    const user = userEvent.setup();

    const nameInput = screen.getByRole('textbox', {
      name: 'Client Name:',
    }) as HTMLInputElement;

    // Check initial value
    expect(nameInput.value).toEqual('');

    // Simulate user typing
    await user.type(nameInput, 'Johnny Bravo');

    console.log(
      screen.getByRole('textbox', {
        name: 'Client Name:',
      })
    );

    // Verify updated value after change event
    expect(nameInput.value).toEqual('Johnny Bravo');
  });
});
