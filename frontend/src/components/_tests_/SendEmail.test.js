import { render, screen, fireEvent } from '@testing-library/react';
import SendEmail from '../SendEmail';

describe('SendEmail Component', () => {
  it('should render the form', () => {
    render(<SendEmail />);
    expect(screen.getByLabelText(/To/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Text/i)).toBeInTheDocument();
  });

  it('should submit the form', () => {
    render(<SendEmail />);
    const toInput = screen.getByLabelText(/To/i);
    const subjectInput = screen.getByLabelText(/Subject/i);
    const textInput = screen.getByLabelText(/Text/i);
    const submitButton = screen.getByText(/Send Email/i);

    fireEvent.change(toInput, { target: { value: 'recipient@example.com' } });
    fireEvent.change(subjectInput, { target: { value: 'Test Email' } });
    fireEvent.change(textInput, { target: { value: 'This is a test email.' } });
    fireEvent.click(submitButton);

    expect(screen.getByText(/Email sent successfully/i)).toBeInTheDocument();
  });
});
