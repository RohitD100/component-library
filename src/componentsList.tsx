import { useState } from "react";
import Button from "./components/Button/Button";
import { CircularLoader } from "./components/CircularLoader/CircularLoader";
import { LinearLoader } from "./components/LinearLoader/LinearLoader";
import Input from "./components/Input/Input";
import Alert from "./components/Alert/Alert";
import Avatar from "./components/Avatar/Avatar";
import ReferralBadge from "./components/ReferralBadge/ReferralBadge";
import Card from "./components/Card/Card";
import HelpPopup from "./components/HelpPopup/HelpPopup";
import ComboBox from "./components/ComboBox/ComboBox";

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
];
