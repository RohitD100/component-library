import type { Meta, StoryObj } from '@storybook/react';
import InfoItem from '../components/InfoItem/InfoItem';

const meta = {
  title: 'Component/InfoItem',
  component: InfoItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'subtle', 'highlight'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    label: { control: 'text' },
    value: { control: 'text' },
    icon: { control: 'text' },
  },
} satisfies Meta<typeof InfoItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Username',
    value: 'gyan123',
    variant: 'default',
    size: 'md',
    orientation: 'vertical',
  },
};

export const Subtle: Story = {
  args: {
    label: 'Email',
    value: 'gyan@example.com',
    variant: 'subtle',
    size: 'md',
    orientation: 'horizontal',
  },
};

export const Highlight: Story = {
  args: {
    label: 'Plan',
    value: 'Premium',
    variant: 'highlight',
    size: 'lg',
    orientation: 'vertical',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Location',
    value: 'Mumbai, India',
    variant: 'default',
    size: 'md',
    orientation: 'horizontal',
    icon: '📍',
  },
};

export const SmallSize: Story = {
  args: {
    label: 'ID',
    value: '001',
    variant: 'default',
    size: 'sm',
    orientation: 'vertical',
  },
};
