import { render, screen } from '@testing-library/react';
import SignIn from './SignIn';

test('renders learn react link', () => {
  render(<SignIn />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
