import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '../components/Icon/Icon';
import { Icons } from '../components/Icon/IconsSvg';
import type { IconName } from '../components/Icon/types';

const meta = {
  title: 'Component/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(Icons) as IconName[],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    color: { control: 'color' },
    colorClass: { control: 'text' },
    label: { control: 'text' },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'check',
    size: 'md',
    label: 'Check Icon',
  },
};

export const Sizes: Story = {
  args: {
    icon: 'check', 
  },
  render: () => (
    <div className="flex gap-4 items-center">
      <Icon icon="check" size="xs" label="xs" />
      <Icon icon="check" size="sm" label="sm" />
      <Icon icon="check" size="md" label="md" />
      <Icon icon="check" size="lg" label="lg" />
      <Icon icon="check" size="xl" label="xl" />
      <Icon icon="check" size="2xl" label="2xl" />
    </div>
  ),
};

export const Colors: Story = {
  args: {
    icon: 'check', 
  },
  render: () => (
    <div className="flex gap-4 items-center">
      <Icon icon="check" size="md" color="#8b5cf6" label="Brand Purple" />
      <Icon icon="check" size="md" color="#22c55e" label="Green" />
      <Icon icon="check" size="md" color="#ef4444" label="Red" />
      <Icon icon="check" size="md" color="#3b82f6" label="Blue" />
    </div>
  ),
};

export const AllIcons: Story = {
  args: {
    icon: 'check', 
  },
  render: () => (
    <div className="grid grid-cols-6 gap-6">
      {Object.keys(Icons).map((name) => (
        <div key={name} className="flex flex-col items-center gap-2">
          <Icon icon={name as IconName} size="lg" />
          <span className="text-xs">{name}</span>
        </div>
      ))}
    </div>
  ),
};
