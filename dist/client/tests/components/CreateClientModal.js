"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const testing_1 = require("@apollo/client/testing");
const CreateClientModal_1 = __importDefault(require("../../src/components/CreateClientModal"));
const clientMutations_1 = require("../../src/mutations/clientMutations");
const createClientMock = {
    request: {
        query: clientMutations_1.CREATE_CLIENT,
        variables: {
            name: 'John Doe',
            email: 'jdoe@fakemail.com',
            phone: '8085554455',
        },
    },
};
beforeEach(() => {
    (0, react_1.render)(<testing_1.MockedProvider>
      <CreateClientModal_1.default />
    </testing_1.MockedProvider>);
});
describe('Create Client Modal UI', () => {
    it('Modal is not visible on page load', () => {
        // Query for the modal element
        const modal = react_1.screen.queryByRole('diaglog');
        // Check that the modal is not visible
        expect(modal).not.toBeInTheDocument();
    });
});
