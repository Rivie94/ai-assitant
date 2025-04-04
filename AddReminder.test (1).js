import { render, screen, fireEvent } from '@testing-library/react';
import AddReminder from '../AddReminder';

describe('AddReminder Component', () => {
  it('should render the form', () => {
    render(<AddReminder />);
    expect(screen.getByLabelText(/Task/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Reminder Date/i)).toBeInTheDocument();
  });

  it('should submit the form', () => {
    render(<AddReminder />);
    const taskInput = screen.getByLabelText(/Task/i);
    const dateInput = screen.getByLabelText(/Reminder Date/i);
    const submitButton = screen.getByText(/Add Reminder/i);

    fireEvent.change(taskInput, { target: { value: 'task_id' } });
    fireEvent.change(dateInput, { target: { value: '2025-04-05T10:00:00Z' } });
    fireEvent.click(submitButton);

    expect(screen.getByText(/Reminder added successfully/i)).toBeInTheDocument();
  });
});
