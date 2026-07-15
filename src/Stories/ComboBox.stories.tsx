import type { Meta, StoryObj } from '@storybook/react';
import ComboBox from '../components/ComboBox/ComboBox';

const meta = {
  title: 'Component/ComboBox',
  component: ComboBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    value: { control: 'text' },
  },
} satisfies Meta<typeof ComboBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleOptions = [
  { label: 'Option One', value: 'one' },
  { label: 'Option Two', value: 'two' },
  { label: 'Option Three', value: 'three' },
  { label: 'Option Four', value: 'four' },
];

export const Default: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Select an option...',
  },
};

export const WithPreselectedValue: Story = {
  args: {
    options: sampleOptions,
    value: 'two',
    placeholder: 'Choose...',
  },
};

export const Disabled: Story = {
  args: {
    options: sampleOptions,
    disabled: true,
    placeholder: 'Disabled ComboBox',
  },
};

export const CustomPlaceholder: Story = {
  args: {
    options: sampleOptions,
    placeholder: 'Pick your favorite option',
  },
};

export const LongList: Story = {
  args: {
    options: Array.from({ length: 15 }, (_, i) => ({
      label: `Item ${i + 1}`,
      value: `item-${i + 1}`,
    })),
    placeholder: 'Scroll through options...',
  },
};
