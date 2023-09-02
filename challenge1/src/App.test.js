import { render, screen } from '@testing-library/react';
import App from './App';
import succcessedApp from './successedApp';

test('renders learn react link', () => {
  render(<App />);
  render(<succcessedApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
