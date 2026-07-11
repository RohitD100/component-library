import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/Card/Card';

const meta = {
  title: 'Component/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['dark', 'light'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    badgeVariant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger'],
    },
    title: { control: 'text' },
    description: { control: 'text' },
    imageUrl: { control: 'text' },
    actionLabel: { control: 'text' },
    secondaryLabel: { control: 'text' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkWithImage: Story = {
  args: {
    title: 'Dark Card',
    description: 'This is a dark variant card with an image.',
    imageUrl: 'https://placekitten.com/400/200',
    badge: 'Featured',
    badgeVariant: 'default',
    variant: 'dark',
    size: 'md',
    actionLabel: 'Buy Now',
    secondaryLabel: 'Learn More',
  },
};

export const LightWithBadge: Story = {
  args: {
    title: 'Light Card',
    description: 'This card uses the light variant with a badge.',
    badge: 'Success',
    badgeVariant: 'success',
    variant: 'light',
    size: 'md',
    actionLabel: 'Continue',
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Card with Footer',
    description: 'This card has a custom footer node.',
    variant: 'light',
    size: 'lg',
    footer: <div className="text-sm text-gray-500">Custom footer content</div>,
  },
};

export const SmallWarning: Story = {
  args: {
    title: 'Warning Card',
    description: 'This is a small card with warning badge.',
    badge: 'Warning',
    badgeVariant: 'warning',
    variant: 'dark',
    size: 'sm',
    actionLabel: 'Fix Issue',
  },
};

export const LargeDanger: Story = {
  args: {
    title: 'Danger Card',
    description: 'This large card highlights a danger state.',
    badge: 'Critical',
    badgeVariant: 'danger',
    variant: 'light',
    size: 'lg',
    actionLabel: 'Resolve',
    secondaryLabel: 'Ignore',
  },
};
