import { fireEvent, render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import CreateClientModal from '../../src/components/CreateClientModal';
import { CREATE_CLIENT } from '../../src/mutations/clientMutations';

const createClientMock = {
  request: {
    query: CREATE_CLIENT,
    variables: {
      name: 'John Doe',
      email: 'jdoe@fakemail.com',
      phone: '8085554455',
    },
  },
};

beforeEach(() => {
  render(
    <MockedProvider>
      <CreateClientModal />
    </MockedProvider>
  );
});

describe('Create Client Modal UI', () => {
  it('Modal is not visible on page load', () => {
    // Query for the modal element
    const modal = screen.queryByRole('dialog');

    // Check that the modal is not visible
    expect(modal).not.toBeInTheDocument();
  });

  it('has a create client button visible in the UI', () => {
    expect(screen.getByTestId('create-client-button')).toBeInTheDocument();
  });

  describe('Create Client User Actions', async () => {
    it('opens a modal when create client button is clicked', () => {
      const createClientBtn = screen.getByTestId('create-client-button');

      fireEvent.click(createClientBtn);

      // Query for modal
      const modal = screen.queryByRole('dialog');

      // Check for modal
      expect(modal).toBeInTheDocument();
    });
  });
});
