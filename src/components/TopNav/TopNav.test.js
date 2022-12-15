import { render, screen } from '@testing-library/react';
import TopNav from './TopNav';

test('renders learn react link', () => {
  render(<TopNav />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
