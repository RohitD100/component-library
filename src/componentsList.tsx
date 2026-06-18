import Button from "./components/Button/Button";
import { CircularLoader } from "./components/CircularLoader/CircularLoader";
import { LinearLoader } from "./components/LinearLoader/LinearLoader";
import Input from "./components/Input/Input";
import Alert from "./components/Alert/Alert";
import Avatar from "./components/Avatar/Avatar";

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
                <Avatar initials="AG" size="sm" shape="circle" status="busy" />
                <Avatar
                    initials="JD"
                    size="md"
                    shape="circle"
                    status="offline"
                />
                <Avatar initials="AB" size="lg" shape="square" />
                <Avatar
                    initials="XL"
                    size="xl"
                    shape="circle"
                    status="online"
                />
                <Avatar size="md" shape="circle" />
            </div>
        ),
    },
];
