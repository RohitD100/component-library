import type { Meta, StoryObj } from '@storybook/react-vite';
import Alert from '../components/Alert/Alert'; 

const meta = {
  title: 'Component/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'success',
        'error',
        'warning',
        'info',
        'yaracirclesuccess',
        'yaracirclefail',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    showIcon: { control: 'boolean' },
    dismissible: { control: 'boolean' },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    title: 'Success!',
    message: 'Your operation completed successfully.',
    variant: 'success',
    size: 'md',
    showIcon: true,
    dismissible: true,
  },
};

export const Error: Story = {
  args: {
    title: 'Error!',
    message: 'Something went wrong.',
    variant: 'error',
    size: 'md',
    showIcon: true,
    dismissible: true,
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning!',
    message: 'Please check your inputs.',
    variant: 'warning',
    size: 'md',
    showIcon: true,
  },
};

export const Info: Story = {
  args: {
    title: 'Info',
    message: 'This is an informational alert.',
    variant: 'info',
    size: 'md',
    showIcon: true,
  },
};

export const YaraCircleSuccess: Story = {
  args: {
    title: 'Yara Success',
    message: 'Custom success style alert.',
    variant: 'yaracirclesuccess',
    size: 'lg',
    showIcon: true,
  },
};

export const YaraCircleFail: Story = {
  args: {
    title: 'Yara Fail',
    message: 'Custom fail style alert.',
    variant: 'yaracirclefail',
    size: 'lg',
    showIcon: true,
    dismissible: true,
  },
};
