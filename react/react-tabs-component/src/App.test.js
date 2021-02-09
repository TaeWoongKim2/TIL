import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title written "Tabs Demo"', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tabs Demo/i);
  expect(linkElement).toBeInTheDocument();
});
