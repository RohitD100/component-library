import BaseModal from './BaseModal'
import type { ErrorModalProps } from './types'
import { modalBody, modalHeader, modalIconError, modalTitle, modalDescription, modalFooter, btnCancel, btnRetry } from './modalStyling'

export default function ErrorModal({
  isOpen,
  onClose,
  onRetry,
  errorMessage = 'Something went wrong. Please try again.',
  isLoading = false,
}: ErrorModalProps) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className={modalBody}>
        <div className={modalHeader}>
          <div className={modalIconError}>❌</div>
          <h2 className={modalTitle}>Something Went Wrong</h2>
        </div>
        <p className={modalDescription}>{errorMessage}</p>
        <div className={modalFooter}>
          <button onClick={onClose} className={btnCancel}>Cancel</button>
          {onRetry && (
            <button onClick={onRetry} disabled={isLoading} className={btnRetry}>
              {isLoading ? 'Retrying…' : 'Try Again'}
            </button>
          )}
        </div>
      </div>
    </BaseModal>
  )
}