import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Get Early Access and Simplify Your Real Estate Management Today! link', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Get Early Access/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Real Enquiries text', async () => {
  render(<App />);
  const textElements = await screen.findAllByText(/Real Enquiries/i);
  expect(textElements.length).toBeGreaterThan(0);
});
