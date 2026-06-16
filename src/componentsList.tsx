import Button from "./components/Button/Button";
import { CircularLoader } from "./components/CircularLoader/CircularLoader";
import { LinearLoader } from "./components/LinearLoader/LinearLoader";

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
];
