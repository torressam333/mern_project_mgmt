"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const Header_1 = __importDefault(require("../../src/components/Header"));
test('Header component renders correctly', () => {
    const { getByAltText, getByText } = (0, react_1.render)(<Header_1.default />);
    // Check if the navigation bar with the "navbar" class is rendered
    const navbar = document.querySelector('.navbar');
    expect(navbar).toBeInTheDocument();
    // Check if the GraphQL logo is present and has the correct alt text
    const gqlLogo = getByAltText('gql logo');
    expect(gqlLogo).toBeInTheDocument();
    // Check if the project name "MERN Project Mgmt" is rendered
    const projectName = getByText('MERN Project Mgmt');
    expect(projectName).toBeInTheDocument();
});
