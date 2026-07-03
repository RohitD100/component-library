import { useState } from 'react'
import BaseModal from './BaseModal'
import type { FormModalProps } from './types'
import { modalBody, modalHeader, modalTitle, formGroup, formLabel, formInput, modalFooter, btnCancel, btnSubmit } from './modalStyling'

export default function FormModal({
  isOpen,
  onClose,
  onSubmit,
  isLoading = false,
}: FormModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    onSubmit(name, email)
  }

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className={modalBody}>
        <div className={modalHeader}>
          <h2 className={modalTitle}>User Details</h2>
        </div>
        <div className={formGroup}>
          <label className={formLabel}>Name</label>
          <input
            type="text"
            className={formInput}
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={formGroup}>
          <label className={formLabel}>Email</label>
          <input
            type="email"
            className={formInput}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={modalFooter}>
          <button onClick={onClose} className={btnCancel}>Cancel</button>
          <button onClick={handleSubmit} disabled={isLoading} className={btnSubmit}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </div>
    </BaseModal>
  )
}