import { render, screen } from '@testing-library/react';
import App from './App';
describe('App Component', () => {
  test('renders WeatherApp component', () => {
    render(<App />);
    
    // Check for an element that you know is rendered by WeatherApp
    const weatherElement = screen.getByText(/Humidity/i);
    expect(weatherElement).toBeInTheDocument();
  });
});