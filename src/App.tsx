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
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    padding: "24px",
                    backgroundColor: "white",
                    border: "1px solid gray",
                    borderRadius: "12px",
                    margin: "0 auto",
                }}
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
