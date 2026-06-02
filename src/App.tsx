import { useState } from "react";
import Alert from "./components/Alert/Alert";
import Avatar from "./components/Avatar/Avatar";
import Badge from "./components/Badge/Badge";
import Button from "./components/Button/Button";
import Card from "./components/Card/Card";
import CheckBox from "./components/Checkbox/CheckBox";
import Container from "./components/Container/Container";
import Dropdown from "./components/Dropdown/Dropdown";
import Input from "./components/input/Input";
import Radio from "./components/Radio/Radio";
import Spinner from "./components/Spinner/Spinner";
import Toggle from "./components/Toggel/Toggel";

const App = () => {
    const [enabled, setEnabled] = useState(false);
    return (
        <div className="">
            <h1 className="text-3xl font-bold underline text-center mt-10">
                Component Library
            </h1>
            <div className="m-auto p-10 flex gap-10 items-center justify-center flex-wrap">
                <div className="border h-70 w-60 p-5 flex items-center justify-center rounded-2xl">
                    <Card
                        children={
                            <div className="flex flex-col items-center justify-center h-full">
                                <h2 className="text-xl font-semibold mb-4">
                                    This is a Card component
                                </h2>
                                <p className="text-gray-600">
                                    You can put any content inside this card.
                                </p>
                            </div>
                        }
                        className="mt-10 border shadow"
                        height={180}
                        width={180}
                    />
                </div>
                <div className="border h-70 w-60 p-5 flex items-center justify-center rounded-2xl">
                    <Button
                        children="Save me"
                        variant="dark"
                        size="md"
                        loading={false}
                        className="rounded mt-10"
                    />
                </div>
                <div className="border h-70 w-60 p-5 flex items-center justify-center rounded-2xl">
                    <Input
                        placeholder="Enter your name"
                        name="name"
                        size="md"
                        theme="dark"
                        className="rounded"
                    />
                </div>
                <div className="border h-70 w-60 p-5 flex items-center justify-center rounded-2xl">
                    <Avatar
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="John Doe"
                        size="md"
                    />
                </div>
                <div className="border h-70 w-60 p-5 flex items-center justify-center rounded-2xl">
                    <Spinner size="md" />
                </div>
                <div className="border h-70 w-60 p-5 flex items-center justify-center rounded-2xl">
                    <Alert type="success" message="This is a success alert!" />
                </div>
                <div className="border h-70 w-60 p-5 flex items-center justify-center rounded-2xl">
                    <Container>
                        <Alert
                            type="warning"
                            message="This is a warning alert!"
                        />
                    </Container>
                </div>
                <div className="border h-70 w-60 p-5 flex items-center justify-center rounded-2xl">
                    <Radio options={["Option 1", "Option 2", "Option 3"]} />
                </div>
                <div className="border h-70 w-60 p-5 flex items-center justify-center rounded-2xl">
                    <CheckBox loading={false} label="Option 1" />
                </div>
                <div className="border h-70 w-60 p-5 flex items-center justify-center rounded-2xl">
                    <Dropdown options={["Option 1", "Option 2", "Option 3"]} />
                </div>
                <div className="border h-70 w-60 p-5 flex items-center justify-center rounded-2xl">
                    <Badge variant="danger">Default Badge</Badge>
                </div>
                <div className="border h-70 w-60 p-5 flex items-center justify-center rounded-2xl">
                    <Toggle size="md" checked={enabled} onClick={() => setEnabled(!enabled)} />
                </div>
            </div>
        </div>
    );
};

export default App;
