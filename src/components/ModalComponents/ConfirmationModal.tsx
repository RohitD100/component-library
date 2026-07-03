import BaseModal from './BaseModal'
import type { ConfirmationModalProps } from './types'
import { modalBody, modalDescription, modalFooter, btnCancel, btnDanger } from './modalStyling'

export default function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  isLoading = false,
}: ConfirmationModalProps) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className={modalBody}>
        <p className={modalDescription}>
          Are you sure you want to delete? This action cannot be undone.
        </p>
        <div className={modalFooter}>
          <button onClick={onClose} className={btnCancel}>Cancel</button>
          <button onClick={onConfirm} disabled={isLoading} className={btnDanger}>
            {isLoading ? 'Deleting…' : 'Yes, delete'}
          </button>
        </div>
      </div>
    </BaseModal>
  )
}