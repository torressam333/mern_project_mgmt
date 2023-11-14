"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const testing_1 = require("@apollo/client/testing");
const Clients_1 = __importStar(require("../../src/components/Clients"));
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
        query: Clients_1.GET_CLIENTS,
        variables: {},
    },
    error: new Error('Something went wrong'),
};
describe('Clients component', () => {
    it('should render loading message when data is loading', () => {
        (0, react_1.render)(<testing_1.MockedProvider mocks={[
                {
                    request: { query: Clients_1.GET_CLIENTS },
                    result: { data: { loading: true } },
                },
            ]}>
        <Clients_1.default />
      </testing_1.MockedProvider>);
        expect(react_1.screen.getByText('Loading...')).toBeInTheDocument();
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
                    request: { query: Clients_1.GET_CLIENTS },
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
