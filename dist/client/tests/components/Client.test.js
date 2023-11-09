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
const Clients_1 = __importDefault(require("../../src/components/Clients"));
test('Should render a table with all clients', () => __awaiter(void 0, void 0, void 0, function* () {
    // Render component
    (0, react_1.render)(<Clients_1.default />);
    // Wait for data to load
    yield react_1.screen.findByText('Fetching your clients...');
    // Expect the table to be rendered
    expect(react_1.screen.getByRole('table')).toBeInTheDocument();
}));
