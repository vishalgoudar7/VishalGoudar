import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loading state', () => {
  render(<App />);
  const loadingState = screen.getByText(/loading portfolio data/i);
  expect(loadingState).toBeInTheDocument();
});
