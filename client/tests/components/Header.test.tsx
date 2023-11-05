import { render } from '@testing-library/react';
import Header from '../../src/components/Header';

test('Header component renders correctly', () => {
  const { getByAltText, getByText } = render(<Header />);

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
