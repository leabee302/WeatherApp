import { render, screen } from '@testing-library/react';
import App from './App';
test('renders WeatherApp component', () => {
  render(<App />);
  const weatherAppElement = screen.getByTestId('weather-app');
  expect(weatherAppElement).toBeInTheDocument();
});