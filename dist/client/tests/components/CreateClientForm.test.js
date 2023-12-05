"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const testing_1 = require("@apollo/client/testing");
const CreateClientForm_1 = __importDefault(require("../../src/components/CreateClientForm"));
const mockProps = {
    clientName: '',
    setClientName: jest.fn(),
    clientEmail: '',
    setClientEmail: jest.fn(),
    clientPhone: '',
    setClientPhone: jest.fn(),
};
beforeEach(() => {
    (0, react_1.render)(<testing_1.MockedProvider>
      <CreateClientForm_1.default {...mockProps}/>
    </testing_1.MockedProvider>);
});
describe('Create Client Modal UI', () => {
    it('renders the correct initial input values', () => {
        expect(react_1.screen.getByLabelText('Client Name:')).toBeInTheDocument();
        // expect(screen.getByLabelText('Client Email:').value).toBe('');
        // expect(screen.getByLabelText('Client Phone:').value).toBe('');
    });
});
