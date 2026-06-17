import { useState } from "react";
import Form from "./components/Form/Form";

const App = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <Form
                title="YaraCircle Sign In"
                size="md"
                onSubmit={(e) => e.preventDefault()}
                style={{
                    border: "1px solid white",
                    padding: "60px 40px",
                }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl"
                inputProps={[
                    {
                        label: "Email or YaraID",
                        name: "identifier",
                        type: "text",
                        placeholder: "you@example.com or @yourhandle",
                        value: "",
                        onChange: () => {},
                    },
                    {
                        label: "Password",
                        name: "password",
                        type: showPassword ? "text" : "password",
                        placeholder: "Enter your password",
                        value: "",
                        onChange: () => {},
                        rightIcon: showPassword ? "🙈" : "👁",
                        onRightIconClick: () => setShowPassword(!showPassword),
                    },
                ]}
            >
                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                    Sign In
                </button>
            </Form>
        </div>
    );
};

export default App;
