import BaseModal from './BaseModal'
import type { ErrorModalProps } from './types'
import {
  modalBody,
  modalHeader,
  modalIconError,
  modalTitle,
  modalDescription,
  modalFooter,
  btnCancel,
  btnRetry,
} from './modalStyling'

export default function ErrorModal({
  isOpen,
  onClose,
  onRetry,
  title = 'Something Went Wrong',
  icon = '❌',
  errorMessage = 'Something went wrong. Please try again.',
  retryText = 'Try Again',
  cancelText = 'Cancel',
  loadingText = 'Retrying…',
  isLoading = false,
}: ErrorModalProps) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className={modalBody}>

        {/* Header */}
        <div className={modalHeader}>
          <div className={modalIconError}>{icon}</div>
          <h2 className={modalTitle}>{title}</h2>
        </div>

        {/* Error Message */}
        <p className={modalDescription}>{errorMessage}</p>

        {/* Footer */}
        <div className={modalFooter}>
          <button onClick={onClose} className={btnCancel}>
            {cancelText}
          </button>
          {onRetry && (
            <button onClick={onRetry} disabled={isLoading} className={btnRetry}>
              {isLoading ? loadingText : retryText}
            </button>
          )}
        </div>

      </div>
    </BaseModal>
  )
}