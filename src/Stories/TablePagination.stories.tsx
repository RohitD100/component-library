import type { Meta, StoryObj } from "@storybook/react-vite";
import TablePagination from "../components/TableWithPagination/TablePagination";
import { createEditAction, createDeleteAction } from "../components/TableWithPagination/helper";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

const meta = {
  title: "Component/TablePagination",
  component: TablePagination<User>,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    pageSize: { control: "number" },
    search: { control: "boolean" },
    highlight: { control: "boolean" },
    select: { control: "boolean" },
    enableBulkActions: { control: "boolean" },
    sortDirection: {
      control: "select",
      options: ["none", "asc", "desc"],
    },
  },
} satisfies Meta<typeof TablePagination<User>>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns: { key: keyof User; label: string }[] = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "role", label: "Role" },
];

const data: User[] = [
  { id: "1", name: "Aditya Sharma", email: "aditya@example.com", role: "Admin" },
  { id: "2", name: "John Doe", email: "john@example.com", role: "Developer" },
  { id: "3", name: "Jane Smith", email: "jane@example.com", role: "Designer" },
  { id: "4", name: "Priya Patel", email: "priya@example.com", role: "Manager" },
  { id: "5", name: "Rahul Kumar", email: "rahul@example.com", role: "Tester" },
];

export const Default: Story = {
  args: {
    columns,
    data,
    keyExtractor: (row) => row.id,
    pageSize: 3,
    search: false,
    select: false,
    highlight: false,
    enableBulkActions: false,
    sortKey: "name",
    sortDirection: "none",
  },
};

export const WithSearch: Story = {
  args: {
    columns,
    data,
    keyExtractor: (row) => row.id,
    pageSize: 3,
    search: true,
    highlight: true,
    select: false,
    enableBulkActions: false,
    sortKey: "name",
    sortDirection: "none",
  },
};

export const WithSelectionAndBulkActions: Story = {
  args: {
    columns,
    data,
    keyExtractor: (row) => row.id,
    pageSize: 3,
    search: true,
    highlight: true,
    select: true,
    enableBulkActions: true,
    bulkActions: [
      createEditAction((rows) => alert("Edit: " + rows.map(r => r.name).join(", "))),
      createDeleteAction((keys) => alert("Delete: " + keys.join(", "))),
    ],
    sortKey: "name",
    sortDirection: "none",
  },
};

export const SortedAsc: Story = {
  args: {
    columns,
    data,
    keyExtractor: (row) => row.id,
    pageSize: 3,
    search: false,
    select: false,
    sortKey: "name",
    sortDirection: "asc",
  },
};

export const SortedDesc: Story = {
  args: {
    columns,
    data,
    keyExtractor: (row) => row.id,
    pageSize: 3,
    search: false,
    select: false,
    sortKey: "name",
    sortDirection: "desc",
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    keyExtractor: (row) => row.id,
    pageSize: 3,
    emptyState: "No users available.",
    search: true,
    select: true,
    enableBulkActions: true,
    sortKey: "name",
    sortDirection: "none",
  },
};
