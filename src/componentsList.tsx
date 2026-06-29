import { useState } from 'react'
import Button from "./components/Button/Button";
import { CircularLoader } from "./components/CircularLoader/CircularLoader";
import { LinearLoader } from "./components/LinearLoader/LinearLoader";
import Input from "./components/Input/Input";
import BaseModal from "./components/ModalComponents/BaseModal";
import ConfirmationModal from "./components/ModalComponents/ConfirmationModel";
import InformationModal from "./components/ModalComponents/InformationModel";
import ErrorModal from "./components/ModalComponents/ErrorModal";

const BaseModalExample = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Base Modal</button>
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
      <button onClick={() => setIsOpen(true)}>Delete Project Alpha</button>
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

const InformationModalExample = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>View Terms & Conditions</button>
      <InformationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onAccept={() => {
          setIsOpen(false)
          console.log('Terms accepted!')
        }}
      />
    </>
  )
}



const ErrorModalExample = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleRetry = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsOpen(false)
  }

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Show Error</button>
      <ErrorModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onRetry={handleRetry}
        errorMessage="Failed to save your data. Please try again."
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
    {
        name: "Information Modal",
        render: () => <InformationModalExample />,
    },
    {
        name: "Error Modal",
        render: () => <ErrorModalExample />,
    }
];
