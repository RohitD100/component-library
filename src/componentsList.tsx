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
import Select from "./components/Select/Select";

const frameworkOptions = [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
    { label: "Angular", value: "angular" },
    { label: "SolidJS", value: "solidjs" },
];

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
                <Alert
                    variant="error"
                    message="Something went wrong."
                    dismissible
                />
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
                <Avatar
                    src="https://i.pravatar.cc/155"
                    size="md"
                    shape="circle"
                />
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
                <ReferralBadge
                    variant="default"
                    referralCode="aditya"
                    size="sm"
                />
                <ReferralBadge
                    variant="active"
                    referralCode="aditya"
                    size="lg"
                />
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
        render: () => {
            const [selected, setSelected] = useState<string | undefined>(
                undefined,
            );
            return (
                <ComboBox
                    options={frameworkOptions}
                    value={selected}
                    onChange={setSelected}
                    placeholder="Select a framework..."
                />
            );
        },
    },
    {
        name: "DatePicker",
        render: () => {
            const [date, setDate] = useState<Date | undefined>(undefined);
            const [dateMMDD, setDateMMDD] = useState<Date | undefined>(
                undefined,
            );
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
        },
    },
    {
        name: "Table",
        render: () => {
            const columns = [
                { key: "name", header: "Name" },
                { key: "email", header: "Email" },
                { key: "role", header: "Role" },
                {
                    key: "status",
                    header: "Status",
                    render: (row: any) => (
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

            const data = [
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
                    />
                    <Table
                        columns={columns}
                        data={data}
                        keyExtractor={(row) => row.id}
                        variant="striped"
                        size="sm"
                    />
                    <Table
                        columns={[]}
                        data={[]}
                        keyExtractor={(row: any) => row.id}
                        emptyMessage="No users found."
                    />
                </div>
            );
        },
    },
   
    {
  name: "Select",
  render: () => (
    <Select
      options={[
        { label: "India", value: "india" },
        { label: "USA", value: "usa" },
        { label: "UK", value: "uk" },
        { label: "Canada", value: "canada" },
      ]}
      value=""
      onChange={() => {}}
      placeholder="Select Country"
      clearable
    />
  ),
},

];

