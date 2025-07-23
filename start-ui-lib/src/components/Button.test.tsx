import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders with correct label', () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('applies primary variant by default', () => {
    render(<Button label="Primary" />);
    const button = screen.getByText('Primary');
    expect(button.className).toContain('bg-blue-500');
  });

  it('applies outline variant correctly', () => {
    render(<Button label="Outline" variant="outline" />);
    const button = screen.getByText('Outline');
    expect(button.className).toContain('border-blue-500');
  });

  it('disables button when disabled is true', () => {
    render(<Button label="Disabled" disabled />);
    const button = screen.getByText('Disabled') as HTMLButtonElement;
    expect(button.disabled).toBe(true);
    expect(button.className).toContain('cursor-not-allowed');
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});