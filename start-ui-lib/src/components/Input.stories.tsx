import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Input from './input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Interactive: Story = {
  render: (args) => {
    const [text, setText] = useState('');
    return <Input {...args} value={text} onChange={setText} />;
  },
  args: {
    label: 'Your Name',
    placeholder: 'Type here...',
    disabled: false,
  },
};