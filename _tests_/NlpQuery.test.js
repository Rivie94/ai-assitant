import { render, screen, fireEvent } from '@testing-library/react';
import NlpQuery from '../NlpQuery';

describe('NlpQuery Component', () => {
  it('should render the form', () => {
    render(<NlpQuery />);
    expect(screen.getByLabelText(/Query/i)).toBeInTheDocument();
  });

  it('should submit the form', () => {
    render(<NlpQuery />);
    const queryInput = screen.getByLabelText(/Query/i);
    const submitButton = screen.getByText(/Submit Query/i);

    fireEvent.change(queryInput, { target: { value: 'What is the weather like today?' } });
    fireEvent.click(submitButton);

    expect(screen.getByText(/NLP response:/i)).toBeInTheDocument();
  });
});
