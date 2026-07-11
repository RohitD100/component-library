import type { Meta, StoryObj } from '@storybook/react';
import DatePicker from '../components/DatePicker/DatePicker';

const meta = {
  title: 'Example/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    format: {
      control: 'select',
      options: ['DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD'],
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    yearRange: { control: 'number' },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Select a date...',
    format: 'DD/MM/YYYY',
    onChange: (date) => console.log('Selected date:', date),
  },
};

export const WithPreselectedValue: Story = {
  args: {
    value: new Date(2026, 6, 9), // July 9, 2026
    format: 'DD/MM/YYYY',
    onChange: (date) => console.log('Selected date:', date),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled DatePicker',
    onChange: (date) => console.log('Selected date:', date),
  },
};

export const WithMinMaxDates: Story = {
  args: {
    minDate: new Date(2026, 0, 1), // Jan 1, 2026
    maxDate: new Date(2026, 11, 31), // Dec 31, 2026
    placeholder: 'Select within 2026',
    onChange: (date) => console.log('Selected date:', date),
  },
};

export const WithCustomDates: Story = {
  args: {
    customDates: [
      { date: new Date(2026, 6, 15), label: 'Holiday', highlight: true },
      { date: new Date(2026, 6, 20), label: 'Blocked', disabled: true },
    ],
    placeholder: 'Select a date with custom markers',
    onChange: (date) => console.log('Selected date:', date),
  },
};

export const DifferentFormat: Story = {
  args: {
    format: 'YYYY-MM-DD',
    placeholder: 'YYYY-MM-DD format',
    onChange: (date) => console.log('Selected date:', date),
  },
};
