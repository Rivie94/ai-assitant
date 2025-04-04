import { render, screen, fireEvent } from '@testing-library/react';
import GoogleCalendar from '../GoogleCalendar';

describe('GoogleCalendar Component', () => {
  it('should render the auth button', () => {
    render(<GoogleCalendar />);
    expect(screen.getByText(/Authorize Google Calendar/i)).toBeInTheDocument();
  });

  it('should fetch and display events', () => {
    render(<GoogleCalendar />);
    const authButton = screen.getByText(/Authorize Google Calendar/i);
    fireEvent.click(authButton);

    // Mock the API call and event fetching
    // Example code to mock the API response
    // const events = [{ id: 1, summary: 'Event 1' }, { id: 2, summary: 'Event 2' }];
    // mockFetchEvents.mockResolvedValue(events);

    expect(screen.getByText(/Event 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Event 2/i)).toBeInTheDocument();
  });
});
