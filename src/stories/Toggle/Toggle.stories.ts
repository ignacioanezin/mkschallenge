import { Meta, StoryObj } from '@storybook/react';
import Toggle from './Toggle'; // Assuming this is your Toggle component

const meta: Meta = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    initialValue: { control: 'boolean' },
    onChange: { action: 'toggled' },
  },
  args: {
    initialValue: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ToggleExample: Story = {
  
};
