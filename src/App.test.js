import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Join the Waiting List link', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Join the Waiting List/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Real Enquiries text', async () => {
  render(<App />);
  const textElements = await screen.findAllByText(/Real Enquiries/i);
  expect(textElements.length).toBeGreaterThan(0);
});
