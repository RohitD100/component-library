import type { Meta, StoryObj } from '@storybook/react';
import HelpPopup from '../components/HelpPopup/HelpPopup';

const meta = {
  title: 'Component/HelpPopup',
  component: HelpPopup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    triggerType: {
      control: 'select',
      options: ['click', 'hover'],
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    variant: {
      control: 'select',
      options: ['default', 'info', 'warning', 'tip'],
    },
    defaultOpen: { control: 'boolean' },
    title: { control: 'text' },
    content: { control: 'text' },
  },
} satisfies Meta<typeof HelpPopup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Need Help?',
    content: 'This is a default help popup.',
    variant: 'default',
    placement: 'bottom',
    triggerType: 'click',
  },
};

export const Info: Story = {
  args: {
    title: 'Information',
    content: 'This popup provides additional info.',
    variant: 'info',
    placement: 'right',
    triggerType: 'click',
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning',
    content: 'Be careful with this action!',
    variant: 'warning',
    placement: 'top',
    triggerType: 'hover',
  },
};

export const Tip: Story = {
  args: {
    title: 'Quick Tip',
    content: 'You can hover to see tips.',
    variant: 'tip',
    placement: 'left',
    triggerType: 'hover',
  },
};

export const DefaultOpen: Story = {
  args: {
    title: 'Always Open',
    content: 'This popup starts open by default.',
    variant: 'info',
    placement: 'bottom',
    triggerType: 'click',
    defaultOpen: true,
  },
};
