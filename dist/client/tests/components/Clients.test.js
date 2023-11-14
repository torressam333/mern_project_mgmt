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
const Clients_1 = __importDefault(require("../../src/components/Clients"));
const clientQueries_1 = require("../../src/queries/clientQueries");
const mockClients = [
    {
        id: '1',
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '+1234567890',
    },
    {
        id: '2',
        name: 'Jane Doe',
        email: 'janedoe@example.com',
        phone: '+9876543210',
    },
];
const clientMock = {
    request: {
        query: clientQueries_1.GET_CLIENTS,
        variables: {},
    },
    error: new Error('Something went wrong'),
};
describe('Clients component', () => {
    it('should render loader component when data is loading', () => {
        (0, react_1.render)(<testing_1.MockedProvider mocks={[
                {
                    request: { query: clientQueries_1.GET_CLIENTS },
                    result: { data: { loading: true } },
                },
            ]}>
        <Clients_1.default />
      </testing_1.MockedProvider>);
        expect(react_1.screen.getByRole('status')).toBeInTheDocument();
    });
    it('should render an error message if the query fails', () => __awaiter(void 0, void 0, void 0, function* () {
        (0, react_1.render)(<testing_1.MockedProvider mocks={[clientMock]} addTypename={false}>
        <Clients_1.default />
      </testing_1.MockedProvider>);
        expect(yield react_1.screen.findByText('Something went wrong')).toBeInTheDocument();
    }));
    it('should render clients table when data is successfully fetched', () => __awaiter(void 0, void 0, void 0, function* () {
        (0, react_1.render)(<testing_1.MockedProvider mocks={[
                {
                    request: { query: clientQueries_1.GET_CLIENTS },
                    result: { data: { clients: mockClients } },
                },
            ]}>
        <Clients_1.default />
      </testing_1.MockedProvider>);
        yield (0, react_1.waitFor)(() => react_1.screen.getByTestId('clients-header'));
        expect(react_1.screen.getByTestId('clients-header')).toBeInTheDocument();
        expect(react_1.screen.getByTestId('clients-table')).toBeInTheDocument();
        // One row for header and two for clients
        expect(react_1.screen.getAllByRole('row')).toHaveLength(3);
    }));
});
