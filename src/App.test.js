import { render, screen } from '@testing-library/react';
import App from './App';
describe('App Component', () => {
  test('renders WeatherApp component', async () => {
    render(<App />);
    
    // Use waitFor to handle asynchronous rendering
    await waitFor(() => {
      const weatherElement = screen.getByText(/Humidity/i);
      expect(weatherElement).toBeInTheDocument();
    });
  });
});


