import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from "../components/Input/Input";
import { Icon } from "../components/Icon/Icon";

const meta = {
  title: "Component/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["light", "dark"],
    },
    value: { control: "text" },
    placeholder: { control: "text" },
    className: { control: "text" },
    style: { control: "object" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    variant: "light",
    value: "",
    placeholder: "Enter text...",
    onChange: (e) => console.log("Changed:", e.target.value),
  },
};

export const WithLeftIcon: Story = {
  args: {
    size: "md",
    variant: "light",
    value: "",
    placeholder: "Search...",
    leftIcon: <Icon icon="search" size="sm" />,
    onChange: (e) => console.log("Changed:", e.target.value),
  },
};

export const WithRightIcon: Story = {
  args: {
    size: "md",
    variant: "light",
    value: "",
    placeholder: "Clearable input...",
    rightIcon: <Icon icon="close" size="sm" />,
    onChange: (e) => console.log("Changed:", e.target.value),
  },
};

export const DarkVariant: Story = {
  args: {
    size: "md",
    variant: "dark",
    value: "",
    placeholder: "Dark mode input",
    onChange: (e) => console.log("Changed:", e.target.value),
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <Input
        size="sm"
        variant="light"
        value=""
        placeholder="Small size"
        onChange={() => {}}
      />
      <Input
        size="md"
        variant="light"
        value=""
        placeholder="Medium size"
        onChange={() => {}}
      />
      <Input
        size="lg"
        variant="light"
        value=""
        placeholder="Large size"
        onChange={() => {}}
      />
    </div>
  ),
  args: {
    value: "",
    onChange: () => {},
  },
};
