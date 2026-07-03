import { createContext, useState, useCallback } from 'react'
import type { ReactNode } from 'react'
import type { ModalContextValue, ModalProps } from './types'

export const ModalContext = createContext<ModalContextValue | null>(null)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ModalProps | null>(null)

  const showModal = useCallback((m: ModalProps) => setModal(m), [])
  const hideModal = useCallback(() => setModal(null), [])

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {/* ModalRenderer is imported here to keep App.tsx clean */}
      <ModalRendererInternal modal={modal} hideModal={hideModal} />
    </ModalContext.Provider>
  )
}

// ── Internal renderer (lives here to avoid circular imports) ──
import ConfirmationModal from "./ConfirmationModal"
import ErrorModal from './ErrorModal'
import InformationModal from "./InformationModal"
import FormModal from './FormModal'

function ModalRendererInternal({
  modal,
  hideModal,
}: {
  modal: ModalProps | null
  hideModal: () => void
}) {
  if (!modal) return null

  const common = { isOpen: true, onClose: hideModal }

  switch (modal.type) {
    case 'confirmation':
      return <ConfirmationModal {...common} {...modal} />

    case 'error':
      return <ErrorModal {...common} {...modal} />

    case 'information':
      return <InformationModal {...common} {...modal} />

    case 'form':
      return <FormModal {...common} {...modal} />

    default:
      return null
  }
}