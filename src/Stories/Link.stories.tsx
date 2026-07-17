import type { Meta, StoryObj } from "@storybook/react-vite";
import Link from "../components/Link/Link";
import { Icon } from "../components/Icon/Icon";

const meta = {
  title: "Component/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "secondary", "inline", "underlined"],
    },
    external: { control: "boolean" },
    openInNewTab: { control: "boolean" },
    disabled: { control: "boolean" },
    showExternalIndicator: { control: "boolean" },
    iconPlacement: {
      control: "select",
      options: ["leading", "trailing"],
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/",
    children: "Internal link",
    variant: "default",
  },
};

export const Primary: Story = {
  args: {
    href: "https://example.com",
    children: "External link",
    variant: "primary",
    external: true,
  },
};

export const WithLeadingIcon: Story = {
  args: {
    href: "/dashboard",
    children: "Dashboard",
    variant: "secondary",
    icon: <Icon icon="user" size="sm" />,
    iconPlacement: "leading",
  },
};

export const WithTrailingIcon: Story = {
  args: {
    href: "/settings",
    children: "Settings",
    variant: "secondary",
    icon: <Icon icon="settings" size="sm" />,
    iconPlacement: "trailing",
  },
};

export const Disabled: Story = {
  args: {
    href: "/disabled",
    children: "Disabled link",
    variant: "default",
    disabled: true,
  },
};

export const Inline: Story = {
  args: {
    href: "https://example.com/docs",
    children: "Inline link",
    variant: "inline",
    external: true,
  },
};

export const Underlined: Story = {
  args: {
    href: "https://example.com/help",
    children: "Underlined link",
    variant: "underlined",
    external: true,
  },
};
