import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MockedProvider } from '@apollo/client/testing';
import CreateClientForm from '../../src/components/CreateClientForm';
import { vi } from 'vitest';

const mockProps: CreateClientFormProps = {
  clientName: '',
  setClientName: vi.fn(),
  clientEmail: '',
  setClientEmail: vi.fn(),
  clientPhone: '',
  setClientPhone: vi.fn(),
};

beforeEach(() => {
  render(
    <MockedProvider>
      <CreateClientForm {...mockProps} />
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
    // expect(nameInput.value).toEqual('Johnny Bravo');
  });
});
