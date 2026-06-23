
// Select.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Select from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

const options = [
  { label: "India", value: "india" },
  { label: "USA", value: "usa" },
  { label: "UK", value: "uk" },
  { label: "Canada", value: "canada" },
];

const groupedOptions = [
  {
    label: "Asia",
    options: [
      { label: "India", value: "india" },
      { label: "Japan", value: "japan" },
    ],
  },
  {
    label: "Europe",
    options: [
      { label: "Germany", value: "germany" },
      { label: "France", value: "france" },
    ],
  },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <Select
        options={options}
        value={value}
        onChange={(value) => setValue(value as string)}
      />
    );
  },
};

export const MultiSelect: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);

    return (
      <Select
        multiSelect
        options={options}
        value={value}
        onChange={(value) => setValue(value as string[])}
      />
    );
  },
};

export const Searchable: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <Select
        searchable
        options={options}
        value={value}
        onChange={(value) => setValue(value as string)}
      />
    );
  },
};

export const Clearable: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <Select
        clearable
        options={options}
        value={value}
        onChange={(value) => setValue(value as string)}
      />
    );
  },
};

export const GroupedOptions: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <Select
        options={groupedOptions}
        value={value}
        onChange={(value) => setValue(value as string)}
      />
    );
  },
};

export const ErrorState: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <Select
        validationState="error"
        options={options}
        value={value}
        onChange={(value) => setValue(value as string)}
      />
    );
  },
};

export const SuccessState: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <Select
        validationState="success"
        options={options}
        value={value}
        onChange={(value) => setValue(value as string)}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    options,
    value: "",
    onChange: () => {},
  },
};

export const DarkTheme: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <Select
        theme="dark"
        options={options}
        value={value}
        onChange={(value) => setValue(value as string)}
      />
    );
  },
};

