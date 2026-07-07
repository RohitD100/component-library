// import { useState } from 'react'
// import Button from "./components/Button/Button";
// import { CircularLoader } from "./components/CircularLoader/CircularLoader";
// import { LinearLoader } from "./components/LinearLoader/LinearLoader";
// import Input from "./components/Input/Input";
// import BaseModal from "./components/ModalComponents/BaseModal";
// import { useModal } from "./components/ModalComponents/Usemodal";

// // ─── Base Modal (keeps local state — not part of dynamic system) ──
// const BaseModalExample = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   return (
//     <>
//       <button onClick={() => setIsOpen(true)}>Open Base Modal</button>
//       <BaseModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
//         <h2 style={{ fontSize: 16, fontWeight: 500, margin: '0 0 0.5rem' }}>Base Modal</h2>
//         <p style={{ fontSize: 14, color: '#555' }}>This is the base modal content.</p>
//       </BaseModal>
//     </>
//   )
// }

// // ─── Confirmation Modal ───────────────────────────────────────
// const ConfirmationModalExample = () => {
//   const { showModal, hideModal } = useModal()

//   return (
//     <button onClick={() => showModal({
//       type: 'confirmation',
//       itemName: 'Project Alpha',
//       onConfirm: async () => {
//         await new Promise((resolve) => setTimeout(resolve, 1500))
//         hideModal()
//       },
//     })}>
//       Delete Project Alpha
//     </button>
//   )
// }

// // ─── Information Modal ────────────────────────────────────────
// const InformationModalExample = () => {
//   const { showModal, hideModal } = useModal()

//   return (
//     <button onClick={() => showModal({
//       type: 'information',
//       onAccept: () => {
//         console.log('Terms accepted!')
//         hideModal()
//       },
//     })}>
//       View Terms & Conditions
//     </button>
//   )
// }

// // ─── Error Modal ──────────────────────────────────────────────
// const ErrorModalExample = () => {
//   const { showModal, hideModal } = useModal()

//   return (
//     <button onClick={() => showModal({
//       type: 'error',
//       errorMessage: 'Failed to save your data. Please try again.',
//       onRetry: async () => {
//         await new Promise((resolve) => setTimeout(resolve, 1500))
//         hideModal()
//       },
//     })}>
//       Show Error
//     </button>
//   )
// }

// // ─── Form Modal ───────────────────────────────────────────────
// const FormModalExample = () => {
//   const { showModal, hideModal } = useModal()

//   return (
//     <button onClick={() => showModal({
//       type: 'form',
//       onSubmit: async (name: string, email: string) => {
//         console.log(name, email)
//         await new Promise((resolve) => setTimeout(resolve, 1500))
//         hideModal()
//       },
//     })}>
//       Show Form
//     </button>
//   )
// }

// // ─── Components List ──────────────────────────────────────────
// export const components = [
//   {
//     name: "Button",
//     render: () => (
//       <Button
//         content="Click Me"
//         onClick={() => console.log("Button clicked!")}
//         size="md"
//         variant="primary"
//       />
//     ),
//   },
//   {
//     name: "Circular Loader",
//     render: () => (
//       <div style={{ width: "60px", height: "60px" }}>
//         <CircularLoader />
//       </div>
//     ),
//   },
//   {
//     name: "Linear Loader",
//     render: () => (
//       <div style={{ marginTop: "10px" }}>
//         <LinearLoader />
//       </div>
//     ),
//   },
//   {
//     name: "Input",
//     render: () => (
//       <Input placeholder="Enter text here" value="" onChange={() => {}} />
//     ),
//   },
//   {
//     name: "Base Modal",
//     render: () => <BaseModalExample />,
//   },
//   {
//     name: "Confirmation Modal",
//     render: () => <ConfirmationModalExample />,
//   },
//   {
//     name: "Information Modal",
//     render: () => <InformationModalExample />,
//   },
//   {
//     name: "Error Modal",
//     render: () => <ErrorModalExample />,
//   },
//   {
//     name: "Form Modal",
//     render: () => <FormModalExample />,
//   },
// ]

import { useState } from 'react'
import Button from "./components/Button/Button";
import { CircularLoader } from "./components/CircularLoader/CircularLoader";
import { LinearLoader } from "./components/LinearLoader/LinearLoader";
import Input from "./components/Input/Input";
import BaseModal from "./components/ModalComponents/BaseModal";
import ConfirmationModal from "./components/ModalComponents/ConfirmationModal";
import InformationModal from "./components/ModalComponents/InformationModal";
import ErrorModal from "./components/ModalComponents/ErrorModal";
import FormModal from "./components/ModalComponents/FormModal";

const BaseModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Base Modal</button>
      <BaseModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 style={{ fontSize: 16, fontWeight: 500 }}>Base Modal</h2>
        <p>This is the base modal content.</p>
      </BaseModal>
    </>
  );
};

const ConfirmationModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Delete Project Alpha</button>
      <ConfirmationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        message="Are you sure you want to delete Project Alpha?"
        onConfirm={async () => {
          await new Promise(r => setTimeout(r,1500));
          setIsOpen(false);
        }}
      />
    </>
  );
};

const InformationModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>View Terms & Conditions</button>
      <InformationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onAccept={() => {
          console.log("Terms accepted!");
          setIsOpen(false);
        }}
      />
    </>
  );
};

const ErrorModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Show Error</button>
      <ErrorModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        errorMessage="Failed to save your data. Please try again."
        onRetry={async () => {
          await new Promise(r => setTimeout(r,1500));
          setIsOpen(false);
        }}
      />
    </>
  );
};

const FormModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Show Form</button>
      <FormModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={async (name:string,email:string)=>{
          console.log(name,email);
          await new Promise(r=>setTimeout(r,1500));
          setIsOpen(false);
        }}
      />
    </>
  );
};

export const components=[
{name:"Button",render:()=> <Button content="Click Me" onClick={()=>console.log("Button clicked!")} size="md" variant="primary"/>},
{name:"Circular Loader",render:()=> <div style={{width:"60px",height:"60px"}}><CircularLoader/></div>},
{name:"Linear Loader",render:()=> <div style={{marginTop:"10px"}}><LinearLoader/></div>},
{name:"Input",render:()=> <Input placeholder="Enter text here" value="" onChange={()=>{}}/>},
{name:"Base Modal",render:()=> <BaseModalExample/>},
{name:"Confirmation Modal",render:()=> <ConfirmationModalExample/>},
{name:"Information Modal",render:()=> <InformationModalExample/>},
{name:"Error Modal",render:()=> <ErrorModalExample/>},
{name:"Form Modal",render:()=> <FormModalExample/>},
];
