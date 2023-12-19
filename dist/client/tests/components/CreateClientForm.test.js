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
const user_event_1 = __importDefault(require("@testing-library/user-event"));
const testing_1 = require("@apollo/client/testing");
const CreateClientForm_1 = __importDefault(require("../../src/components/CreateClientForm"));
const react_2 = require("react");
// Create a mock Parent component:
const MockParentComponent = () => {
    const [clientName, setClientName] = (0, react_2.useState)('');
    const [clientEmail, setClientEmail] = (0, react_2.useState)('');
    const [clientPhone, setClientPhone] = (0, react_2.useState)('');
    return (<testing_1.MockedProvider>
      <CreateClientForm_1.default clientName={clientName} setClientName={setClientName} clientEmail={clientEmail} setClientEmail={setClientEmail} clientPhone={clientPhone} setClientPhone={setClientPhone}/>
    </testing_1.MockedProvider>);
};
beforeEach(() => {
    (0, react_1.render)(<testing_1.MockedProvider>
      <MockParentComponent />
    </testing_1.MockedProvider>);
});
describe('Create Client Form In Modal', () => {
    it('renders the correct initial input values', () => {
        expect(react_1.screen.getByLabelText('Client Name:')).toBeInTheDocument();
        expect(react_1.screen.getByLabelText('Client Email:')).toBeInTheDocument();
        expect(react_1.screen.getByLabelText('Client Phone:')).toBeInTheDocument();
    });
    it('updates state values as a user types', () => __awaiter(void 0, void 0, void 0, function* () {
        const user = user_event_1.default.setup();
        const nameInput = react_1.screen.getByRole('textbox', {
            name: 'Client Name:',
        });
        // Check initial value
        expect(nameInput.value).toEqual('');
        // Simulate user typing
        yield user.type(nameInput, 'Johnny Bravo');
        console.log(react_1.screen.getByRole('textbox', {
            name: 'Client Name:',
        }));
        // Verify updated value after change event
        expect(nameInput.value).toEqual('Johnny Bravo');
    }));
});
