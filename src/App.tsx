import Alert from "./components/Alert/Alert";

const App = () => {
    return (
        <div>
            <Alert
                variant="success"
                message="Operation completed successfully!"
                dismissible
                onDismiss={() => console.log("alert closed")}
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
    );
};

export default App;
