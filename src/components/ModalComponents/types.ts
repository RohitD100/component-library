import { ReactNode } from 'react'

// ─── Base Modal ───────────────────────────────────────────────
export interface BaseModalProps {
  isOpen: boolean
  onClose: () => void
  children?: ReactNode
  overlayClassName?: string
  panelClassName?: string
}

// ─── Confirmation Modal ───────────────────────────────────────
export interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  onCancel?: () => void
  message?: string
  confirmText?: string
  cancelText?: string
  itemName?: string
  isLoading?: boolean
  loadingText?: string
}

// ─── Error Modal ──────────────────────────────────────────────
export interface ErrorModalProps {
  isOpen: boolean
  onClose: () => void
  onRetry?: () => void
  title?: string
  icon?: string
  errorMessage?: string
  retryText?: string
  cancelText?: string
  loadingText?: string
  isLoading?: boolean
}

// ─── Information Modal ────────────────────────────────────────
export interface InformationSection {
  heading: string
  content: string
}

export interface InformationModalProps {
  isOpen: boolean
  onClose: () => void
  onAccept: () => void
  title?: string
  icon?: string
  sections?: InformationSection[]
  checkboxLabel?: string
  acceptText?: string
  cancelText?: string
}

// ─── Form Modal ───────────────────────────────────────────────
export interface FormModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (name: string, email: string) => void
  title?: string
  nameLabel?: string
  namePlaceholder?: string
  emailLabel?: string
  emailPlaceholder?: string
  submitText?: string
  cancelText?: string
  loadingText?: string
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