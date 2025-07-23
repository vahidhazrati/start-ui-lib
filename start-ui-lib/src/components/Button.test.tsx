import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import test from 'node:test';
import { expect } from 'storybook/internal/test';

test('renders button with label', () => {
  render(<Button label="Click Me" />);
  expect(screen.getByText('Click Me')).toBeInTheDocument();
});