import { useState } from 'react'
import BaseModal from './BaseModal'
import type { FormModalProps } from './types'
import {
  modalBody,
  modalHeader,
  modalTitle,
  formGroup,
  formLabel,
  formInput,
  modalFooter,
  btnCancel,
  btnSubmit,
} from './modalStyling'

export default function FormModal({
  isOpen,
  onClose,
  onSubmit,
  title = 'User Details',
  nameLabel = 'Name',
  namePlaceholder = 'Enter your name',
  emailLabel = 'Email',
  emailPlaceholder = 'Enter your email',
  submitText = 'Submit',
  cancelText = 'Cancel',
  loadingText = 'Submitting...',
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

        {/* Header */}
        <div className={modalHeader}>
          <h2 className={modalTitle}>{title}</h2>
        </div>

        {/* Name Field */}
        <div className={formGroup}>
          <label className={formLabel}>{nameLabel}</label>
          <input
            type="text"
            className={formInput}
            placeholder={namePlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email Field */}
        <div className={formGroup}>
          <label className={formLabel}>{emailLabel}</label>
          <input
            type="email"
            className={formInput}
            placeholder={emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Footer */}
        <div className={modalFooter}>
          <button onClick={onClose} className={btnCancel}>
            {cancelText}
          </button>
          <button onClick={handleSubmit} disabled={isLoading} className={btnSubmit}>
            {isLoading ? loadingText : submitText}
          </button>
        </div>

      </div>
    </BaseModal>
  )
}