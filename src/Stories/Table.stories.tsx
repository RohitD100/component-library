import type { Meta, StoryObj } from "@storybook/react-vite";
import Table from "../components/Table/Table"

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

const meta = {
  title: "Component/Table",
  component: Table<User>, // ✅ tell Storybook this Table is for User rows
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "striped", "bordered"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
    },
    emptyMessage: { control: "text" },
    className: { control: "text" },
    style: { control: "object" },
  },
} satisfies Meta<typeof Table<User>>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns = [
  { key: "name", header: "Name" },
  { key: "email", header: "Email" },
  { key: "role", header: "Role" },
  { key: "status", header: "Status" },
];

const data: User[] = [
  {
    id: "1",
    name: "Aditya Sharma",
    email: "aditya@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: "2",
    name: "John Doe",
    email: "john@example.com",
    role: "Developer",
    status: "Inactive",
  },
  {
    id: "3",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Designer",
    status: "Active",
  },
];

export const Default: Story = {
  args: {
    columns,
    data,
    keyExtractor: (row ) => row.id, 
    variant: "default",
    size: "md",
    theme: "light",
  },
};

export const Striped: Story = {
  args: {
    columns,
    data,
    keyExtractor: (row: User) => row.id,
    variant: "striped",
    size: "md",
    theme: "light",
  },
};

export const Bordered: Story = {
  args: {
    columns,
    data,
    keyExtractor: (row) => row.id,
    variant: "bordered",
    size: "md",
    theme: "dark",
  },
};

export const SmallSize: Story = {
  args: {
    columns,
    data,
    keyExtractor: (row) => row.id,
    size: "sm",
    theme: "light",
  },
};

export const LargeSize: Story = {
  args: {
    columns,
    data,
    keyExtractor: (row) => row.id,
    size: "lg",
    theme: "dark",
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    keyExtractor: (row) => row.id,
    emptyMessage: "No users found.",
    theme: "light",
  },
};
