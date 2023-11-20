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
const ClientRow_1 = __importDefault(require("../../src/components/ClientRow"));
const testing_1 = require("@apollo/client/testing");
const user_event_1 = __importDefault(require("@testing-library/user-event"));
const clientMutations_1 = require("../../src/mutations/clientMutations");
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
                query: clientMutations_1.DELETE_CLIENT,
                variables: { id: 'abcdef1234' },
            },
            result: { data: client },
        },
    ];
    beforeEach(() => {
        (0, react_1.render)(<testing_1.MockedProvider mocks={deleteClientMock}>
        <ClientRow_1.default client={client}/>
      </testing_1.MockedProvider>);
    });
    describe('Client Row UI', () => {
        it('receives a client as a prop', () => {
            expect(client).toHaveProperty('name');
            expect(client).toHaveProperty('email');
            expect(client).toHaveProperty('phone');
        });
        it('renders the client information correctly in the DOM', () => {
            const nameElement = react_1.screen.getByText(/John Doe/i);
            const emailElement = react_1.screen.getByText(/john.doe@example.com/i);
            const phoneElement = react_1.screen.getByText('(123) 456-7890');
            expect(nameElement).toBeInTheDocument();
            expect(emailElement).toBeInTheDocument();
            expect(phoneElement).toBeInTheDocument();
        });
        it('renders a delete button with trash icon', () => __awaiter(void 0, void 0, void 0, function* () {
            const deleteButton = react_1.screen.getByRole('button');
            const trashIcon = deleteButton.querySelector('svg');
            expect(trashIcon).toBeInTheDocument();
            expect(deleteButton).toBeInTheDocument();
        }));
    });
    describe('Client Row Deletion', () => {
        it('should render loading and success states on delete', () => __awaiter(void 0, void 0, void 0, function* () {
            // Find the button element...
            const deleteButton = react_1.screen.getByTestId('delete-client-button');
            // Simulate a click and fire the mutation
            user_event_1.default.click(deleteButton);
            expect(yield react_1.screen.findByText('Loading...')).toBeInTheDocument();
        }));
    });
});
