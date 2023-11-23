"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        const modal = react_1.screen.queryByRole('dialog');
        // Check that the modal is not visible
        expect(modal).not.toBeInTheDocument();
    });
    it('has a create client button visible in the UI', () => {
        expect(react_1.screen.getByTestId('create-client-button')).toBeInTheDocument();
    });
    describe('Create Client User Actions', () => __awaiter(void 0, void 0, void 0, function* () {
        it('opens a modal when create client button is clicked', () => {
            const createClientBtn = react_1.screen.getByTestId('create-client-button');
            react_1.fireEvent.click(createClientBtn);
            // Query for modal
            const modal = react_1.screen.queryByRole('dialog');
            // Check for modal
            expect(modal).toBeInTheDocument();
        });
    }));
});
