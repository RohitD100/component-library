import type { Meta, StoryObj } from '@storybook/react';
import Select from '../components/Select/Select';

const meta = {
  title: 'Component/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    multiSelect: { control: 'boolean' },
    clearable: { control: 'boolean' },
    disabled: { control: 'boolean' },
    validationState: {
      control: 'select',
      options: ['default', 'error', 'success'],
    },
    placeholder: { control: 'text' },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const simpleOptions = [
  { label: 'Option One', value: 'one' },
  { label: 'Option Two', value: 'two' },
  { label: 'Option Three', value: 'three' },
];

const groupedOptions = [
  {
    label: 'Group A',
    options: [
      { label: 'Alpha', value: 'alpha' },
      { label: 'Beta', value: 'beta' },
    ],
  },
  {
    label: 'Group B',
    options: [
      { label: 'Gamma', value: 'gamma' },
      { label: 'Delta', value: 'delta', disabled: true },
    ],
  },
];

export const Default: Story = {
  args: {
    options: simpleOptions,
    placeholder: 'Select an option',
    onChange: (val) => console.log('Selected:', val),
  },
};

export const WithPreselectedValue: Story = {
  args: {
    options: simpleOptions,
    value: 'two',
    onChange: (val) => console.log('Selected:', val),
  },
};

export const MultiSelect: Story = {
  args: {
    options: simpleOptions,
    multiSelect: true,
    value: ['one', 'three'],
    clearable: true,
    onChange: (val) => console.log('Selected:', val),
  },
};

export const GroupedOptions: Story = {
  args: {
    options: groupedOptions,
    placeholder: 'Select from groups',
    onChange: (val) => console.log('Selected:', val),
  },
};

export const Disabled: Story = {
  args: {
    options: simpleOptions,
    disabled: true,
    placeholder: 'Disabled Select',
    onChange: (val) => console.log('Selected:', val),
  },
};

export const ValidationError: Story = {
  args: {
    options: simpleOptions,
    validationState: 'error',
    placeholder: 'Select with error',
    onChange: (val) => console.log('Selected:', val),
  },
};

export const ValidationSuccess: Story = {
  args: {
    options: simpleOptions,
    validationState: 'success',
    placeholder: 'Select with success',
    onChange: (val) => console.log('Selected:', val),
  },
};
