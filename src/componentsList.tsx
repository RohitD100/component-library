/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import Button from "./components/Button/Button";
import { CircularLoader } from "./components/CircularLoader/CircularLoader";
import { LinearLoader } from "./components/LinearLoader/LinearLoader";
import Input from "./components/Input/Input";
import Alert from "./components/Alert/Alert";
import Avatar from "./components/Avatar/Avatar";
import ReferralBadge from "./components/ReferralBadge/ReferralBadge";
import Card from "./components/Card/Card";
import Sidebar from "./components/Sidebar/Sidebar";
import InfoItem from "./components/InfoItem/InfoItem";
import HelpPopup from "./components/HelpPopup/HelpPopup";
import ComboBox from "./components/ComboBox/ComboBox";
import DatePicker from "./components/DatePicker/DatePicker";
import Table from "./components/Table/Table";
import { Checkbox } from "./components/Checkbox/Checkbox";
import Select from "./components/Select/Select";
import Icon from "./components/Icon/Icon";
import Link from "./components/Link/Link";

const frameworkOptions = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Svelte", value: "svelte" },
  { label: "Angular", value: "angular" },
  { label: "SolidJS", value: "solidjs" },
];

type TableRow = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
};

function ComboBoxDemo() {
  const [selected, setSelected] = useState<string | undefined>(undefined);

  return (
    <ComboBox
      options={frameworkOptions}
      value={selected}
      onChange={setSelected}
      placeholder="Select a framework..."
    />
  );
}

function DatePickerDemo() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [dateMMDD, setDateMMDD] = useState<Date | undefined>(undefined);
  const [dateISO, setDateISO] = useState<Date | undefined>(undefined);

  return (
    <div className="flex flex-col gap-4 max-w-xs">
      <DatePicker
        value={date}
        onChange={setDate}
        format="DD/MM/YYYY"
        placeholder="DD/MM/YYYY"
      />

      <DatePicker
        value={dateMMDD}
        onChange={setDateMMDD}
        format="MM/DD/YYYY"
        placeholder="MM/DD/YYYY"
      />

      <DatePicker
        value={dateISO}
        onChange={setDateISO}
        format="YYYY-MM-DD"
        placeholder="YYYY-MM-DD"
      />

      <DatePicker
        value={date}
        onChange={setDate}
        placeholder="With min/max"
        minDate={new Date()}
      />

      <DatePicker placeholder="Disabled" disabled />
    </div>
  );
}

