
import Button from "./components/Button/Button";
import { CircularLoader } from "./components/CircularLoader/CircularLoader";
import { LinearLoader } from "./components/LinearLoader/LinearLoader";
import Input from "./components/Input/Input";
import Alert from "./components/Alert/Alert";
import Avatar from "./components/Avatar/Avatar";
import ReferralBadge from "./components/ReferralBadge/ReferralBadge";
import Card from "./components/Card/Card";
import Select from "./components/Select/Select";

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
      <Input
        placeholder="Enter text here"
        value=""
        onChange={() => {}}
      />
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
      </div>
    ),
  },

  {
    name: "Referral Badge",
    render: () => (
      <div className="flex flex-col gap-2">
        <ReferralBadge
          variant="default"
          referralCode="john123"
        />
        <ReferralBadge
          variant="active"
          referralCode="jane456"
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
          description="Learn how to build production-ready components."
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
      </div>
    ),
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
        searchable
        clearable
      />
    ),
  },
];

