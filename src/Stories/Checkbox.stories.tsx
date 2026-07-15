import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components/Checkbox/Checkbox';

const meta = {
  title: 'Component/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    description: { control: 'text' },
    error: { control: 'text' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Default Checkbox',
    description: 'This is a medium-sized checkbox.',
    size: 'md',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Checkbox',
    checked: true,
    size: 'md',
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate Checkbox',
    indeterminate: true,
    size: 'md',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Checkbox',
    disabled: true,
    size: 'md',
  },
};

export const WithError: Story = {
  args: {
    label: 'Checkbox with Error',
    error: 'You must agree to continue',
    size: 'md',
  },
};

export const LargeWithDescription: Story = {
  args: {
    label: 'Large Checkbox',
    description: 'This checkbox has a description text.',
    size: 'lg',
  },
};
