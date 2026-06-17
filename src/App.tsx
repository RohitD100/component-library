import { useState } from "react";
import Input from "./components/Input/Input";

const App = () => {
    const [text, setText] = useState("");
    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <Input
                size="md"
                variant="light"
                placeholder="Enter text here"
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ width: "300px" }}
                className="h-10"
            />
            <br />
            <Input size="sm" variant="dark" leftIcon={"🔍"} placeholder="Search..."  style={{width:"200px"}}/>
            <br />
            <Input size="lg" rightIcon={"👁"} placeholder="Password" />
        </div>
    );
};

export default App;
