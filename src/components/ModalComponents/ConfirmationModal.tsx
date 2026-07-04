import BaseModal from './BaseModal'
import type { ConfirmationModalProps } from './types'
import { modalBody, modalDescription, modalFooter, btnCancel, btnDanger } from './modalStyling'

export default function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  onCancel,
  message = 'Are you sure you want to delete? This action cannot be undone.',
  confirmText = 'Yes, delete',
  cancelText = 'Cancel',
  isLoading = false,
  loadingText = 'Deleting…',
}: ConfirmationModalProps) {

  const handleCancel = () => {
    if (onCancel) onCancel()
    onClose()
  }

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className={modalBody}>
        <p className={modalDescription}>{message}</p>
        <div className={modalFooter}>
          <button onClick={handleCancel} className={btnCancel}>
            {cancelText}
          </button>
          <button onClick={onConfirm} disabled={isLoading} className={btnDanger}>
            {isLoading ? loadingText : confirmText}
          </button>
        </div>
      </div>
    </BaseModal>
  )
}