import Form from "./components/Form/Form";

const App = () => {
    return (
        <div>
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    alert("Form submitted!");
                }}
                title="Login Form"
                inputProps={[
                    {
                        label: "Username",
                        name: "username",
                        type: "text",
                        placeholder: "Enter your username",
                        value: "",
                        onChange: () => {},
                    },
                    {
                        label: "Password",
                        name: "password",
                        type: "password",
                        placeholder: "Enter your password",
                        value: "",
                        onChange: () => {},
                    },
                ]}
            >
                <button
                    type="submit"
                    style={{
                        backgroundColor: "green",
                        color: "white",
                        padding: "8px 16px",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    Submit
                </button>
            </Form>
        </div>
    );
};

export default App;
