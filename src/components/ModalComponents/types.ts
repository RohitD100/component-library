import type { ReactNode } from 'react'

// ─── Base Modal ───────────────────────────────────────────────
export interface BaseModalProps {
  isOpen: boolean
  onClose: () => void
  children?: ReactNode
}

// ─── Confirmation Modal ───────────────────────────────────────
export interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  itemName?: string
  isLoading?: boolean
}

// ─── Error Modal ──────────────────────────────────────────────
export interface ErrorModalProps {
  isOpen: boolean
  onClose: () => void
  onRetry?: () => void
  errorMessage?: string
  isLoading?: boolean
}

// ─── Information Modal ────────────────────────────────────────
export interface InformationModalProps {
  isOpen: boolean
  onClose: () => void
  onAccept: () => void
}

// ─── Form Modal ───────────────────────────────────────────────
export interface FormModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (name: string, email: string) => void
  isLoading?: boolean
}

// ─── Modal Context ────────────────────────────────────────────
export type ModalType = 'confirmation' | 'error' | 'information' | 'form'

export type ModalProps =
  | ({ type: 'confirmation' } & Omit<ConfirmationModalProps, 'isOpen' | 'onClose'>)
  | ({ type: 'error' }       & Omit<ErrorModalProps,        'isOpen' | 'onClose'>)
  | ({ type: 'information' } & Omit<InformationModalProps,  'isOpen' | 'onClose'>)
  | ({ type: 'form' }        & Omit<FormModalProps,         'isOpen' | 'onClose'>)

export interface ModalContextValue {
  showModal: (modal: ModalProps) => void
  hideModal: () => void
}

export interface ModalState {
  modal: ModalProps | null
}