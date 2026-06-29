import BaseModal from './BaseModal'
import './modalStyling.css'

export interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  itemName?: string
  isLoading?: boolean
}

export default function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  isLoading = false,
}: ConfirmationModalProps) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="modal-body">
        <p className="modal-description">
          Are you sure you want to delete? This action cannot be undone.
        </p>

        <div className="modal-footer">
          <button onClick={onClose} className="btn-cancel">
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className="btn-danger"
          >
            {isLoading ? 'Deleting…' : 'Yes, delete'}
          </button>
        </div>
      </div>
    </BaseModal>
  )
}
