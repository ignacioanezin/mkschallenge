import { Meta, StoryObj } from '@storybook/react';
import { OverviewCard } from './OverviewCard'; // Assuming this is your OverviewCard component
import FacebookIcon from '../../assets/icon-facebook.svg';

const meta: Meta = {
  title: 'Components/OverviewCard',
  component: OverviewCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    socialIconUrl: { control: 'text' },
    statistic: { control: 'text' },
    counter: { control: 'number' },
    porcentage: { control: 'text' },
    onClick: { action: 'clicked' },
  },
  args: {
    socialIconUrl: FacebookIcon,
    statistic: 'Page Views',
    counter: 87,
    porcentage: '▲ 3%',
    onClick: () => alert('Button clicked'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const OverviewCardExample: Story = {
  
};