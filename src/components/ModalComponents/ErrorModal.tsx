import BaseModal from './BaseModal'
import './modalStyling.css'

export interface ErrorModalProps {
  isOpen: boolean
  onClose: () => void
  onRetry?: () => void
  errorMessage?: string
  isLoading?: boolean
}

export default function ErrorModal({
  isOpen,
  onClose,
  onRetry,
  errorMessage = 'Something went wrong. Please try again.',
  isLoading = false,
}: ErrorModalProps) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="modal-body">

        {/* Header */}
        <div className="modal-header">
          <div className="modal-icon-error">❌</div>
          <h2 className="modal-title">Something Went Wrong</h2>
        </div>

        {/* Error Message */}
        <p className="modal-description">{errorMessage}</p>

        {/* Footer */}
        <div className="modal-footer">
          <button onClick={onClose} className="btn-cancel">
            Cancel
          </button>
          {onRetry && (
            <button
              onClick={onRetry}
              disabled={isLoading}
              className="btn-retry"
            >
              {isLoading ? 'Retrying…' : 'Try Again'}
            </button>
          )}
        </div>

      </div>
    </BaseModal>
  )
}