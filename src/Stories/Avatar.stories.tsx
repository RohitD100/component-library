import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '../components/Avatar/Avatar';

const meta = {
  title: 'Component/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'busy'],
    },
    src: { control: 'text' },
    initials: { control: 'text' },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    src: 'https://picsum.photos/200/200',
    alt: 'Kitten Avatar',
    size: 'md',
    shape: 'circle',
    status: 'online',
  },
};

export const SquareShape: Story = {
  args: {
    src: 'https://picsum.photos/250/250',
    alt: 'Square Avatar',
    size: 'lg',
    shape: 'square',
    status: 'online',
  },
};