function TableDemo() {
  const columns = [
    { key: "name", header: "Name" },
    { key: "email", header: "Email" },
    { key: "role", header: "Role" },
    {
      key: "status",
      header: "Status",
      render: (row: TableRow) => (
        <span
          className={`px-2 py-0.5 rounded-full text-xs font-medium ${
            row.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  const data: TableRow[] = [
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

  return (
    <div className="flex flex-col gap-6">
      <Table
        columns={columns}
        data={data}
        keyExtractor={(row) => row.id}
        variant="default"
        size="md"
        theme="light"
      />

      <Table
        columns={columns}
        data={data}
        keyExtractor={(row) => row.id}
        variant="striped"
        size="sm"
        theme="dark"
      />

      <Table
        columns={[]}
        data={[]}
        keyExtractor={(row: TableRow) => row.id}
        emptyMessage="No users found."
        theme="light"
      />
    </div>
  );
}

function SelectDemo() {
  const [selected, setSelected] = useState<string[]>(["india", "usa"]);

  return (
    <Select
      options={[
        { label: "India", value: "india" },
        { label: "USA", value: "usa" },
        { label: "UK", value: "uk" },
        { label: "Canada", value: "canada" },
      ]}
      value={selected}
      onChange={(value) => setSelected(value as string[])}
      placeholder="Select Countries"
      multiSelect
      clearable
    />
  );
}

function CheckboxDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <Checkbox label="Unchecked" checked={false} onChange={() => {}} />

      <Checkbox label="Checked" checked onChange={() => {}} />

      <Checkbox label="Disabled" disabled />

      <Checkbox label="Disabled checked" checked disabled />

      <Checkbox
        label="With description"
        description="This is a helper text below the label."
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />

      <Checkbox label="With error" error="This field is required." />

      <div className="flex gap-4 items-center">
        <Checkbox label="Small" size="sm" defaultChecked />
        <Checkbox label="Medium" size="md" defaultChecked />
        <Checkbox label="Large" size="lg" defaultChecked />
      </div>
    </div>
  );
}

export const components = [
  {
    name: "Button",
    render: () => (
      <Button
        content="Click Me"
        onClick={() => console.log("Button clicked!")}
        size="md"
        variant="primary"
      />
    ),
  },
  {
    name: "Circular Loader",
    render: () => (
      <div style={{ width: "60px", height: "60px" }}>
        <CircularLoader />
      </div>
    ),
  },
  {
    name: "Linear Loader",
    render: () => (
      <div style={{ marginTop: "10px" }}>
        <LinearLoader />
      </div>
    ),
  },
  {
    name: "Input",
    render: () => (
      <Input placeholder="Enter text here" value="" onChange={() => {}} />
    ),
  },
  {
    name: "Alert",
    render: () => (
      <div className="flex flex-col gap-2">
        <Alert
          variant="success"
          message="Operation completed successfully!"
          dismissible
        />
        <Alert variant="error" message="Something went wrong." dismissible />
        <Alert
          variant="warning"
          message="Please review your input."
          dismissible
        />
        <Alert
          variant="info"
          message="Here is some useful information."
          dismissible
        />
      </div>
    ),
  },
  {
    name: "Avatar",
    render: () => (
      <div className="flex flex-wrap gap-4 items-end">
        <Avatar
          src="https://i.pravatar.cc/150"
          alt="User"
          size="md"
          status="online"
          shape="circle"
        />
        <Avatar
          src="https://i.pravatar.cc/151"
          initials="AG"
          size="sm"
          shape="circle"
          status="busy"
        />
        <Avatar
          src="https://i.pravatar.cc/152"
          initials="JD"
          size="md"
          shape="circle"
          status="offline"
        />
        <Avatar
          src="https://i.pravatar.cc/153"
          initials="AB"
          size="lg"
          shape="square"
        />
        <Avatar
          src="https://i.pravatar.cc/154"
          initials="XL"
          size="xl"
          shape="circle"
          status="online"
        />
        <Avatar src="https://i.pravatar.cc/155" size="md" shape="circle" />
      </div>
    ),
  },
  {
    name: "Referral Badge",
    render: () => (
      <div className="flex flex-col gap-2">
        <ReferralBadge variant="default" referralCode="john123" />
        <ReferralBadge variant="active" referralCode="jane456" />
        <ReferralBadge variant="reward" label="500 coins earned!" />
        <ReferralBadge variant="expired" />
        <ReferralBadge variant="default" referralCode="aditya" size="sm" />
        <ReferralBadge variant="active" referralCode="aditya" size="lg" />
      </div>
    ),
  },
  {
    name: "Card",
    render: () => (
      <div className="flex flex-wrap gap-4">
        <Card
          title="Getting Started"
          description="Learn how to build production-ready components with React and Tailwind CSS."
          imageUrl="https://picsum.photos/400/200?random=1"
          badge="New"
          badgeVariant="success"
          actionLabel="Read More"
          secondaryLabel="Save"
          onAction={() => console.log("action")}
          onSecondary={() => console.log("secondary")}
          size="md"
          variant="dark"
        />
        <Card
          title="Advanced Patterns"
          description="Explore advanced React patterns used in large-scale applications."
          imageUrl="https://picsum.photos/400/200?random=5"
          badge="Popular"
          badgeVariant="warning"
          actionLabel="Explore"
          size="md"
          variant="light"
        />
      </div>
    ),
  },
  {
    name: "Sidebar",
    render: () => (
      <div className="flex gap-6 h-150">
        <Sidebar
          logo="MyApp"
          variant="dark"
          activeHref="/dashboard"
          items={[
            { label: "Dashboard", href: "/dashboard", badge: "3" },
            { label: "Users", href: "/users" },
            { label: "Settings", href: "/settings" },
            { label: "Analytics", href: "/analytics" },
          ]}
        />
        <Sidebar
          logo="MyApp"
          variant="light"
          activeHref="/users"
          items={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Users", href: "/users", badge: "5" },
            { label: "Settings", href: "/settings" },
            { label: "Analytics", href: "/analytics" },
          ]}
        />
      </div>
    ),
  },
  {
    name: "InfoItem",
    render: () => (
      <div className="flex flex-wrap gap-4 ">
        <InfoItem
          label="Full Name"
          value="Aditya Sharma"
          variant="default"
          size="md"
        />
        <InfoItem
          label="Email"
          value="aditya@example.com"
          variant="subtle"
          size="md"
        />
        <InfoItem
          label="Password"
          value="Aditya@123"
          variant="highlight"
          size="lg"
        />
        <InfoItem
          label="Total Referrals"
          value="42"
          variant="highlight"
          size="lg"
          orientation="horizontal"
        />
      </div>
    ),
  },
  {
    name: "Help Popup",
    render: () => (
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          Default (click)
          <HelpPopup
            title="What is this?"
            content="This is a default help popup. Click the ? to open or close it."
            variant="default"
            placement="bottom"
            triggerType="click"
          />
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          Info (hover)
          <HelpPopup
            title="Did you know?"
            content="Hover triggers close automatically when you move away."
            variant="info"
            placement="top"
            triggerType="hover"
          />
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          Warning
          <HelpPopup
            title="Caution"
            content="This action cannot be undone. Please review before proceeding."
            variant="warning"
            placement="right"
            triggerType="click"
          />
        </div>
      </div>
    ),
  },
  {
    name: "ComboBox",
    render: () => <ComboBoxDemo />,
  },
  {
    name: "DatePicker",
    render: () => <DatePickerDemo />,
  },
  {
    name: "Table",
    render: () => <TableDemo />,
  },
  {
    name: "Select",
    render: () => <SelectDemo />,
  },
  {
    name: "Checkbox",
    render: () => <CheckboxDemo />,
  },
  {
    name: "Icon",
    render: () => (
      <div className="flex flex-wrap gap-6 items-center">
        <Icon icon="draw" size="xs" />
        <Icon icon="reload" size="sm" />
        <Icon icon="lock" size="md" />
        <Icon icon="house" size="lg" />
        <Icon icon="ghost" size="xl" />
        <Icon icon="menu" size="2xl" />

        {/* Custom colors */}
        <Icon icon="draw" size="md" color="#8b5cf6" />
        <Icon icon="lock" size="md" color="#ef4444" />
        <Icon icon="house" size="md" color="#22c55e" />

        {/* Tailwind color class */}
        <Icon icon="logOut" size="lg" colorClass="text-indigo-400" />
        <Icon icon="reload" size="lg" colorClass="text-orange-400" />
      </div>
    ),
  },
  {
    name: "Link",
    render: () => (
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-6 items-center">
          <Link href="/dashboard" variant="default">
            Default link
          </Link>
          <Link href="/dashboard" variant="primary">
            Primary link
          </Link>
          <Link href="/dashboard" variant="secondary">
            Secondary link
          </Link>
          <Link href="/dashboard" variant="underlined">
            Underlined link
          </Link>
        </div>

        <p className="text-sm text-gray-700">
          This paragraph has an{" "}
          <Link href="/privacy" variant="inline">
            inline link
          </Link>{" "}
          styled to sit naturally inside body text.
        </p>

        <div className="flex flex-wrap gap-6 items-center">
          <Link href="https://example.com">External link</Link>
          <Link
            href="/back"
            icon={<Icon icon="reload" size="sm" />}
            iconPlacement="leading"
          >
            Leading icon
          </Link>
          <Link
            href="/settings"
            icon={<Icon icon="house" size="sm" />}
            iconPlacement="trailing"
          >
            Trailing icon
          </Link>
          <Link href="/upgrade" disabled>
            Disabled link
          </Link>
        </div>
      </div>
    ),
  },
];