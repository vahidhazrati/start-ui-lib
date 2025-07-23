import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import Input from './input';

describe('Input', () => {
  it('renders with label and placeholder', () => {
    render(<Input label="Username" value="" onChange={() => {}} placeholder="Enter name" />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  it('calls onChange when text is entered', () => {
    const handleChange = vi.fn();
    render(<Input label="Email" value="" onChange={handleChange} />);
    const input = screen.getByLabelText('Email');
    fireEvent.change(input, { target: { value: 'hello@example.com' } });
    expect(handleChange).toHaveBeenCalledWith('hello@example.com');
  });
});