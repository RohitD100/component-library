import BaseModal from './BaseModel'

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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>


        <p style={{ fontSize: 14, color: '#555', lineHeight: 1.6, margin: 0 }}>
          Are you sure you want to delete ? This action cannot be undone.
        </p>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 8 }}>
          <button
            onClick={onClose}
            style={{
              padding: '8px 16px',
              fontSize: 14,
              fontWeight: 500,
              borderRadius: 8,
              border: '0.5px solid #d1d1d1',
              background: '#ffffff',
              color: '#111',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={isLoading}
            style={{
              padding: '8px 16px',
              fontSize: 14,
              fontWeight: 500,
              borderRadius: 8,
              border: 'none',
              background: '#fee2e2',
              color: '#b91c1c',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              opacity: isLoading ? 0.6 : 1,
            }}
          >
            {isLoading ? 'Deleting…' : 'Yes, delete'}
          </button>
        </div>

      </div>
    </BaseModal>
  )
}
