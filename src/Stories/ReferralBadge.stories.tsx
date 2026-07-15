import type { Meta, StoryObj } from '@storybook/react';
import ReferralBadge from '../components/ReferralBadge/ReferralBadge';

const meta = {
  title: 'Component/ReferralBadge',
  component: ReferralBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'active', 'reward', 'expired'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    referralCode: { control: 'text' },
    label: { control: 'text' },
    showIcon: { control: 'boolean' },
  },
} satisfies Meta<typeof ReferralBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    referralCode: 'YARACIRCLE123',
    variant: 'default',
    size: 'md',
    showIcon: true,
  },
};

export const Active: Story = {
  args: {
    referralCode: 'YARACIRCLE456',
    variant: 'active',
    size: 'md',
    showIcon: true,
  },
};

export const Reward: Story = {
  args: {
    referralCode: 'YARACIRCLE789',
    variant: 'reward',
    size: 'lg',
    showIcon: true,
  },
};

export const Expired: Story = {
  args: {
    referralCode: 'YARACIRCLE000',
    variant: 'expired',
    size: 'sm',
    showIcon: true,
  },
};

export const CustomLabel: Story = {
  args: {
    referralCode: 'YARACIRCLE999',
    label: 'Special Invite',
    variant: 'active',
    size: 'md',
    showIcon: false,
  },
};
