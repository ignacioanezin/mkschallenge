import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Chart, ChartProps } from './Chart'; 

const meta: Meta<ChartProps> = {
  title: "Components/Chart",
  component: Chart,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', width: '400px', height: '300px' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    data: { control: { type: 'array' } },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ChartExample: Story = {
  args: {
    data: [
      { day: 1, followers: 10 },
      { day: 2, followers: 20 },
      { day: 3, followers: 35 },
      { day: 4, followers: 50 },
      { day: 5, followers: 42 },
      { day: 6, followers: 65 },
      { day: 7, followers: 80 },
    ],
  },
};