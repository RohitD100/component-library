import { useState } from 'react'
import Button from "./components/Button/Button";
import { CircularLoader } from "./components/CircularLoader/CircularLoader";
import { LinearLoader } from "./components/LinearLoader/LinearLoader";
import Input from "./components/Input/Input";
import BaseModal from "./components/ModelComponents/BaseModel";
import ConfirmationModal from "./components/ModelComponents/ConfirmationModel";

const BaseModalExample = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsOpen(true)} style={{ border:"2px solid #0e0505", padding: "8px 16px" }}>
        Open Base Modal
      </button>
      <BaseModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 style={{ fontSize: 16, fontWeight: 500, margin: '0 0 0.5rem' }}>Base Modal</h2>
        <p style={{ fontSize: 14, color: '#555' }}>This is the base modal content.</p>
      </BaseModal>
    </>
  )
}

const ConfirmationModalExample = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleConfirm = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsOpen(false)
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)} style={{ border: "2px solid #0e0505", padding: "8px 16px" }}>
        Delete
      </button>
      <ConfirmationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={handleConfirm}
        itemName="Project Alpha"
        isLoading={isLoading}
      />
    </>
  )
}

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
        name: "Base Modal",
        render: () => <BaseModalExample />,
    },
    {
        name: "Confirmation Modal",
        render: () => <ConfirmationModalExample />,
    },
];

